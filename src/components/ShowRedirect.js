import React from 'react'
import { Link } from 'react-router-dom'
function ShowRedirect() {
  return (
    <div className="redirect">
        <span>Hey 🙋</span>
        <span>Je winkeltas is leeg! 😱</span>
        <span>Je kan <Link className="link link-size" to="/">hier klikken</Link> om even rond te kijken en iets toevoegen wat je leuk vindt 😋</span>
    </div>
  )
}

export default ShowRedirect