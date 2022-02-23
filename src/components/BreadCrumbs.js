import React from 'react'
import {useLocation, Link} from 'react-router-dom'

function BreadCrumbs() {
    const location = useLocation()
    const locationFixed = location && location.pathname.replace(/[^\w\s]/gi, '')
    console.log(location)
    return (
    <div className="breadcrumbs">
    <div className="crumb-container">
        <span className="bread-id"><Link className="link" to="/">Hoofdpagina</Link></span>
        <i></i>
    </div>
    <div className="crumb-container">
        <span className="bread-id">{locationFixed}</span>
        <i></i>
    </div>
</div>
  )
}

export default BreadCrumbs