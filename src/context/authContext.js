import React, { createContext, useContext, useEffect, useState  } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export function AuthProvider({children}) {
   const [isLoggedIn, setIsLoggedIn] = useState(false)
   
   useEffect(() =>{
    getUser()
   },[])

   const getUser =async()=>{
    const token = localStorage.getItem('token')
    const response = await axios.get('http://localhost:5000/api/auth/getUser',
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
   }

    return (
        <AuthContext.Provider value = {{isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth =()=> useContext(AuthContext)
