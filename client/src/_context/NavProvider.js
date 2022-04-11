import React, { createContext, useEffect, useState } from 'react'
import produce from "immer"
import { generateBoard, createEmptyBoard, NUM_ROWS, NUM_COLS, generatePositions } from './NavHelper'

import { planTrip } from './NavAPI/NavAI'

export const NavContext = createContext()

export const NavProvider = ({ children }) => {

    const [grid, setGrid] = useState(() => {
        return generateBoard()
        // return createEmptyBoard()
    })
    
    const [startX, setStartX] = useState("");
    const [startY, setStartY] = useState("");

    const [endX, setEndX] = useState("");
    const [endY, setEndY] = useState("");

    const [startBattery, setStartBattery] = useState("");

    const [carPos, setCarPos] = useState()

    const [open, setOpen] = useState(false);
    const [alertType, setAlertType] = useState("success")
    const [battery, setBattery] = useState(0)

    const handleOpen = (newType='success') => {
        setAlertType(newType)
        setOpen(true)
        setTimeout(() => {
            setOpen(false)
        }, 3000);
    }

    useEffect(() => {
        if (startX != "" && startY != "") {
            updateGrid(startY, startX, 2)
        }

        if (endX != "" && endY != "") {
            updateGrid(endY, endX, 3)
        }
    }, [startX, startY, endX, endY])

    const updateGrid = (row, col, fill) => {
        if (!boundsCheck(row, col)) return

        setGrid(g => produce(g, gridCopy => {
            if (fill != 5) {
                for (let r in g) {
                    for (let c in g[r]) {
                        gridCopy[r][c] = gridCopy[r][c] == fill ? 0 : gridCopy[r][c]
                    }
                }
            } else {
                if (gridCopy[row][col] == 4 || gridCopy[row][col] == 3) return
            }

            gridCopy[row][col] = fill
        }
        ))
    }

    const clearPath = () => {
        setGrid(g => produce(g, gridCopy => {
            for (let r in g) {
                for (let c in g[r]) {
                    gridCopy[r][c] = gridCopy[r][c] == 5 ? 0 : gridCopy[r][c]
                }
            }
        }))
    }

    const boundsCheck = (row, col) => {
        if (row < 0 || row >= NUM_ROWS) return false
        if (col < 0 || col >= NUM_COLS) return false
        // console.log(row, col)
        return true
    }

    const timeout = (delay) => {
        return new Promise(res => setTimeout(res, delay))
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
                battery,

                carPos, setCarPos,
                open, handleOpen,

                NUM_ROWS, NUM_COLS,
                alertType,

                onGridSelect: (row, col) => {
                    if (!boundsCheck(row, col)) return

                    if (!startX || !startY) {
                        setStartX(col)
                        setStartY(row)
                    } else if (!endX || !endY) {
                        setEndX(col)
                        setEndY(row)
                    }
                },

                simulateTrip: async () => {
                    clearPath()
                    setBattery(startBattery)

                    let trip = planTrip(grid, startX, startY, endX, endY, startBattery)

                    if(trip == '') {
                        handleOpen('error')
                        return
                    }

                    const positions = generatePositions(trip, [parseInt(startY), parseInt(startX)])

                    for (let p = 0; p < positions.length; p++) {
                        setCarPos(positions[p])

                        

                        updateGrid(positions[p][0], positions[p][1], 5)
                        await timeout(600)
                        if(trip[p] == 'c') {
                            setBattery(b => b + 10)
                        } else {
                            setBattery(b => b - 10)
                        }
                    }

                    handleOpen()

                }
            }}
        >
            {children}
        </NavContext.Provider>
    )
}