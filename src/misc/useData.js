import {useState, useEffect} from 'react'
import axios from 'axios'



function useData(path = '') {
    const [stockData, setStockData] = useState()
    const [modifiedArray, setModifiedArray] = useState([])
    function getData () {
        axios.get(`http://192.168.1.210:4040/${path}`).then((res) => {
            setStockData(res.data)
            setModifiedArray(res.data)
            console.log('added to setModifiedArray!!')
        })
    }
  
    useEffect(() => {
        getData()
    }, [])
    
    return [{stockData, setStockData}, {modifiedArray, setModifiedArray}]
}

export default useData