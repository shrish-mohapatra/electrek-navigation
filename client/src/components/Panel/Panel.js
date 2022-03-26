import React, { useContext } from 'react'
import { NavContext } from '../../_context/NavProvider'
import "./style.css"

function Panel() {
  const {start_x, start_y} = useContext(NavContext)

  return (
    <div className='panel'>
        <h2 className='panel-title'>Plan your trip</h2>
    </div>
  )
}

export default Panel