import React, {useEffect} from 'react'
import BreadCrumbs from '../components/BreadCrumbs'
import ShowRedirect from '../components/ShowRedirect'
export default function Bag({useBag}) {
    const {bag, setBag, showBag, setShowBag, deleteFromBag} = useBag



  
    return bag.length !== 0 ?  (
    <div className="Bag">
      <div className="display-crumbs">
        <BreadCrumbs />
      </div>
      <div className="bag-wrapper">
        
        {bag && bag.map((item) => (
          <div className="item-container">
          
          <div className="image-container">
          <img src={item.image_url} />
          </div>
          <div className="item-start">
            <div className="item-brand">
              <span>{item.brand}</span>
            </div>
            <div className="item-model">
                {item.model}
              </div>
              <div className="item-price">
                <span>€ {item.price}</span>
              </div>
            </div>

            <div className="item-selection">
              <div className="item-delete">
                <span onClick={() => deleteFromBag(item.model)}></span>
              </div>
            </div>
        </div>
        ))}


      </div>


    </div>

    
   ) : <ShowRedirect />
}

// onClick={() => setShowBag(prevValue => !prevValue)} 
