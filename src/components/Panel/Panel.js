import React, { useContext, useState } from 'react'
import { NavContext } from '../../_context/NavProvider'
import PanelForm from './PanelForm'
import "./style.css"

function Panel() {

  return (
    <div className='panel'>
        <h2 className='panel-title'>Plan your trip</h2>
          <PanelForm/>
    </div>
  )
}

export default Panel