import React, {useEffect} from 'react'
import {SplideSlide, Splide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';

function DisplayStock({stock}) {
  const {modifiedArray} = stock


 
  return (

    <div className="display-stock">
   
      {modifiedArray && modifiedArray.map((obj) => (
        <div key={obj.id} className="card-holder">
        <div className="card">
        <Splide className="splide-holder" options={{arrows: false}}>
       
           {obj.image_url.map((url) => (
              <SplideSlide className="splide-wave">
              <img src={url} />
          </SplideSlide>
           ))}
    
        
        </Splide>
        <div className="item-info">
        <span className="item-brand">{obj.brand}</span>
            <span className="item-model">{obj.model}</span>
        </div>
        
        <div className="option-holder">
            <div className="price-right">€ {obj.price}<span></span></div>
            <div className="add-to-cart">Toevoegen</div>
        </div>
    </div>
      </div>
      ))}
      
    </div>
  )
}

export default DisplayStock