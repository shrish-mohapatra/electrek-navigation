import React, { useState } from 'react'
import produce from "immer"
import "./style.css"

// Grid parameters
const NUM_ROWS = 20
const NUM_COLS = 65

const CELL_SIZE = 32
const CELL_MARGIN = 1

const CELL_MAP = ['road', 'building']

const ISO_X = 20;
const ISO_Y = -25;
const ISO_Z = 8.8;

const createEmptyBoard = (fill) => {
    let grid = []

    if (!fill) fill = () => 0

    for (let i = 0; i < NUM_ROWS; i++) {
        grid.push(Array.from(Array(NUM_COLS), fill))
    }

    return grid
}

function Grid() {
    const [grid, setGrid] = useState(() => {
        return createEmptyBoard()
    })

    const updateGrid = (row, col, fill) => {
        setGrid(g => produce(g, gridCopy => {
            gridCopy[row][col] = g[row][col] ? 0 : 1
            console.log(g)
        }))
    }

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
                                    onClick={() => updateGrid(i, j, 1)}
                                />
                            )
                        })
                    ))
                }
            </div>
        </div>
    )
}

export default Grid