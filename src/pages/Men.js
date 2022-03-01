import React from 'react'
import DisplayStock from '../components/DisplayStock'
import useData from '../misc/useData'
import BreadCrumbs from '../components/BreadCrumbs'
import HomeLoad from '../misc/HomeLoad'
function Men() {
    const [{stockData, setStockData}, {modifiedArray, setModifiedArray}] = useData('heren')
    

    return modifiedArray ?  (
        <div className="men">
            <BreadCrumbs />
        <div className="men-intro">Voor mannen 👨 </div>
            <div className="stock-men">
            <DisplayStock stock={{modifiedArray}} /> 
            </div>
        </div>
  ) : <HomeLoad />
}

export default Men