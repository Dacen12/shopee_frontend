import React, {useMemo} from 'react'
import DisplayStock from '../components/DisplayStock'
import useData from '../misc/useData'
import BreadCrumbs from '../components/BreadCrumbs'
import HomeLoad from '../misc/HomeLoad'

function Women() {
    const [{stockData, setStockData}, {modifiedArray, setModifiedArray}] = useData('dames')

    return modifiedArray ?  (
    <div className="women">
       <BreadCrumbs />
    <div className="women-intro">Voor vrouwen 👩</div>
        <div className="stock-women">
        <DisplayStock stock={{modifiedArray}} /> 
        </div>
    </div>
  ) : <HomeLoad />
}

export default Women