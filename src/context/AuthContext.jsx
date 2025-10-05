import React, { createContext, useState, useContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('currentUser'))
  )

  const login = (userData) => {
    let userToSave;

    if (typeof userData === 'string') {
      userToSave = {
        name: userData.split('@')[0], 
        email: userData
      };
    } 
    else {
      userToSave = userData;
    }
    
    localStorage.setItem('currentUser', JSON.stringify(userToSave));
    setCurrentUser(userToSave);
  }

  const logout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  }

  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}