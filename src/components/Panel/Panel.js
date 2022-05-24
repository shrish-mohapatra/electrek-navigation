import React from 'react'
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