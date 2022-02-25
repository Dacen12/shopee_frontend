import React, {useState, useEffect} from 'react'
import Filter from '../components/Filter'
import DisplayStock from '../components/DisplayStock'
import Bag from './Bag'
import useBag from '../components/useBag'
function Home({data}) {
    const {stockData, setStockData, modifiedArray, setModifiedArray} = data


    return <div className="home">
    <Filter stock={{stockData, setStockData , modifiedArray, setModifiedArray}} />
    <DisplayStock stock={{modifiedArray, setModifiedArray, stockData}} />
    </div>
  
}

export default Home