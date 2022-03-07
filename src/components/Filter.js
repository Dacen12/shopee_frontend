import React, {useState, useEffect, useRef} from 'react'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import useFilter from '../misc/useFilter';
function Filter({stock}) {
  const [setFilter, filterOptions, deleteFilter, setHideFilter, hideFilter, filterSelect] = useFilter(stock)
  



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
          {filterSelect.map((obj) => (
            <>
          <li  data-trans={obj.dataValue}  className={obj.highlight == true ? 'highlight': ''}      onClick={e => setFilter(e.target)} id={obj.id}>{obj.dataValue}</li>
          
            </>
          ))}
         

         
        </ul>
      </div>
    </div>
  )
}

export default Filter