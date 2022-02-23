import React, {useEffect, useState, useReducer} from 'react'
import {makeId} from './makeid'
import backup from '../backup.json'


function useFilter(stock) {
    const {stockData, modifiedArray, setModifiedArray} = stock
    const [filterOptions, setFilterOptions] = useState([])
    const [hideFilter, setHideFilter] = useState(true)
    // returns selected filter array
    function setFilter(target){
        const {id} = target
        const dataValue = target.attributes.getNamedItem('data-trans').value
        if(filterOptions.length != 0){
            const filterExists = filterOptions.some(el => el.filterId == id)
            if(!filterExists) {
                setFilterOptions(prevValue => ([...prevValue, {liId: makeId(5), attrTrans: dataValue, filterId: id}]))
            }
        } else {
            setFilterOptions(prevValue => ([...prevValue, {liId: makeId(5), attrTrans: dataValue, filterId: id}]))
        }
    }


    function deleteFilter(event){
      const dataValue = event.currentTarget.getAttribute('data-tag')
      const deleteFilterValues = filterOptions.filter(obj => obj.filterId !== dataValue)
      setFilterOptions([...deleteFilterValues])
    }

    function addFilter() {
        let tempArray = []
        filterOptions.forEach((req) => {
            var data = stockData.filter(obj => obj.type == req.filterId)
            tempArray.push(...data)
        })
    setModifiedArray(tempArray)
    }



    useEffect(() => {
            addFilter()
    }, [filterOptions])

    useEffect(() => {
        if(modifiedArray && modifiedArray.length < 1){
            setModifiedArray(stockData)
        }
    }, [modifiedArray])
   
    
    return [setFilter, filterOptions, deleteFilter ,setHideFilter, hideFilter]
}

export default useFilter