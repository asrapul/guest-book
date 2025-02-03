import React from 'react'
import Sidebar from '../assets/svgs/SidebarStatistik.svg'
import Home from '../assets/svgs/LogoHomeAbu.svg'
import DaftarTamu from '../assets/svgs/logoDaftarTamu.svg'
import Statistik from '../assets/svgs/StatistikPutih.svg'
import pengguna from '../assets/svgs/LogoPengguna.svg'
import keluar from '../assets/svgs/LogoKeluar.svg'
import navbar from '../assets/svgs/Navbarstaf.svg'
import Image from 'next/image'
import Gambar from '../assets/svgs/statistikhapus.svg'
import Teks from '../assets/svgs/statistikteks.svg'
import Link from 'next/link'


function page() {
  return (
    <>
    <div className='bg-[#ebeaf2]'>
        <div className=''>
        <Image
        src={navbar}
        alt='navbar'
        width={1550}
        /> 
        <div className='mt-[-85px] ml-16 flex'>
        <Image
        src={Teks}
        alt='Teks'
        className=''
        /> 
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
              className="mt-4 mb-6"
            />
        </div>

        </div>
    <Image
    src={Sidebar}
    alt='Sidebar'
    width={57}
    className='mt-[-25px]'
    />  
        
        <div>
        <div className='absolute '>
            
            <Link href='/dashboard'>
            <div className='mt-[-550px] ml-[6px] hover:bg-[#9C0006] p-[7px] rounded-lg '>
            <Image
            src={Home}
            alt='Home'
            width={30}
            />
            </div>
            </Link>
            
            <Link href='/daftaradmin'>
            <div className='mt-[13px] ml-[6px] hover:bg-[#9C0006] p-[7px] rounded-lg '>
            <Image
            src={DaftarTamu}
            alt='Home'
            width={30}
            />
            </div>
            </Link>

            <div className='mt-[13px] ml-[6px] bg-[#9C0006] p-[7px] rounded-lg '>
            <Image
            src={Statistik}
            alt='Home'
            width={30}
            />
            </div>
            
            <Link href='/aksespengguna'>
            <div className='mt-[13px] ml-[6px] hover:bg-[#9C0006] p-[7px] rounded-lg '>
            <Image
            src={pengguna}
            alt='Home'
            width={30}
            />
            </div>
            </Link>
            
            <Link href='/staf'>
            <div className='mt-[13px] ml-[6px] hover:bg-[#9C0006] p-[7px] rounded-lg '>
            <Image
            src={keluar}
            alt='Home'
            width={30}
            />
            </div>
            </Link>
        </div>

        <Image
        src={Gambar}
        alt='Gambar'
        width={1150}
        className='absolute mt-[-680px]  ml-[210px]'
        />
        </div>
    </div>
    </>
  )
}

export default page