import React, {useState, useEffect} from 'react'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import useFilter from '../misc/useFilter';
function Filter({stock}) {
  const [setFilter, filterOptions, {hideFilter, setHideFilter}, deleteFilter] = useFilter(stock)
 

  



  return (
    <div className="filter">

      <div className="filter__container">
        
        <Splide className="splide-container" options={{arrows: false, gap: '20px', perPage: 2}}>
        {filterOptions.map((obj) => (<>
          <SplideSlide key={obj.filterId} onClick={e => deleteFilter(e)} className="asplide" data-tag={obj.clickId}>
            <span   className="attr-span">{obj.attrTrans}</span>
            <span   className="rm-b"></span>
          </SplideSlide>
         
          </>
        ))}
        </Splide>

        <div onClick={() => {setHideFilter(prevValue => !prevValue)}} className="filter__icon"></div>
      </div>

      


      <div className={`filter-container ${hideFilter ? 'hider' : ''}`}>
        <ul>
          <li  data-trans="Prijs oplopend" id="price_ascending" onClick={e => setFilter(e.target)}>Prijs oplopend</li>
          <li  data-trans="Prijs aflopend" id="price_descending"onClick={e => setFilter(e.target)}>Prijs aflopend</li>
          <li  data-trans="Schoenen"       id="shoe"            onClick={e => setFilter(e.target)}>Schoenen      </li>
          <li  data-trans="Jurken"         id="skirt"           onClick={e => setFilter(e.target)}>Jurken        </li>
          <li  data-trans="Jassen"         id="jacket"          onClick={e => setFilter(e.target)}>Jassen        </li>
          <li  data-trans="Broeken"        id="pants"           onClick={e => setFilter(e.target)}>Broeken       </li>
          <li  data-trans="Oorbellen"      id="earring"         onClick={e => setFilter(e.target)}>Oorbellen     </li>
        </ul>
      </div>
    </div>
  )
}

export default Filter