'use client';
import React from 'react'
import segitiga from '../assets/svgs/SegitigaSidebarKecil.svg'
import Icon from '../assets/svgs/IconTelkomSchool.svg'
import Daftar from '../assets/svgs/logoDaftarTamu.svg'
import Orang from '../assets/svgs/LogoPengguna.svg'
import statistik from '../assets/svgs/StatistikPutih.svg'
import keluar from '../assets/svgs/LogoKeluar.svg'
import Home from '../assets/svgs/LogoHomeAbu.svg'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import PieChartComponent from "./piechart";
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
              <div className='ml-[-22px] rounded-lg mt-3 hover:bg-[#9C0006] p-[7px]'>
                <Image
                src={Daftar}
                alt='Home'
                width={30}
                />
              </div>
              </Link>
              
              <div className='ml-[-22px] rounded-lg mt-3 bg-[#9C0006] p-[7px]'>
                <Image
                src={statistik}
                alt='Home'
                width={30}
                />
              </div>

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
              <div className='ml-[-22px] rounded-lg mt-3 hover:bg-[#9C0006] p-[7px]'>
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
            <p className='flex text-[25px] mt-10 ml-16 '><MdOutlineKeyboardArrowLeft/><span className='text-lg mt-[-2px] font-semibold'>Laporan Statistik</span></p>
            </Link>
            <p className='text-[25px] flex mt-[35px] ml-[990px] '><FaRegUserCircle /><span className='text-base ml-2 font-semibold'>admin lobi</span></p>
          </div>
          <button className='bg-[#E4262C] text-white px-[78px] border-[3px] border-red-700 py-[10px] rounded-full absolute font-medium text-[15px] hover:bg-red-800 ml-[315px]'>Perminggu</button>
        <button className='bg-[#E4262C] text-white px-[84px] border-[3px] border-red-700 py-[10px] rounded-full absolute font-medium text-[15px]  hover:bg-red-800 ml-[620px]'>Perbulan</button>
        <button className='bg-[#E4262C] text-white px-[84px] border-[3px] border-red-700 py-[10px] rounded-full absolute font-medium text-[15px]  hover:bg-red-800 ml-[926px]'>Pertahun</button>
          
            <PieChartComponent/>
        <button className='bg-[#E4262C] text-white px-10 py-2 rounded-full  font-medium text-[13px] mt-7  hover:bg-red-800 ml-[435px]'>Unduh laporan</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default page