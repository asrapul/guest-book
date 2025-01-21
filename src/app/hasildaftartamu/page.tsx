import React from 'react';
import Image from 'next/image';
import { IoMdSearch } from 'react-icons/io';
import Profile from '../assets/svgs/Profile.svg';


function AksesPengguna() {
  return (
    <div style={{ backgroundColor: '#F5F5F5', height: '100vh' }}>
      {}
      <header
        style={{
          backgroundColor: '#C82333',
          color: 'white',
          padding: '15px 30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '10px',
            }}
          >
            <Image src="/logo.svg" alt="Logo" width={30} height={30} />
          </div>
          <h1 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>Daftar Tamu</h1>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: '5px 15px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IoMdSearch size={20} color="#C82333" />
            <input
              type="text"
              placeholder="Cari"
              style={{
                border: 'none',
                outline: 'none',
                marginLeft: '5px',
                fontSize: '14px',
              }}
            />
          </div>
            <Image src={Profile} alt="foto"/>
          <p style={{ margin: 0, fontSize: '14px' }}>admin lobby</p>
        </div>
      </header>

      {}
      <main style={{ padding: '20px 45px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', marginTop: '20px' }}>
            <div className='flex text-left font-semibold'>
            <h1 className=''>Kepala Sekolah</h1>
            <h1 className='ml-24'>SDM</h1>
            <h1 className='ml-24'>Keuangan / Administrasi</h1>
            <h1 className='ml-24'>Kurikulum</h1>
            <h1 className='ml-24'>Kesiswaan</h1>
            <h1 className='ml-24'>Sarpra</h1>
            <h1 className='ml-24'>Hubin</h1>
            <h1 className='ml-24 mr-4'>PPDB</h1>
          </div>
        </div>

        {}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          }}
        >
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#E3E2EC', textAlign: 'left' }}>
                <th style={{ padding: '15px' }}>Nama</th>
                <th style={{ padding: '15px' }}>Hari / Tanggal</th>
                <th style={{ padding: '15px' }}>Tujuan</th>
                <th style={{ padding: '15px' }}>Keperluan</th>
                <th style={{ padding: '15px' }}>Kartu<br /> Identitas </th>
                <th style={{ padding: '15px' }}>Nomor<br /> Telpon</th>
                <th style={{ padding: '15px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {Array(5).fill(0).map((_, index) => (
                <tr key={index} style={{ borderBottom: '3px solid #CFCDDE' }}>
                  <td style={{ padding: '15px' }}>
                    NAMA ORANG<br />
                    <span style={{ color: '#999', fontSize: '12px' }}>Instansi</span>
                  </td>
                  <td style={{ padding: '15px' }}>00 / 00  / 2000  </td>
                  <td style={{ padding: '15px' }}>Kurikulum</td>
                  <td style={{ padding: '15px' }}>Urus nilai</td>
                  <td style={{ padding: '15px' }}>KTP ()</td>
                  <td style={{ padding: '15px' }}>1 Orang</td>
                  <td style={{ padding: '15px' }}>
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
