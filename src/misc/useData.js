import {useState, useEffect} from 'react'
import axios from 'axios'
const local_route = 'http://192.168.1.210:4040/'
const public_route = 'https://shopee-backend.herokuapp.com/'
function useData(path = '') {
    const [stockData, setStockData] = useState()
    const [modifiedArray, setModifiedArray] = useState([])
    function getData () {
        axios.get(`${local_route}${path}`).then((res) => {
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