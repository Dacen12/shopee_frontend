import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import useData from '../misc/useData'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import ErrorDialog from '../components/ErrorDialog'
import axios from 'axios'
import BreadCrumbs from '../components/BreadCrumbs'
function Item() {
  const params = useParams()
  const [itemStock, setItemStock] = useState([])

function getItem () {
   axios.get(`http://192.168.1.210:4040/gndr/${params.gender}/item_id=${params.item}`).then((res) => {
   setItemStock(res.data)  
   console.log(res.data)
  })
   
}

function Button(customclass) {
  return (<div className={customclass}><button className="cart-button">Toevoegen aan winkelwagen</button></div>)
}
  
  useEffect(() => {
    getItem()
    console.log(params)
    
  }, [])
  
  return itemStock !== 'ERR_ITEM_DOES_NOT_EXISTS' ? (<>
    {/* <BreadCrumbs /> */}
    <div className="Item">
    <div className="img-frame">
      <Splide className="splide-container" options={{arrows: false}}>
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
        <span>€ {itemStock.price}</span>
      </div>
      
          {itemStock.size && itemStock.size.length  > 1 ? (
          <div className="size-outer-container">
            <div className="size-container">
              <span className="s-i">Maat</span>
              <div className="size">
                {itemStock.size && itemStock.size.map((el) => (
                  <span key={itemStock.id} className="sizebox">{el}</span>
                ))}
              </div>
              {Button('with-size')}
            </div>
          </div>) : Button('without-size')}

    </div>
    
    </div>
    </>): <ErrorDialog />
}

export default Item