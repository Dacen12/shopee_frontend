import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
function Nav() {
  const focusElement = useRef('')
 function setFocus() {
  focusElement.current.focus()
  console.log('focused!')
 }
  return (
    <div className="nav">
        <div className="nav__logo">
            <Link to={'/'} className="nav__logo__icon" />
        </div>
        <div className="container">
        <div className="container__bag">
            <span className="container__bag__icon"></span>
        </div>
        <div className="container__menu">
            <span  onClick={setFocus} className="container__menu__icon"></span>
            <div ref={focusElement} className="navigator">

        </div>

        </div>
        </div>

    </div>
  )
}

export default Nav