import React,{useState} from 'react'

function useBag() {
  const [bag, setBag] = useState([])
  const [showBag, setShowBag] = useState(false)
  return [bag, setBag, [showBag, setShowBag]]
}

export default useBag