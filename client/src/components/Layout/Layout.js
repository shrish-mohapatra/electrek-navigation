import React, { useContext } from 'react'
import { NavContext } from '../../_context/NavProvider'
import Grid from '../Grid/Grid'
import Panel from '../Panel/Panel'

import "./style.css"

function Layout() {
    const { test } = useContext(NavContext)

    return (
        <div className='layout'>
            <div className='title'>
                <h1>Elektrek</h1>
                <h2>Navigation</h2>
            </div>

            <Grid/>
            <Panel/>
        </div>
    )
}

export default Layout