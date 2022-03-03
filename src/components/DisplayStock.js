import React, {useEffect} from 'react'
import {SplideSlide, Splide} from '@splidejs/react-splide'
import { Link } from 'react-router-dom';
import '@splidejs/splide/dist/css/splide.min.css';

function DisplayStock({stock}) {
  const {modifiedArray} = stock

  function setLinkToItem(obj){
    const {id, sex} = obj
    if(sex == 'male'){
      return  `/gndr/heren/item_id=${id}`
    } else if(sex == 'female'){
      return `/gndr/dames/item_id=${id}`
    }
  }
 
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
        <Link className="display-link" to={setLinkToItem(obj)}>
          <div className="item-info">
            <span className="item-brand">{obj.brand}</span>
              <span className="item-model">{obj.model}</span>
          </div>
        
          <div className="option-holder">
            <div className="price-right">€ {obj.price}<span></span></div>
          </div>
        </Link>
    </div>
    
      </div>
      ))}
      
    </div>
  )
}
// <Link className="display-link" to={setLinkToItem(obj)}>Toevoegen</Link>
export default DisplayStock