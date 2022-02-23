import React, {} from 'react'

export default function Bag({hideBag}) {
    const {bag, setBag, showBag, setShowBag} = hideBag

  

  
    return (
    
    <div onClick={() => setShowBag(prevValue => !prevValue)}  className={`Bag ${showBag == true ? 'setforwards': 'setreverse'}`}>
    
       
    </div>

    
  )
}
