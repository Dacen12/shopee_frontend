import React, {useEffect, useState, useMemo} from 'react'
import {useParams} from 'react-router-dom'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import ErrorDialog from '../components/ErrorDialog'
import axios from 'axios'
import { Link } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs'
import {makeId} from '../misc/makeid'
function Item({useBag}) {
  const params = useParams()
  const [itemStock, setItemStock] = useState([])
  const [itemModel, setItemModel] = useState('')
  const [selectedSize, setSelectedSize] = useState({})
  const {bag, addToBag, showBag, setShowBag} = useBag


  function passToBag(stockArray){
    const formatAttributes = {
      id: selectedSize.sizeId,
      brand: stockArray.brand,
      model: stockArray.model,
      price: stockArray.price,
      image_url: stockArray.image_url && stockArray.image_url[0],
      size: [{sizeId: makeId(3), selectedSize}],
    }

    addToBag(formatAttributes)

  }


  const setBreadCrumb = useMemo(() => {
   return <BreadCrumbs model={{itemModel}} />
  }, [itemModel])


function getItem () {
   axios.get(`http://192.168.1.210:4040/gndr/${params.gender}/item_id=${params.item}`).then((res) => {
   setItemStock(res.data)  
   setItemModel(res.data.model && res.data.model)

  })
}

function setSizeItem(e, el){
const {target} = e
const setterId = target.attributes.getNamedItem('data-sizeid').value
console.log(setterId)
setSelectedSize({sizeId: setterId, element: el})
}
function Button(customclass, stockArray) {
  return (<div onClick={() => passToBag(stockArray)} className={customclass}><Link className="item-link" to="/winkelwagen"> <button  className="cart-button">Toevoegen aan winkelwagen</button> </Link></div>)
}

 
  
  useEffect(() => {
    getItem()
  }, [])
  
  return itemStock !== 'ERR_ITEM_DOES_NOT_EXISTS' ? (<>
    {setBreadCrumb}
    <div className="Item">
     <div className="img-frame">
      <Splide className="splide-container" options={{arrows: false, gap: '30px'}}>
        {itemStock.image_url && itemStock.image_url.map((url) => (
          <SplideSlide className="splide-images">
            <img className="img-slide" src={url} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  
      <div className="info-item">
        <div className="info-brand">
          <span className="item-brand">{itemStock.brand}</span>
          <span className="item-model">{itemStock.model}</span>
          </div>
        <div className="class-price">
          <div className="item-price"><span>Prijs</span></div>
          <div className="item-show-price">
          <span>€ {itemStock.price}</span>
          </div>
        </div>
  
        {itemStock.size && itemStock.size.length  > 1 ? (
         <div className="size-outer-container">
           <div className="size-container">
             <span className="s-i">Maat</span>
             <div className="size">
               {itemStock.size && itemStock.size.map((el, index) => { 
                return <span onClick={(e) => {setSizeItem(e, el)}} data-sizeid={index} key={index} className={`sizebox ${selectedSize.element == el ? 'set-selected-size': ''}`}>{el}</span>
               }) }
             </div>
             {Button('with-size', itemStock)}
           </div>
         </div>) : Button('without-size', itemStock)}  </div>
      </div>       
 
    </>): <ErrorDialog />
}

export default Item