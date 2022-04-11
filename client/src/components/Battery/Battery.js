import React, { useContext } from 'react'
import { NavContext } from '../../_context/NavProvider'
import "./style.css"

const BATTERY_WIDTH = 200

function Battery() {
    const { battery, carPos } = useContext(NavContext)

    return (
        <div className='status'>
            <p>Battery:</p>
            <div className='battery' style={{ width: BATTERY_WIDTH }}>
                <div className='battery-bar' style={{ width: `${battery}%` }} />
            </div>

            {carPos && <p className='position'>Position: ({carPos[1]},{carPos[0]})</p>}
        </div>
    )
}

export default Battery