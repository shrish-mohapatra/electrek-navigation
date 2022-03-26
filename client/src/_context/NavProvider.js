import React, { createContext } from 'react'

export const NavContext = createContext()

export const NavProvider = ({ children }) => {
    return (
        <NavContext.Provider
            value={{
                test: "context works properly :)",

                start_x: 0,
                start_y: 0
            }}
        >
            {children}
        </NavContext.Provider>
    )
}