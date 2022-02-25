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

           const filterFound = filterOptions.some(obj => obj.filterId == id)
           if(!filterFound){
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
        var data = stockData && [ ...stockData]
       for(var filter of filterOptions){
          const reqFilter = data.filter(obj => obj.type == filter.filterId)
            tempArray.push(...reqFilter)
       }

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