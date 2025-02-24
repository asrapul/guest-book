'use client'
import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Button, TextField } from '@mui/material'

function page() {
    const {login}=useAuth()
    const[form,setForm]=React.useState({
        email:'',
        password:''
    })
    const[error,setError]=React.useState('')
    const handleChenge=(e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            await login(form)
        }catch(error){
            setError(error.response.data.message)
        }
    }
  return (
    <>
    <div className='h-screen flex justify-center items-center'>
        <div className='w-[500px] border shadow-md'>
            <div className='text-center '>
                <span className='text-2xl font-bold'>login</span>
                <form className='p-2' onSubmit={handleSubmit}>
                    <TextField label='username' name='username' variant='outlined' onChange={handleChenge} fullWidth/>
                    <TextField label='password' sx={{marginTop:2, marginBottom:2}} name='password' type='password' variant='outlined' onChange={handleChenge} fullWidth/>
                    <Button type='submit' fullWidth variant='contained'>login</Button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default page