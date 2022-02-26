import React,{useEffect, useState} from 'react'
import { makeId } from '../misc/makeid'
function useBag() {
  const [bag, setBag] = useState([])
  // bag array structure: {[id: 0, brand: '', model: '', image_url: '', size: [{sizeId: '', selectedSize: ''}], amount: 0}]
  const [showBag, setShowBag] = useState(false)

  
  function setItem() {
    window.localStorage.setItem('cart',JSON.stringify(bag))
  }

    function sameSize(itemObj){
      const getSizeReq = itemObj.size.map(obj => obj.selectedSize)
      const selectedSize = {}
      
      for (var size of getSizeReq){
        selectedSize.size = size.element 
      }

      return selectedSize
    }



  function addToBag(itemObj){
    const itemExists = bag.some(obj => obj.model== itemObj.model)
    
    if(itemExists){  
      const sizeValue = sameSize(itemObj) //42, XS, M, 27x30
      bag.forEach((obj) => {
        obj.size.push({sizeId: makeId(3), element: sizeValue})
      })
  } else {
      setBag(prevValue => ([...prevValue, itemObj]))
    }
  }
 

  function deleteFromBag(itemModel){
    const returnLeftOver = bag.filter(obj => obj.model !== itemModel)
  
    setBag(returnLeftOver)
  }

  useEffect(() => {
    setItem()
  }, [bag])

  const bagOptions = {
    bag,
    addToBag,
    showBag,
    setShowBag,
    deleteFromBag
  }

  return bagOptions
}

export default useBag