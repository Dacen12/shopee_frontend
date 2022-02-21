import {useState, useEffect} from 'react'
import axios from 'axios'



function useData() {
    const [stockData, setStockData] = useState()
    const [modifiedArray, setModifiedArray] = useState([])
    function getData () {
        axios.get('http://192.168.1.210:4040/').then((res) => {
            setStockData(res.data)
            
        })
    }
    
    useEffect(() => {
        getData()
        setModifiedArray(stockData)
    }, [])
    
    return [{stockData, setStockData}, {modifiedArray, setModifiedArray}]
}

export default useData