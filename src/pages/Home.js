import React, {useState, useEffect} from 'react'
import Filter from '../components/Filter'
import DisplayStock from '../components/DisplayStock'
import Bag from './Bag'
import useBag from '../components/useBag'
import HomeLoad from '../misc/HomeLoad'

function Home({data}) {
    const {stockData, setStockData, modifiedArray, setModifiedArray} = data


    return modifiedArray ? ( <div className="home">
    <Filter stock={{stockData, setStockData , modifiedArray, setModifiedArray}} />

<DisplayStock stock={{modifiedArray, setModifiedArray, stockData}} />
</div>) : <HomeLoad />
  
}

export default Home

