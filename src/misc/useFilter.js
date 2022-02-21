import React, {useEffect, useState} from 'react'
import {makeId} from './makeid'

function useFilter(stock) {
    const {stockData, setStockData, modifiedArray, setModifiedArray} = stock
    const [filterOptions, setFilterOptions] = useState([])
    const [hideFilter, setHideFilter] = useState(true)
    // set selected filters in array
    function setFilter (target){
        const dataValue = target.attributes.getNamedItem('data-trans').value
        const {id} = target
      
        let checkExistingValue = filterOptions.some(el => el.clickId == id)
            if(!checkExistingValue) {
                if(id == 'price_ascending' && filterOptions.some(el => el.clickId == 'price_descending')){
                    // if selected id from li is price ascending and price descending is inside filterOptions array, do nothing
                } else if(id == 'price_ascending' && filterOptions.some(el => el.clickId == 'price_descending')){
                    // if selected id from li is price_ascending and price_descending inside filterOptions does not exist, add price_ascending
                    setFilterOptions(prevValue => ([...prevValue, {filterId: makeId(5), attrTrans: dataValue, clickId: id}]))
                } else if(id == 'price_descending' && filterOptions.some(el => el.clickId == 'price_ascending')){
                    // if selected if is price_descending and price ascending is inside filterOptions array, do nothing 
                } else if(id == 'price_descending' && !filterOptions.some(el => el.clickId == 'price_ascending')){
                    // if selected id is  price_descending and price_ascending is not inside filterOptions array, add price_descending
                    setFilterOptions(prevValue => ([...prevValue, {filterId: makeId(5), attrTrans: dataValue, clickId: id}]))
                } else {
                    // if id is not price_ascending nor price_descending, just add the id
                    setFilterOptions(prevValue => ([ ...prevValue, {filterId: makeId(5), attrTrans: dataValue, clickId: id}]))
                }
            }

            
    }

    // sets object order in array based on price request
    function setPriceSelection(){
       filterOptions.map((req) => {
            if(req.clickId == 'price_ascending'){
                const getPriceData = modifiedArray.sort((a,b) => a.price - b.price)
                setModifiedArray(getPriceData)
            } else if(req.clickId == 'price_descending'){
                const getPriceData = modifiedArray.sort((a,b) => a.price - b.price)
                setModifiedArray(getPriceData.reverse())
            }
        })
        
    }

    // delete selected filters in array 
    function deleteFilter (event) {
       const dataValue = event.currentTarget.getAttribute('data-tag')
       setFilterOptions(filterOptions.filter((obj) => obj.clickId !== dataValue))
       
       filterOptions.map((filterObj) => {
           const filterExists = modifiedArray.some(el => el.type == filterObj.clickId)
           if(filterExists){
               setModifiedArray(modifiedArray.filter(obj => filterObj.clickId !== obj.type))
           }
       })
    }

    // updates array when new filter is passed
    function updateArray(filterObj) {
        const filteredObj = stockData.filter(obj => obj.type == filterObj.clickId)
        const filterExists = modifiedArray.some(el => el.type == filterObj.clickId)
        if(!filterExists){
            setModifiedArray(prevValue => [...prevValue, ...filteredObj])   
        }
        
             
    }

    // updates modifiedArray when filterOptions is triggered.
  useEffect(() => {
    filterOptions.map((filterObj) => {
        setPriceSelection()
        updateArray(filterObj)
    })
   
  }, [filterOptions])
    
    


    return [setFilter, filterOptions, {hideFilter, setHideFilter,}, deleteFilter]
}

export default useFilter