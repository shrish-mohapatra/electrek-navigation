import React, { useContext, useState } from 'react'
import { NavContext } from '../../_context/NavProvider'
import PanelForm from './PanelForm'
import "./style.css"

function Panel() {
  const {start_x, start_y} = useContext(NavContext)
  
  const QUEUE = ["start", "goal", "battery"]

  const [qState, setQState] = useState(["start"]);


  return (
    <div className='panel'>
        <h2 className='panel-title'>Plan your trip</h2>
          <PanelForm qState={qState} setQState={setQState}/>
    </div>
  )
}

export default Panel