import React, {useEffect} from 'react'
import Card from './Card'
function DisplayStock({stock}) {
  const {stockData} = stock

  useEffect(() => {
    console.log(stockData)
  }, [])
  return (

    <div className="display-stock">
   
      {stockData && stockData.map((obj) => (
        <div key={obj.id} className="card-holder">
        <Card arrayObj={obj}  />
      </div>
      ))}
      
  
    </div>
  )
}

export default DisplayStock