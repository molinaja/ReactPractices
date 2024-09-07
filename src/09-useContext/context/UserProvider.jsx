import React from 'react'
import { UserContext } from './USerContext'

export const UserProvider = ( { children } ) => {
  return (
    <UserContext.Provider value={{ hola: 'Mundo'}}>
        { children }
    </UserContext.Provider>
  )
}
