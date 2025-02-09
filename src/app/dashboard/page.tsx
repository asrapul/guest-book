
import { useState, useEffect, useRef } from "react";
import Sidebar from '../assets/svgs/DashboardSideBar.svg'
import TelkomSchool from '../assets/svgs/TelkomSchool.svg'
import EfekSegitiga from '../assets/svgs/SegitigaSidebar.svg'
import Image from 'next/image'
import { IoMdInformationCircleOutline } from "react-icons/io";
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
    <div className="bg-[#BA272D] px-36 border" style={{marginTop:"90px",borderRadius:"0px 30px 30px 0px",borderColor:"#ba272d"}}>
      <Image
      src={TelkomSchool}
      alt=""
      className="absolute ml-[-110px] mt-[70px]"
      />
      <Image
      src={EfekSegitiga}
      alt=""
      className="absolute ml-[-200px] mt-[-1vh]"
      />
    </div>
    <div>

          <div className='flex'>
            <p className='text-xl font-semibold mt-32 ml-14 mr-[600px]'>Beranda</p>

            <input
              type='text'
              placeholder=' Cari'
              style={{
                marginLeft: '20px',
                padding: '5px 20px',
                borderRadius: '100px',
                border: '1px solid #ccc',
                outline: 'none',
                fontSize: '14px',
              }}
              className="mt-32"
            />
            <Image
            src={Profile}
            alt=''
            className='mt-[116px] ml-4'
            />
            <p className='mt-[126px] font-semibold ml-2'>admin lobi</p>
          </div>
          <div className='p-8 ml-14 mt-5 mr-[-55px] bg-[#E4262C] rounded-lg'>
              <p className='text-2xl ml-7  text-white font-semibold'>Selamat datang di sistem manajemen buku tamu</p>
              <p className='ml-7 mt-3 font-semibold tracking-wide text-[#f7bbbd]'>Kelola dan Monitor tamu dengan mudah dan efisien</p>
          </div>
          <div>
            <p className='ml-14 mt-4 font-semibold'>Daftar Tamu</p>
            <p className='mt-2 text-[#9c9c9e] text-sm ml-14'>Terbaru</p>
          </div>
          <div className=''>
          <table className='ml-14 mb-16 mt-2' style={{ width: "100%"}}>
            <thead style={{ backgroundColor: "#E3E2EC" }}>
              <tr className=" border-2 rounded-3xl" style={{borderColor:"#f0f0f4 #f0f0f4 #EBEAF2 #f0f0f4"}}>
                <th className="p-3" style={{borderRadius: "20px 0px 0px 0px"}}></th>
                <th></th>
                <th className="text-[14px]" style={{ padding: "20px", textAlign: "left" }}>Nama</th>
                <th className="text-[14px]" style={{ padding: "15px", textAlign: "left" }}>Hari Tanggal</th>
                <th className="text-[14px]" style={{ padding: "15px", textAlign: "left" }}>Tujuan</th>
                <th className="text-[14px]" style={{ padding: "15px", textAlign: "left" }}>Keperluan</th>
                <th className="text-[14px]" style={{ borderRadius: "0px 20px 0px 0px", padding: "15px", textAlign: "left" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {}
              <tr className="bg-white border-2">
                <td></td>
                <td className=' text-[20px] font-medium'style={{padding:"0px", textAlign:"right"}}><IoMdInformationCircleOutline/></td>
                <td className=' font-medium text-[14px]' style={{ padding: "15px", textAlign: "left" }}> NAMA ORANG<br /><span className='text-gray-400' style={{fontSize:"11px"}}>Instansi</span></td>
                <td className="text-[13px]" style={{ padding: "15px", textAlign: "left" }}>00 / 00 / 2000 </td>
                <td className="text-[13px]" style={{ padding: "15px", textAlign: "left" }}>Kurikulum</td>
                <td className="text-[13px]" style={{ padding: "15px", textAlign: "left" }}>Urus nilai</td>
                <td className="text-[13px]" style={{ padding: "10px", textAlign: "left" }}>Sudah Bertemu</td>
              </tr>
              <tr className="bg-white border-2">
              <td></td>
              <td className='text-[20px] font-medium' style={{ padding: "0px", textAlign: "right" }}><IoMdInformationCircleOutline /></td>
                <td className='text-[13px] font-medium' style={{ padding: "15px", textAlign: "left" }}>NAMA ORANG<br /><span className='text-gray-400'  style={{fontSize:"11px"}}>Instansi</span></td>
                <td className="text-[13px]" style={{ padding: "15px", textAlign: "left" }}>00 / 00 / 2000</td>
                <td className="text-[13px]" style={{ padding: "15px", textAlign: "left" }}>Kurikulum</td>
                <td className="text-[13px]" style={{ padding: "15px", textAlign: "left" }}>Urus nilai</td>
                <td className="text-[13px]" style={{ padding: "10px", textAlign: "left" }}>tertunda</td>
              </tr>
              <tr className="bg-white border-2">
              <td></td>
              <td className='text-[20px] font-medium' style={{ padding: "0px", textAlign: "right" }}><IoMdInformationCircleOutline /></td>
                <td className='text-[13px] font-medium' style={{ padding: "15px", textAlign: "left" }}>NAMA ORANG<br /><span className='text-gray-400'  style={{fontSize:"11px"}}>Instansi</span></td>
                <td className="text-[13px]" style={{ padding: "15px", textAlign: "left" }}>00 / 00 / 2000</td>
                <td className="text-[13px]" style={{ padding: "15px", textAlign: "left" }}>Kurikulum</td>
                <td className="text-[13px]" style={{ padding: "15px", textAlign: "left" }}>Urus nilai</td>
                <td className="text-[13px]" style={{ padding: "10px", textAlign: "left" }}>gagal bertemu</td>
              </tr>
              <tr className="bg-white border-2">
              <td></td>
              <td className='text-[20px] font-medium' style={{ padding: "0px", textAlign: "right" }}><IoMdInformationCircleOutline /></td>
                <td className='text-[13px] font-medium' style={{ padding: "15px", textAlign: "left" }}>NAMA ORANG<br /><span className='text-gray-400'  style={{fontSize:"11px"}}>Instansi</span></td>
                <td className="text-[13px]" style={{ padding: "15px", textAlign: "left" }}>00 / 00 / 2000</td>
                <td className="text-[13px]" style={{ padding: "15px", textAlign: "left" }}>Kurikulum</td>
                <td className="text-[13px]" style={{ padding: "15px", textAlign: "left" }}>Urus nilai</td>
                <td className="text-[13px]" style={{ padding: "10px", textAlign: "left" }}>Sudah Bertemu</td>
              </tr>
              <tr className="bg-white border-2 ">
                <td ></td>
                <td className='text-[20px] font-medium'><IoMdInformationCircleOutline /></td>
                <td className='text-[13px] font-medium' style={{ padding: "15px", textAlign: "left" }}>NAMA ORANG<br /><span className='text-gray-400 '  style={{fontSize:"11px"}}>Instansi</span></td>
                <td className="text-[13px]" style={{ textAlign: "left", padding: "15px", }}>00 / 00 / 2000</td>
                <td className="text-[13px]" style={{ textAlign: "left", padding: "15px", }}>Kurikulum</td>
                <td className="text-[13px]" style={{ textAlign: "left", padding: "15px", }}>Urus nilai</td>
                <td className="text-[13px]" style={{ padding: "10px", textAlign: "left" }}>Sudah Bertemu</td>
              </tr>
              {}
            </tbody>
          </table>
          </div>
    </div>
    </div>
     <div className=' mt-[-600px] absolute ml-12 flex bg-[#9C0006] p-4 rounded-lg'>
      <Image 
      alt=''
      width={25}
      src={Home}
      />
      <p className='text-white mt-1 ml-4 mr-16 text-sm'>Beranda</p>
     </div>

     <Link href='/daftaradmin'>
     <div className=' mt-[-540px] absolute ml-12 flex p-4 hover:bg-[#9C0006] rounded-lg 
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
     <div className=' mt-[-480px] absolute ml-12 hover:bg-[#9C0006] flex p-4 rounded-lg'>
      <Image 
      alt=''
      width={30}
      src={Statistik}
      />
      <p className='text-[#e09ea0] mt-1 ml-4 mr-1 text-sm'>Laporan Statistik</p>
     </div>
     </Link>
    
    <Link href='/aksespengguna'>
     <div className=' mt-[-420px] absolute ml-12 flex p-4 hover:bg-[#9C0006] rounded-lg'>
      <Image 
      alt=''
      width={30}
      src={Laporan}
      />
      <p className='text-[#e09ea0] mt-1 ml-4 mr-1 text-sm'>Akses Pengguna</p>
     </div>
    </Link>

    <Link href='/staf'>
     <div className=' mt-[-360px] absolute ml-12 flex p-4 rounded-lg hover:bg-[#9C0006]'>
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