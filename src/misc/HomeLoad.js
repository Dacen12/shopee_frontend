import React from 'react'
import buffer from '../assets/buff.gif'
function HomeLoad() {
  return (

    <div className="home-loader">
   <span>Momentje geduld aub. </span>
    <span>Onze assortimenten worden opgehangen...</span>  
    <img src={buffer} alt="Loading..." draggable="false" />
    </div>
  )
}

export default HomeLoad