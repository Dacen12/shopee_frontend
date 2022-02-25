import React, {useState, useEffect} from 'react'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import useFilter from '../misc/useFilter';
function Filter({stock}) {
  const [setFilter, filterOptions, deleteFilter, setHideFilter, hideFilter] = useFilter(stock)
 

  



  return (
    <div className="filter">

      <div className="filter__container">
        
        <Splide className="splide-container" options={{arrows: false, gap: '20px', perPage: 2}}>
        {filterOptions.map((obj) => (<>
          <SplideSlide key={obj.liId} className="asplide" data-tag={obj.filterId} onClick={e => deleteFilter(e)}>
            <span   className="attr-span">{obj.attrTrans}</span>
            <span   className="rm-b"></span>
          </SplideSlide>
         
          </>
        ))}
        </Splide>

        <div onClick={() => setHideFilter(prevValue => !prevValue)}  className="filter__icon"></div>
      </div>

      

        {/* hide filter ${hideFilter ? 'hider' : ''} */}
      <div className={`filter-container ${hideFilter == true ? 'hider' : ''} `}>
        <ul>
          <li  data-trans="Schoenen"       onClick={e => setFilter(e.target)} id="shoe">Schoenen</li>
          <li  data-trans="Jurken"         onClick={e => setFilter(e.target)} id="skirt">Jurken</li>
          <li  data-trans="Jassen"         onClick={e => setFilter(e.target)} id="jacket">Jassen</li>
          <li  data-trans="Broeken"        onClick={e => setFilter(e.target)} id="pants">Broeken</li>
          <li  data-trans="Oorbellen"      onClick={e => setFilter(e.target)} id="earring">Oorbellen</li>
        </ul>
      </div>
    </div>
  )
}

export default Filter