"use client";
import React from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="bg-teal-400 flex justify-between items-center h-16 px-4">
      <div className="text-3xl font-bold text-white">Aplikasi Web</div>
      <div>
        {user ? (
          <span onClick={()=>logout()} className='cursor-pointer text-2xl text-white'>Logout</span>
        ) : (
          <Link href="/login">
            <button className="text-2xl ml-2 font-bold text-white">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
