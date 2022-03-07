import React, {useEffect, useState} from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import ShowRedirect from '../components/ShowRedirect'
import OrderComplete from '../components/OrderComplete'
import Numeral from 'react-numeral'

export default function Bag({useBag}) {
    const {bag, setBag, showBag, setShowBag, deleteFromBag, changeAmount, generatePdf} = useBag
    const [orderComplete, setOrderComplete] = useState(false)
    function setTotalPrice(obj){
      const {actual_price, amount} = obj
      const pToFloat = parseFloat(actual_price).toFixed(2)
      const amountInt = parseInt(amount)
      const convert = (pToFloat * amountInt)
    
      return <Numeral value={convert.toFixed(0)} format={'0,0.00'} />
    }
  
  
    return bag.length !== 0 && orderComplete == false ? (
    <div className="Bag">
      <div className="display-crumbs">
        <BreadCrumbs />
      </div>
      <div className="bag-wrapper">
        
      {bag && bag.map((obj) => (

      <div className="item-container">
      <div className="image-container">
        <img src={obj.image_url} alt="Foto winkelwagen" />
      </div>

      <div className="item-start">
        <div className="item-brand">
          <span>{obj.brand}</span>
        </div>
        <div className="item-model">
          <span>{obj.model}</span>
        </div>
      </div>

      <div className="item-price">
          <span>Prijs: € {obj.price}</span>
        </div>
        <div className="amount">
          <span> Aantal: {obj.amount}</span>
        </div>

        <div className="total">
          <span>Totaal : € {setTotalPrice(obj)} </span>
        </div>
       <span className="change-amount">Verander aantal</span>
        <select id="selection" onChange={e => changeAmount(e, obj)} className="select">
            <option className="first-option" value="" selected disabled hidden>Kies aantal</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <span onClick={() => 
          deleteFromBag(obj.model)} className="delete">Verwijderen</span>
      </div> 
      ))}
    
    </div>
    <button onClick={() => setOrderComplete(true)} className="order">Bestellen</button>
    </div>
    

    
   ) : (orderComplete == true ? (<OrderComplete bagArray={{bag}} />) : <ShowRedirect />)
}
















