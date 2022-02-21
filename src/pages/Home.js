import React, {useState, useEffect} from 'react'
import Filter from '../components/Filter'
import DisplayStock from '../components/DisplayStock'
function Home({data}) {
    const {stockData, setStockData, modifiedArray, setModifiedArray} = data

  useEffect(() => {
    console.log(modifiedArray)
  }, [modifiedArray])  

    return <div className="home">
    <Filter stock={{stockData, setStockData , modifiedArray, setModifiedArray}} />
    <DisplayStock stock={{stockData}} />
    
    </div>
  
}

export default Home