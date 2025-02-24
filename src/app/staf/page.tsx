"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '../context/AuthContext'
import OvalAtas from '../assets/svgs/OvalAtas.svg';
import OvalBawah from '../assets/svgs/OvalBawah.svg';
import BgForm from '../assets/svgs/BgFormStaf.svg';
import TelkomSchool from '../assets/svgs/TeksTelkomSchool.svg';
import BgTransparan from '../assets/images/SmkTelkomTransparan.png';
import './style.css'

function Page() {
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
    <body>
      <Image
        src={OvalAtas}
        alt="login staf"
        style={{ marginLeft: '500px' }}
      />

      <Image
        src={OvalBawah}
        alt="login staf"
        style={{ marginTop: '-40px' }}
      />

      <div style={{ position: 'absolute' }}>
        <Image
          src={BgForm}
          alt="BgForm"
          style={{ marginTop: '-730px', width: '707px', marginLeft: '829px' }}
        />

        <Image
          src={TelkomSchool}
          alt="TelkomSchool"
          style={{ marginLeft: '1060px', marginTop: '-600px' }}
        />
        
        <div className="w-[480px] p-6" style={{ marginLeft: '1000px' }}>
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name='username'
              onChange={handleChenge}
              placeholder="Nama Pengguna :"
              className="w-full px-4 py-2 border border-gray-400 rounded-full text-gray-700 bg-gray-100 focus:outline-none focus:ring-4 focus:ring-red-400"
              style={{ boxShadow: '2px 2px 14px #ADADAD', marginBottom: '20px' }}
   
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              name='password'
              onChange={handleChenge}
              placeholder="Kata Sandi :"
              className="w-full px-4 py-2 border border-gray-400 rounded-full text-gray-700 bg-gray-100 focus:outline-none focus:ring-4 focus:ring-red-400"
              style={{ boxShadow: '2px 2px 14px #ADADAD', marginBottom: '30px' }}

            />
          </div>



          <button

            className="poppins-medium w-full py-2 text-white bg-red-600 rounded-full hover:bg-red-700 focus:outline-none"
          >
            LOGIN
          </button>
          </form>

          <div className='flex gap-2 ml-52 mt-5'>
            <input 
              type="checkbox" 

            />
            <div className='text-[#777777]'>Ingat Nama Pengguna</div>
          </div>
        </div>
      </div>
      
      <Image
        src={BgTransparan}
        alt="Background Transparan"
        className="z-40"
        style={{ width: '900px', marginTop: '-824px' }}
      />
      </body>
    </>
  );
}

export default Page;
