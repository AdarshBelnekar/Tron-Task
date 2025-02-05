import React, { createContext, useEffect } from 'react'
import { getLocalStorage } from '../utils/localStorage'

export const AuthContext =createContext();

const AuthProvider = ({children}) => {




  return (
    <div>
      <AuthContext.Provider value ={"Hello"}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
