import React, { useContext } from 'react'
import { NavContext } from '../../_context/NavProvider'
import Grid from '../Grid/Grid'
import Panel from '../Panel/Panel'
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';

import "./style.css"

function Layout() {
    const { test, open} = useContext(NavContext)


    return (
        <div className='layout'>
            <div className='title'>
                <h1>Elektrek</h1>
                <h2>Navigation</h2>
            </div>

            <Grid/>
            <Panel/>

            <Collapse className='alert' in={open}>
                <Alert sx={{zIndex: 2000}}> Your trip is completed!</Alert>
            </Collapse>
        </div>
    )
}

export default Layout