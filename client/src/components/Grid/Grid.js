import React, { useContext, useState } from 'react'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { NavContext } from '../../_context/NavProvider'
import "./style.css"

// Grid parameters
const NUM_ROWS = 20
const NUM_COLS = 65

const CELL_SIZE = 32
const CELL_MARGIN = 1

const CELL_MAP = ['road', 'building', 'start', 'dest', 'charge']

const ISO_X = 20;
const ISO_Y = -25;
const ISO_Z = 8.8;

function Grid() {
    const {grid, onGridSelect, carPos} = useContext(NavContext)

    return (
        <div className='grid'>
            <div className='cells'
                style={{
                    width: (CELL_SIZE + 2 * CELL_MARGIN) * NUM_COLS,
                    height: (CELL_SIZE + 2 * CELL_MARGIN) * NUM_ROWS,
                    margin: CELL_MARGIN,
                    transform: `rotateX(${ISO_X}deg) rotateY(${ISO_Y}deg) rotateZ(${ISO_Z}deg)`
                }}
            >
                {
                    grid.map((row, i) => (
                        row.map((col, j) => {
                            let cls = "cell"
                            cls += " " + CELL_MAP[grid[i][j]]

                            return (
                                <div
                                    className={cls}
                                    key={`[${i},${j}]`}
                                    style={{ width: CELL_SIZE, height: CELL_SIZE }}
                                    onClick={() => onGridSelect(i, j)}
                                >
                                    {carPos && carPos[0] == i && carPos[1] == j ? <DirectionsCarIcon/> : null}
                                </div>
                            )
                        })
                    ))
                }
            </div>
        </div>
    )
}

export default Grid