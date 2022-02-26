import React, {useState} from 'react'
import useBag from './components/useBag'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'


function Nav({useBag}) {
  const [hideElement, setHideElement] = useState(true)
  const {bag, addToBag, showBag, setShowBag} = useBag
  const navigator = useNavigate()

  return (
    <div className="nav">
    
        <div className="nav__logo">
            <Link onClick={() => setHideElement(true)} to={'/'} className="nav__logo__icon" />
        </div>
        <div className="container">
        <div className="container__bag">
        
        <span onClick={() => navigator('/winkelwagen')} className="container__bag__icon"></span>
           
        </div>
        <div  className="container__menu">
            <span onClick={ () => setHideElement(prevValue => !prevValue)} className="container__menu__icon"></span>
            <div   className={` ${hideElement == true ? 'hider' : 'navigator'}`}>
        <div className="menu-info">
          <span>Menu</span>
        </div>
        <div className="menu-men">
          <span><Link onClick={() => setHideElement(prevValue => !prevValue)} className="link" to="/heren">Heren</Link></span>
        </div>
        <div className="menu-women">
      <span><Link onClick={() => setHideElement(prevValue => !prevValue)} className="link" to="/dames">Dames</Link></span>
        </div>
          </div>

        </div>
        </div>

    </div>
  )
}

export default Nav