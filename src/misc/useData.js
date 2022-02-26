import {useState, useEffect} from 'react'
import axios from 'axios'



function useData(path = '') {
    const [stockData, setStockData] = useState()
    const [modifiedArray, setModifiedArray] = useState([])
    function getData () {
        axios.get(`https://shopee-backend.herokuapp.com/${path}`).then((res) => {
            setStockData(res.data)
            setModifiedArray(res.data)
    
        })
    }
  
    useEffect(() => {
        getData()
    }, [])
    
    return [{stockData, setStockData}, {modifiedArray, setModifiedArray}]
}

export default useData