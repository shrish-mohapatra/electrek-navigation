import React, { useContext } from 'react'
import { NavContext } from '../../_context/NavProvider'
import Grid from '../Grid/Grid'
import Panel from '../Panel/Panel'
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

import "./style.css"
import Battery from '../Battery/Battery';

function Layout() {
    const { open, alertType } = useContext(NavContext)

    return (
        <div className='layout'>
            <div className='title'>
                <h1>elektrek</h1>
                <h2>NAVIGATION</h2>
            </div>

            <div className='content'>
                <div className='map'>
                    <Grid/>
                    <Battery/>
                </div>

                <Panel/>
            </div>

            <Collapse className='alert' in={open}>
                <Alert sx={{zIndex: 2000}} severity={alertType}> {alertType == 'success' ? "Your trip is completed." : "Not enough charge."} </Alert>
            </Collapse>

            <div className='authors'>
                <p>COMP 3106 Final | Developed by Josh Kim, Rajessen Sanassy, Shrish Mohapatra</p>
            </div>
        </div>
    )
}

export default Layout