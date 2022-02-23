import React from 'react'
import DisplayStock from '../components/DisplayStock'
import useData from '../misc/useData'
import BreadCrumbs from '../components/BreadCrumbs'
function Men() {
    const [{stockData, setStockData}, {modifiedArray, setModifiedArray}] = useData('heren')
    

    return (
        <div className="men">
            <BreadCrumbs />
        <div className="men-intro">Voor mannen 👨 </div>
            <div className="stock-men">
            <DisplayStock stock={{modifiedArray}} /> 
            </div>
        </div>
  )
}

export default Men