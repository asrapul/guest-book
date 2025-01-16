import React from 'react';
import Image from 'next/image';
import HariTanggal from '../assets/svgs/haritable.svg';
import Navbar from '../assets/svgs/Navbarstaf.svg';
import Icon from '../assets/images/IconSchool.png';
import Home from '../assets/svgs/HomeStaff.svg';
import Notif from '../assets/svgs/Lonceng.svg';
import Profile from '../assets/svgs/Profile.svg';
import DaftarTamu from '../assets/svgs/DaftarTamu.svg';
import { IoMdSearch } from "react-icons/io";
import status from '../assets/svgs/status.svg'
import teksbukutamu from '../assets/svgs/bukutamutext.svg'
import runcing1 from '../assets/svgs/Runcing1.svg'
import runcing2 from '../assets/svgs/Runcing2.svg'
import welcome from '../assets/svgs/Selamatsuperstaf.svg'
import KartuKiri from '../assets/svgs/Kartudaftartamu.svg'
import KartuKanan from '../assets/svgs/KartuLaporan.svg'
import Link from 'next/link';
import LihatTamu from '../assets/svgs/LihatTamu.svg'


function page() {
  return (
    <>
      <body style={{ background: "white" }}>
      <div className=''>
        
        <Image
         src={Navbar}
         alt='Navbar'
         width={1536}
        />
        

        <Image
         src={Icon}
         alt='Navbar'
         width={230}
         style={{marginTop:"-100px",}}
        />

        <Image
         src={Home}
         alt='Navbar'
         width={40}
         style={{marginTop:"-38px",marginLeft:"240px"}}
        />

        <Image
         src={Profile}
         alt='Navbar'
         width={35}
         style={{marginTop:"-38px",marginLeft:"1270px",}}
        />

<div style={{ display: 'flex', alignItems: 'center', marginTop: "-31px", marginLeft: "870px" }}>
            <Image src={Notif} alt='Navbar' width={30} />
            <input
              type='text'
              placeholder='Cari'
              style={{
                marginLeft: '20px',
                padding: '5px 10px',
                borderRadius: '100px',
                border: '1px solid #ccc',
                outline: 'none',
                fontSize: '14px',
                backgroundColor:"#D9D9D9"
                
              }}
            />
          </div>
        <p className='text-right text-lg ' style={{color:"white",marginRight:"125px",marginTop:"-31px"}}>admin loby</p>
    </div>

        <div className='mt-7'>
        <div className='p-4 bg-gray-200'>
            <Image className='ml-16 ' alt='hari tanggal' src={teksbukutamu} />
          </div>
          <div className='flex'>
               <Image alt='Selamat datang di sistem' className='mt-16 ml-24' src={welcome} width={550}  />
               <div className='absolute'>
               <Image alt='Selamat datang di sistem' className='ml-[836px] mt-[-10px]' src={runcing1} width={700}  />
               <Image alt='Selamat datang di sistem' className='mt-[-242px]' src={runcing2} width={500}  />
               </div>
            </div>
        </div>
               <div className='flex ml-[500px] mt-16'> 
                    <Image alt='Daftar Tamu' className='mr-[150px]' src={KartuKanan} />
                    <Image alt='Daftar Tamu' src={KartuKiri} />
               </div>
      </body>
    </>
  );
}

export default page;
