import React from 'react'
import {SplideSlide, Splide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';

function Card({arrayObj}) {
  const {obj} = arrayObj
  
  return (
    <div className="card">
        <Splide className="splide-holder" options={{arrows: false}}>
       
            <SplideSlide className="splide-wave">
            <img src="" />
        </SplideSlide>
    
        
        </Splide>
        <div className="item-info">
        <span className="item-brand">Brand</span>
            <span className="item-model">Model</span>
        </div>
        
        <div className="option-holder">
            <div className="price-right">€ Price<span></span></div>
            <div className="add-to-cart">Toevoegen</div>
        </div>
    </div>
  )
}

export default Card