import React from 'react'
import axios from 'axios'
import {saveAs} from 'file-saver'
import { useNavigate, Navigate } from 'react-router-dom'
function OrderComplete({bagArray}) {
    const {bag} = bagArray
    const navigator = useNavigate()
    function sendOrder (){
       axios({
           method: 'POST',
           responseType: 'blob',
           url:'http://192.168.1.210:4040/pdf',
           data: {arrayBag: bag}
       }).then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data], {type: "application/pdf;charset=utf-8"}))
        saveAs(url)
       })
    }



  return bag  && bag.length > 1 ? (
    <div className="order-complete">
        <span>Je bestelling is verwerkt</span>
        <span>Je kunt <i onClick={() => sendOrder()}>hier klikken</i> om je factuur te bekijken</span>
        <span>En natuurlijk, bedankt voor het shoppen bij <span>Shopee</span> </span>
    </div>
  ): Navigate({to: '/'})
}

export default OrderComplete