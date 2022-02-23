import React from 'react'
import {Link} from 'react-router-dom'

function ErrorDialog() {
  return (
    <div className="error-container">
        <div className="error-text">
        
          <span className="oops">Oops...</span> <br />
          <span className="whereareyou">Ben je verdwaald? 😖 </span>
          <span className="goback">Ga terug naar de <Link to="/" className="link">hoofdpagina</Link></span>
        </div>
    </div>
  )
}

export default ErrorDialog