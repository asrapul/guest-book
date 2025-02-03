
import { useState, useEffect, useRef } from "react";
import Sidebar from '../assets/svgs/DashboardSideBar.svg'
import Image from 'next/image'
import Statistik from '../assets/svgs/LogoStatistik.svg'
import Tamu from '../assets/svgs/logoDaftarTamu.svg'
import Laporan from '../assets/svgs/LogoPengguna.svg'
import Home from '../assets/svgs/HomeDashboard.svg'
import Keluar from '../assets/svgs/LogoKeluar.svg'
import Profile from '../assets/svgs/ProfileHitam.svg'
import Link from "next/link";

function page() {
  return (
    <>
    <div className='bg-[#f0f0f4] '>
      <div>
    <div className='flex mt-[-91px]'>
    <Image
    alt='Sidebar'
    src={Sidebar}
    width={300}
    />
    <div>

          <div className='flex'>
            <p className='text-xl font-semibold mt-32 ml-14 mr-[500px]'>Beranda</p>

            <input
              type='text'
              placeholder=' Cari'
              style={{
                marginLeft: '20px',
                padding: '5px 10px',
                borderRadius: '100px',
                border: '1px solid #ccc',
                outline: 'none',
                fontSize: '14px',
              }}
              className="mt-28"
            />
            
            <Image
            src={Profile}
            alt=''
            className='mt-28 ml-5'
            />
            <p className='mt-[122px] ml-2'>admin lobby</p>
          </div>
          <div className='p-9 ml-14 mt-10 mr-[-55px] bg-[#E4262C] rounded-lg'>
              <p className='text-2xl ml-7  text-white font-semibold'>Selamat datang di sistem <br />manajemen tamu</p>
              <p className='ml-7 mt-3 font-semibold tracking-wide text-[#f7bbbd]'>Kelola dan Monitor tamu dengan mudah dan efisien</p>
          </div>
          <div>
            <p className='ml-14 mt-10 font-semibold'>Daftar Tamu</p>
            <p className='mt-2 text-[#9c9c9e] text-sm ml-14'>Terbaru</p>
          </div>
          <div className=''>
          <table className='ml-14 mt-5' style={{ width: "100%"}}>
            <thead style={{ backgroundColor: "#E3E2EC" }}>
              <tr className="border-[#EBEAF2] border-2 rounded-3xl">
                <th style={{ borderRadius: "20px px 0px 0px", padding: "25px", textAlign: "left" }}>Nama</th>
                <th style={{ padding: "15px", textAlign: "left" }}>Hari Tanggal</th>
                <th style={{ padding: "15px", textAlign: "left" }}>Tujuan</th>
                <th style={{ padding: "15px", textAlign: "left" }}>Keperluan</th>
                <th style={{ padding: "15px", textAlign: "left" }}>Kartu Identitas</th>
                <th style={{ padding: "15px", textAlign: "left" }}>Nomor Telpon</th>
                <th style={{ borderRadius: "0px 20px 0px 0px", padding: "15px", textAlign: "left" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {}
              <tr className="bg-white border-2">
                <td className='text-sm font-medium' style={{ padding: "15px", textAlign: "left" }}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi</span></td>
                <td style={{ padding: "15px", textAlign: "left" }}>00 / 00 / 2000 </td>
                <td style={{ padding: "15px", textAlign: "left" }}>Kurikulum</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Urus nilai</td>
                <td style={{ padding: "15px", textAlign: "left" }}>KTP ()</td>
                <td style={{ padding: "15px", textAlign: "left" }}>1 Orang</td>
                <td style={{ padding: "15px", textAlign: "left" }}></td>
              </tr>
              <tr className="bg-white border-2">
                <td className='text-sm font-medium' style={{ padding: "15px", textAlign: "left" }}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi</span></td>
                <td style={{ padding: "15px", textAlign: "left" }}>00 / 00 / 2000</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Kurikulum</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Urus nilai</td>
                <td style={{ padding: "15px", textAlign: "left" }}>KTP ()</td>
                <td style={{ padding: "15px", textAlign: "left" }}>1 Orang</td>
                <td style={{ padding: "15px", textAlign: "left" }}></td>
              </tr>
              <tr className="bg-white border-2">
                <td className='text-sm font-medium' style={{ padding: "15px", textAlign: "left" }}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi</span></td>
                <td style={{ padding: "15px", textAlign: "left" }}>00 / 00 / 2000</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Kurikulum</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Urus nilai</td>
                <td style={{ padding: "15px", textAlign: "left" }}>KTP ()</td>
                <td style={{ padding: "15px", textAlign: "left" }}>1 Orang</td>
                <td style={{ padding: "15px", textAlign: "left" }}></td>
              </tr>
              <tr className="bg-white border-2">
                <td className='text-sm font-medium' style={{ padding: "15px", textAlign: "left" }}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi</span></td>
                <td style={{ padding: "15px", textAlign: "left" }}>00 / 00 / 2000</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Kurikulum</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Urus nilai</td>
                <td style={{ padding: "15px", textAlign: "left" }}>KTP ()</td>
                <td style={{ padding: "15px", textAlign: "left" }}>1 Orang</td>
                <td style={{ padding: "15px", textAlign: "left" }}></td>
              </tr>
              <tr className="bg-white border-2">
                <td className='text-sm font-medium' style={{ padding: "15px", textAlign: "left" }}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi</span></td>
                <td style={{ padding: "15px", textAlign: "left" }}>00 / 00 / 2000</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Kurikulum</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Urus nilai</td>
                <td style={{ padding: "15px", textAlign: "left" }}>KTP ()</td>
                <td style={{ padding: "15px", textAlign: "left" }}>1 Orang</td>
                <td style={{ padding: "15px", textAlign: "left" }}></td>
              </tr>
              {}
            </tbody>
          </table>
          </div>
    </div>
    </div>
     <div className=' mt-[-650px] absolute ml-12 flex bg-[#9C0006] p-4 rounded-lg'>
      <Image 
      alt=''
      width={25}
      src={Home}
      />
      <p className='text-white mt-1 ml-4 mr-16 text-sm'>Beranda</p>
     </div>

     <Link href='/daftaradmin'>
     <div className=' mt-[-590px] absolute ml-12 flex p-4 hover:bg-[#9C0006] rounded-lg 
     .'>
      <Image 
      alt=''
      width={30}
      src={Tamu}
      />
      <p className='text-[#e09ea0] mt-1 ml-4 mr-8 text-sm'>Daftar Tamu</p>
     </div>
     </Link>
    
    <Link href='/statistik'>
     <div className=' mt-[-530px] absolute ml-12 hover:bg-[#9C0006] flex p-4 rounded-lg'>
      <Image 
      alt=''
      width={30}
      src={Statistik}
      />
      <p className='text-[#e09ea0] mt-1 ml-4 mr-1 text-sm'>Laporan Statistik</p>
     </div>
     </Link>
    
    <Link href='/aksespengguna'>
     <div className=' mt-[-470px] absolute ml-12 flex p-4 hover:bg-[#9C0006] rounded-lg'>
      <Image 
      alt=''
      width={30}
      src={Laporan}
      />
      <p className='text-[#e09ea0] mt-1 ml-4 mr-1 text-sm'>Akses Pengguna</p>
     </div>
    </Link>

    <Link href='/staf'>
     <div className=' mt-[-410px] absolute ml-12 flex p-4 rounded-lg hover:bg-[#9C0006]'>
      <Image 
      alt=''
      width={30}
      src={Keluar}
      />
      <p className='text-[#e09ea0] mt-1 ml-4 mr-20 text-sm'>Keluar</p>
     </div>
    </Link>

    </div>
    </div> 
    </>
  )
}

export default page