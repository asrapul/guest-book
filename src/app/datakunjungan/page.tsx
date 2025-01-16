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
          <h1 style={{ fontSize: '18px', fontWeight: 'bold', margin: 0 }}>Akses Pengguna</h1>
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
          <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}></h2>
          <button
            style={{
              backgroundColor: '#C82333',
              color: 'white',
              border: 'none',
              padding: '10px 15px',
              borderRadius: '15px',
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
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#F1F1F1', textAlign: 'left' }}>
                <th style={{ padding: '15px' }}>Nama</th>
                <th style={{ padding: '15px' }}>NIP</th>
                <th style={{ padding: '15px' }}>Unit Kerja</th>
                <th style={{ padding: '15px' }}>Nama Pengguna</th>
                <th style={{ padding: '15px' }}>Kata Sandi</th>
                <th style={{ padding: '15px' }}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {Array(5).fill(0).map((_, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #E5E5E5' }}>
                  <td style={{ padding: '15px' }}>
                    NAMA ORANG<br />
                    <span style={{ color: '#999', fontSize: '12px' }}>Instansi</span>
                  </td>
                  <td style={{ padding: '15px' }}>0000000000</td>
                  <td style={{ padding: '15px' }}>Kurikulum</td>
                  <td style={{ padding: '15px' }}>Urus nilai</td>
                  <td style={{ padding: '15px' }}>password</td>
                  <td style={{ padding: '15px' }}>
                    <button
                      style={{
                        backgroundColor: '#FFC107',
                        color: 'white',
                        border: 'none',
                        padding: '5px 10px',
                        borderRadius: '5px',
                        fontSize: '12px',
                      }}
                    >
                      
                    </button>
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
