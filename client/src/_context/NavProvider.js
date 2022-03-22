import React, { createContext } from 'react'

export const NavContext = createContext()

export const NavProvider = ({ children }) => {
    return (
        <NavContext.Provider
            value={{
                test: "context works properly :)"
            }}
        >
            {children}
        </NavContext.Provider>
    )
}