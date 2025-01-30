import React from 'react';
import Image from 'next/image';
import { IoMdSearch } from 'react-icons/io';
import Profile from '../assets/svgs/Profile.svg';
import Navbar from '../assets/svgs/Navbarstaf.svg';
import Icon from '../assets/images/IconSchool.png';
import Home from '../assets/svgs/HomeStaff.svg';
import AksesPenggun from '../assets/svgs/AksesPengguna.svg';
import Notif from '../assets/svgs/Lonceng.svg';
import TeksPengguna from '../assets/svgs/TeksTujuan.svg'
import SideBar from '../assets/svgs/SideBar.svg'


function AksesPengguna() {
  return (
    <div style={{ backgroundColor: '#F5F5F5', height: '' }}>
      {}    
      <div className='mt-12'>
        
        <Image
         src={Navbar}
         alt='Navbar'
         width={1536}
         style={{marginTop:"-46px"}}
        />
        <Image
         src={SideBar}
         alt='Navbar'
         width={200}
         style={{marginTop:"-46px"}}
         className='absolute'
        />

        <Image
         src={AksesPenggun}
         alt='Navbar'
         width={230}
         style={{marginTop:"-80px",}}
        />
        
        <div style={{ display: 'flex', alignItems: 'center', marginTop: "-40px", marginLeft: "1000px" }}>
            <input
              type='text'
              placeholder='Cari'
              style={{
                marginLeft: '0px',
                padding: '5px 25px',
                borderRadius: '100px',
                border: '1px solid #ccc',
                outline: 'none',
                fontSize: '14px',
                
              }}
            />
          </div>

        <Image
         src={Profile}
         alt='Navbar'
         width={35}
         style={{marginTop:"-38px",marginLeft:"1270px",}}
        />

        <p className='text-right text-lg ' style={{color:"white",marginRight:"125px",marginTop:"-31px"}}>admin loby</p>
    </div>
      {}
      <main style={{ padding: ' 45px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', marginTop: '20px' }}>
          <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}></h2>
          <button
            style={{
              backgroundColor: '#E4262C',
              color: 'white',
              borderWidth: '2px',
              padding: '10px 15px',
              borderRadius: '8px',
              borderColor: '#63181A',
              fontWeight: 'bold',
            }}
          >
            + Tambah Pengguna
          </button>
        </div>

        {}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            width: '90%',
            marginLeft:"100px"
          }}
        >
          
          <table style={{ width: '100%'}}>
            <thead>
              <tr style={{ backgroundColor: '#E3E2EC', textAlign: 'left' }}>
                <th className='p-7 '>Nama</th>
                <th className='p-7 '>NIP</th>
                <th className='p-7 '>Unit Kerja</th>
                <th className='p-7 '>Nama Pengguna</th>
                <th className='p-7 '>Kata Sandi</th>
                <th className='p-7'>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {Array(10).fill(0).map((_, index) => (
                <tr key={index} style={{ borderBottom: '3px solid #CFCDDE' }}>
                  <td style={{ padding: '15px' }}>
                    NAMA ORANG<br />
                    <span style={{ color: '#999', fontSize: '12px' }}>Instansi</span>
                  </td>
                  <td className='p-7'>0000000000</td>
                  <td className='p-7'>Kurikulum</td>
                  <td className='p-7'>Urus nilai</td>
                  <td className='p-7'>password</td>
                  <td className='p-7'>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default AksesPengguna;
