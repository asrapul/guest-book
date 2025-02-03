import React from 'react';
import Image from 'next/image';
import LogoDaftarTamu from '../assets/svgs/logoDaftarTamu.svg'
import LogoStatistik from '../assets/svgs/LogoStatistik.svg'
import LogoOrang from '../assets/svgs/LogoPenggunaAktif.svg'
import LogoKeluar from '../assets/svgs/LogoKeluar.svg'
import DaftarTamu from '../assets/svgs/DaftarTamu.svg'
import Navbar from '../assets/svgs/Navbarstaf.svg';
import Home from '../assets/svgs/LogoHomeAbu.svg';
import SideBar from '../assets/svgs/SideBar.svg'
import Link from 'next/link';


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
        <div className='absolute '>
        <Image
         src={SideBar}
         alt='Navbar'
         width={200}
         style={{marginTop:"-46px"}}
         
        />

          <Link href='/dashboard'>
          <Image
          src={Home}
          alt='IconHome'
          className='mt-[-600px] hover:bg-black ml-[18px] '
          />
          </Link>

          <Link href='/daftaradmin'>
          <Image
          src={LogoDaftarTamu}
          alt='IconHome'
          className='mt-[28px] ml-[17px] '
          />
          </Link>

          <Link href='/statistik'>
          <Image
          src={LogoStatistik}
          alt='IconHome'
          className='mt-[28px]  ml-[18px] '
          />
          </Link>

          <Image
          src={LogoOrang}
          alt='IconHome'
          className='mt-[28px]  ml-[9px] '
          />



          <Link href='/staf'>
          <Image
          src={LogoKeluar}
          alt='IconHome'
          className='mt-[28px]  ml-[18px] '
          />
          </Link>

        </div>
        <Link href='/dashboard'>
        <Image
         src={DaftarTamu}
         alt='Navbar'
         width={200}
         style={{marginTop:"-80px",marginLeft:"90px"}}
        />
        </Link>
        
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
              className='mt-[-8px] mr-6'
            />
          </div>
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
