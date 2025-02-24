'use client'
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useAuthMiddleware(redirectTo='/login'){
    const router=useRouter()
    useEffect(()=>{
        const token=localStorage.getItem('auth_token')
        if(!token){
            router.push(redirectTo)
        }
    },[router])
}