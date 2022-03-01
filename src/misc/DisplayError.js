import React from 'react'

function DisplayError({children, ...props}) {
  return (
    <div {...props}>
        {children}
    </div>
  )
}

export default DisplayError