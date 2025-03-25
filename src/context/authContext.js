import React, { createContext, useContext, useEffect, useState  } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export function AuthProvider({children}) {
   const [isLoggedIn, setIsLoggedIn] = useState(false)
   const [isAdmin, setIsAdmin] = useState(false)
   
   useEffect(() =>{
    getUser()
   },[])

   const getUser =async()=>{
    const token = localStorage.getItem('token')
    const response = await axios.get('https://nike-clone-backend-nahc.onrender.com/api/auth/getUser',
        {
            headers: {
                Authorization: `Bearer ${token}`, // Include the token in the Authorization header
            },
        }
    );
    if(response.data.role === 'user'){
        setIsLoggedIn(true)
        console.log('usd',isLoggedIn)
    }
    else if(response.data.role === 'admin'){
        setIsAdmin(true)
    }
   }

    return (
        <AuthContext.Provider value = {{isLoggedIn, isAdmin}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth =()=> useContext(AuthContext)
