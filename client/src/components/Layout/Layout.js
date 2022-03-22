import React, { useContext } from 'react'
import { NavContext } from '../../_context/NavProvider'

import "./style.css"

function Layout() {
    const { test } = useContext(NavContext)

    return (
        <div className='layout'>
            <div className='title'>
                <h1>elektrek</h1>
                <h2>navigation</h2>
            </div>

            {test}
        </div>
    )
}

export default Layout