import React, { createContext, useEffect, useState } from 'react'
import produce from "immer"
import { createEmptyBoard, NUM_ROWS, NUM_COLS } from './NavHelper'

export const NavContext = createContext()

export const NavProvider = ({ children }) => {
    
    const [grid, setGrid] = useState(() => {
        return createEmptyBoard()
    })

    const [startX, setStartX] = useState("");
    const [startY, setStartY] = useState("");

    const [endX, setEndX] = useState("");
    const [endY, setEndY] = useState("");

    const [startBattery, setStartBattery] = useState("");

    useEffect(() => {
        if(startX && startY) {
            updateGrid(startY, startX, 2)
        }
        
        if(endX && endY) {
            updateGrid(endY, endX, 3)
        }
    }, [startX, startY, endX, endY])

    const updateGrid = (row, col, fill) => {
        if (!boundsCheck(row, col)) return

        setGrid(g => produce(g, gridCopy => {
                for(let r in g) {
                    for(let c in g[r]) {
                        gridCopy[r][c] = gridCopy[r][c] == fill ? 0 : gridCopy[r][c]
                    }
                }

                gridCopy[row][col] = fill
            }
        ))
    }

    const boundsCheck = (row, col) => {
        if (row < 0 || row >= NUM_ROWS) return false
        if (col < 0 || col >= NUM_COLS) return false
        return true
    }

    return (
        <NavContext.Provider
            value={{
                grid, setGrid,
                startX, setStartX,
                startY, setStartY,
                endX, setEndX,
                endY, setEndY,
                startBattery, setStartBattery,

                onGridSelect: (row, col) => {
                    if (!boundsCheck(row, col)) return

                    if(!startX || !startY) {
                        setStartX(col)
                        setStartY(row)
                    } else if(!endX || !endY) {
                        setEndX(col)
                        setEndY(row)
                    }
                }
            }}
        >
            {children}
        </NavContext.Provider>
    )
}