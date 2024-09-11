import React, { useState } from 'react'
import { UserContext } from './USerContext'

// const user = {

//   id:123
//   , name: 'Juan Molina'
//   , email: 'juan@gmail.com'
// }

export const UserProvider = ( { children } ) => {

  let [user, setUser] = useState();

  return (
    <UserContext.Provider value={
        {
            user, setUser
        }
      }>
        { children }
    </UserContext.Provider>
  )
}
