"use client"; // Tambahkan ini di bagian atas file jika Anda menggunakan App Router di Next.js 13+

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import dari next/navigation
import Image from 'next/image';
import OvalAtas from '../assets/svgs/OvalAtas.svg';
import OvalBawah from '../assets/svgs/OvalBawah.svg';
import BgForm from '../assets/svgs/BgFormStaf.svg';
import TelkomSchool from '../assets/svgs/TeksTelkomSchool.svg';
import BgTransparan from '../assets/images/SmkTelkomTransparan.png';
import CheckText from '../assets/svgs/CheckText.svg';

function Page() {
  const router = useRouter(); 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin123@admin.com' && password === 'admin123') {
      router.push('/lobbystaf'); 
    } else {
      setError('Username atau password salah');
    }
  };

  return (
    <>
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
          <div className="mb-4">
            <input
              type="text"
              placeholder="Username :"
              className="w-full px-4 py-2 border border-gray-400 rounded-full text-gray-700 bg-gray-100 focus:outline-none focus:ring-4 focus:ring-red-400"
              style={{ boxShadow: '2px 2px 14px #ADADAD', marginBottom: '20px' }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Password :"
              className="w-full px-4 py-2 border border-gray-400 rounded-full text-gray-700 bg-gray-100 focus:outline-none focus:ring-4 focus:ring-red-400"
              style={{ boxShadow: '2px 2px 14px #ADADAD', marginBottom: '30px' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            onClick={handleLogin}
            className="poppins-medium w-full py-2 text-white bg-red-600 rounded-full hover:bg-red-700 focus:outline-none"
          >
            LOGIN
          </button>

          <Image
            src={CheckText}
            alt="CheckBox"
            style={{ marginTop: '20px', marginLeft: '302px' }}
          />
        </div>
      </div>
      
      <Image
        src={BgTransparan}
        alt="Background Transparan"
        className="z-40"
        style={{ width: '900px', marginTop: '-824px' }}
      />
    </>
  );
}

export default Page;
