'use client';
import React from 'react'
import segitiga from '../assets/svgs/SegitigaSidebarKecil.svg'
import Icon from '../assets/svgs/IconTelkomSchool.svg'
import Daftar from '../assets/svgs/IconDaftarAktif.svg'
import Orang from '../assets/svgs/LogoPengguna.svg'
import statistik from '../assets/svgs/LogoStatistik.svg'
import keluar from '../assets/svgs/LogoKeluar.svg'
import Home from '../assets/svgs/LogoHomeAbu.svg'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import Image from 'next/image'
import Link from 'next/link';


function page() {
  return (
    <>
      <div className='bg-[#EBEAF2]'>
        <div className='flex'>
        <nav className='bg-[#BA272D] px-7 py-[364.9px]' style={{borderRadius:"0px 20px 20px 0px"}}>
            <Image
            src={Icon}
            alt=''
            width={50}
              className='absolute mt-[-300px] ml-[-27px]'
            />
            <Image
            src={segitiga}
            alt=''
              className='absolute mt-[-300px] ml-[-27px]'
            />
            <div className='absolute'>
              <Link href='/dashboard'>
              <div className='ml-[-22px]  rounded-lg mt-[-160px] hover:bg-[#9C0006] p-[7px]'>
                <Image
                src={Home}
                alt='Home'
                width={30}
                />
              </div>
              </Link>
              <Link href='daftaradmin'>
              <div className='ml-[-22px] rounded-lg mt-3 bg-[#9C0006] p-[7px]'>
                <Image
                src={Daftar}
                alt='Home'
                width={30}
                />
              </div>
              </Link>
              
              <Link href='/statistik'>
              <div className='ml-[-22px] rounded-lg mt-3 hover:bg-[#9C0006] p-[7px]'>
                <Image
                src={statistik}
                alt='Home'
                width={30}
                />
              </div>
              </Link>

              <Link href='/aksespengguna'>
              <div className='ml-[-22px] rounded-lg mt-3 hover:bg-[#9C0006] p-[7px]'>
                <Image
                src={Orang}
                alt='Home'
                width={30}
                />
              </div>
              </Link>
              <Link href='/staf'>
              <div className='ml-[-22px] rounded-lg mt-3  hover:bg-[#9C0006] p-[7px]'>
                <Image
                src={keluar}
                alt='keluar'
                width={30}
                />
              </div>
              </Link>
            </div>
            
        </nav>
        <div>
          <div className='flex'>
            <Link href='/dashboard'>
            <p className='flex text-[25px] mt-10 ml-16 '><MdOutlineKeyboardArrowLeft/><span className='text-lg mt-[-2px] font-semibold'>Daftar Tamu</span></p>
            </Link>
            <input
              type='text'
              placeholder=' Cari'
              style={{
                marginLeft: '800px',
                padding: '5px 10px',
                borderRadius: '100px',
                border: '1px solid #ccc',
                outline: 'none',
                fontSize: '14px',
              }}
              className="mt-8 mb-8 "
            />
            <p className='text-[25px] flex mt-[35px] ml-5 '><FaRegUserCircle /><span className='text-base ml-2 font-semibold'>admin lobi</span></p>
          </div>
          <div className='mt-3'>
            <button className='ml-[90px] font-medium hover:text-red-600'>Kepala Sekolah</button>
            <button className='ml-[90px] font-medium hover:text-red-600'>SDM</button>
            <button className='ml-[90px] font-medium hover:text-red-600'>Keuangan / Administrasi</button>
            <button className='ml-[90px] font-medium hover:text-red-600'>Kurikulum</button>
            <button className='ml-[90px] font-medium hover:text-red-600'>Kesiswaan</button>
            <button className='ml-[90px] font-medium hover:text-red-600'>Sarpra</button>
            <button className='ml-[90px] font-medium hover:text-red-600'>Hubin</button>
            <button className='ml-[90px] font-medium hover:text-red-600'>PPDB</button>
          </div>
          <div className='mt-10'>
          <table className='ml-20' style={{ width: "95%", borderCollapse: "collapse" }}>
            <thead style={{ position: "sticky", bottom: "0", backgroundColor: "#E3E2EC" }}>
              <tr className="border-[#EBEAF2] border-2 rounded-3xl">
                <th style={{ borderRadius: "20px 0px 0px 0px", padding: "25px", textAlign: "left" }}>Nama</th>
                <th style={{ padding: "15px", textAlign: "center" }}>NIP</th>
                <th style={{ padding: "15px", textAlign: "center" }}>Unit Kerja</th>
                <th style={{ padding: "15px", textAlign: "center" }}>Nama Pengguna</th>
                <th style={{ padding: "15px", textAlign: "center" }}>Kata Sandi</th>
                <th style={{ borderRadius: "0px 20px 0px 0px",padding: "15px",textAlign:"center"}}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {}
              <tr className="bg-white border-2">
                <td className='text-sm font-medium' style={{ padding: "15px", textAlign: "left" }}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi</span></td>
                <td style={{ padding: "15px", textAlign: "center" }}>00 / 00 / 2000 </td>
                <td style={{ padding: "15px", textAlign: "center" }}>Kurikulum</td>
                <td style={{ padding: "15px", textAlign: "center" }}>Urus nilai</td>
                <td style={{ padding: "15px", textAlign: "center" }}>Password</td>
                <td className='flex mt-4 mr-[-40px]' style={{ textAlign: "right" }}><button className='bg-[#007e08] text-white py-1 px-4 rounded-lg flex mr-3'><FaPen className='text-[13px] mt-[5px] mr-[7px] ml-1' /> Edit</button> <button className='bg-[#ba272d] text-white py-1 px-4 rounded-lg flex '><FaTrash className='text-[13px] mt-[5px] mr-[7px] ' /> Hapus</button></td>
              </tr>
              <tr className="bg-white border-2">
                <td className='text-sm font-medium' style={{ padding: "15px", textAlign: "left" }}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi</span></td>
                <td style={{ padding: "15px", textAlign: "center" }}>00 / 00 / 2000</td>
                <td style={{ padding: "15px", textAlign: "center" }}>Kurikulum</td>
                <td style={{ padding: "15px", textAlign: "center" }}>Urus nilai</td>
                <td style={{ padding: "15px", textAlign: "center" }}>Password</td>
                <td className='flex mt-4 mr-[-40px]' style={{ textAlign: "right" }}><button className='bg-[#007e08] text-white py-1 px-4 rounded-lg flex mr-3'><FaPen className='text-[13px] mt-[5px] mr-[7px] ml-1' /> Edit</button> <button className='bg-[#ba272d] text-white py-1 px-4 rounded-lg flex '><FaTrash className='text-[13px] mt-[5px] mr-[7px] ' /> Hapus</button></td>
              </tr>
              <tr className="bg-white border-2">
                <td className='text-sm font-medium' style={{ padding: "15px", textAlign: "left" }}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi</span></td>
                <td style={{ padding: "15px", textAlign: "center" }}>00 / 00 / 2000</td>
                <td style={{ padding: "15px", textAlign: "center" }}>Kurikulum</td>
                <td style={{ padding: "15px", textAlign: "center" }}>Urus nilai</td>
                <td style={{ padding: "15px", textAlign: "center" }}>Password</td>
                <td className='flex mt-4 mr-[-40px]' style={{ textAlign: "right" }}><button className='bg-[#007e08] text-white py-1 px-4 rounded-lg flex mr-3'><FaPen className='text-[13px] mt-[5px] mr-[7px] ml-1' /> Edit</button> <button className='bg-[#ba272d] text-white py-1 px-4 rounded-lg flex '><FaTrash className='text-[13px] mt-[5px] mr-[7px] ' /> Hapus</button></td>
              </tr>
              <tr className="bg-white border-2">
                <td className='text-sm font-medium' style={{ padding: "15px", textAlign: "left" }}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi</span></td>
                <td style={{ padding: "15px", textAlign: "center" }}>00 / 00 / 2000</td>
                <td style={{ padding: "15px", textAlign: "center" }}>Kurikulum</td>
                <td style={{ padding: "15px", textAlign: "center" }}>Urus nilai</td>
                <td style={{ padding: "15px", textAlign: "center" }}>Password</td>
                <td className='flex mt-4 mr-[-40px]' style={{ textAlign: "right" }}><button className='bg-[#007e08] text-white py-1 px-4 rounded-lg flex mr-3'><FaPen className='text-[13px] mt-[5px] mr-[7px] ml-1' /> Edit</button> <button className='bg-[#ba272d] text-white py-1 px-4 rounded-lg flex '><FaTrash className='text-[13px] mt-[5px] mr-[7px] ' /> Hapus</button></td>
              </tr>
              <tr className="bg-white border-2">
                <td className='text-sm font-medium' style={{ padding: "15px", textAlign: "left" }}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi</span></td>
                <td style={{ padding: "15px", textAlign: "center" }}>00 / 00 / 2000</td>
                <td style={{ padding: "15px", textAlign: "center" }}>Kurikulum</td>
                <td style={{ padding: "15px", textAlign: "center" }}>Urus nilai</td>
                <td style={{ padding: "15px", textAlign: "center" }}>Password</td>
                <td className='flex mt-4 mr-[-40px]' style={{ textAlign: "right" }}><button className='bg-[#007e08] text-white py-1 px-4 rounded-lg flex mr-3'><FaPen className='text-[13px] mt-[5px] mr-[7px] ml-1' /> Edit</button> <button className='bg-[#ba272d] text-white py-1 px-4 rounded-lg flex '><FaTrash className='text-[13px] mt-[5px] mr-[7px] ' /> Hapus</button></td>
              </tr>
              <tr className="bg-white border-2">
                <td className='text-sm font-medium' style={{  borderRadius: "0px 0px 0px 20px",padding: "15px", textAlign: "left" }}></td>
                <td style={{ padding: "35px", textAlign: "center" }}></td>
                <td style={{ padding: "15px", textAlign: "center" }}></td>
                <td style={{ padding: "15px", textAlign: "center" }}></td>
                <td style={{ padding: "15px", textAlign: "center" }}></td>
                <td style={{ borderRadius: "0px 20px 0px 0px",textAlign: "right" }}className='flex mt-4 mr-[-40px]' ></td>
              </tr>
              {}
            </tbody>
          </table>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default page