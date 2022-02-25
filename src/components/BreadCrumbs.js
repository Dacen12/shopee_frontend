import React, { useEffect } from 'react'
import {useLocation, Link} from 'react-router-dom'

function BreadCrumbs({model}) {
    const location = useLocation()
    const locationFixed = location && location.pathname.replace(/[^\w\s]/gi, '')
    
    var modelName;
    if(model) {
        const {itemModel} = model
        modelName = itemModel
    }
      

    function checkPath(){
        if(locationFixed.includes('heren')){
            return <Link className="link" to={'/heren'}>/Heren</Link>
        } else if(locationFixed.includes('dames')){
            return <Link className="link" to={'/dames'}>/Dames</Link>
        } else if(locationFixed.includes('winkelwagen')){
            return 'Winkelwagen'
        }
    }

    useEffect(() => {
        checkPath()
    }, [])
    

    return (
    <div className="breadcrumbs">
    <div className="crumb-container">
        <span className="bread-id"><Link className="link" to="/">/Hoofdpagina</Link></span>
        <i></i>
    </div>
    <div className="crumb-container">
        <span className="bread-id">{checkPath()}</span>
        <i></i>
    </div>
        {modelName && (<div className="crumb-container fixtext">
        <span className="bread-id">{modelName}</span>
        <i></i>
    </div>)}

</div>
  )
}

export default BreadCrumbs