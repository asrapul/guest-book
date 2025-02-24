'use client'
import { createContext, useContext, useEffect, useState } from "react"
import axios from "../utils/axios"
import { useRouter } from "next/navigation"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const getUser = async () => {
            try {
                const token = localStorage.getItem('auth_token')
                if (!token) {
                    setLoading(false)
                    return
                }

                const response = await axios.get('/user', {
                    headers: { Authorization: `Bearer ${token}` }
                })
                setUser(response.data)
            } catch (error) {
                setUser(null)
            } finally {
                setLoading(false)
            }
        }

        getUser()
    }, [])

    const login = async (form) => {
        try {
            const response = await axios.post('/login', form)
            const { token, user } = response.data
    
            localStorage.setItem('auth_token', token)
            setUser(user)

            if (user.role === "staf") {
                router.push('/lobbystaf')
            } else if (user.role === "superadmin") {
                router.push('/dashboard')
            } else {
                router.push('/') 
            }
        } catch (error) {
            console.error("Login failed:", error)
        }
    }
    

    const logout = async () => {
        try {
            await axios.post('/logout', {
                headers: { Authorization: `Bearer ${localStorage.getItem('auth_token')}` }
            })
            localStorage.removeItem('auth_token')
            setUser(null)
            router.push('/login')
        } catch (error) {
            console.error("Logout failed:", error)
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
