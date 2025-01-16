import React from 'react';
import Image from 'next/image';
import status from '../assets/svgs/status.svg';
import Navbar from '../assets/svgs/Navbarstaf.svg';
import Icon from '../assets/images/IconSchool.png';
import Home from '../assets/svgs/HomeStaff.svg';
import Notif from '../assets/svgs/Lonceng.svg';
import Profile from '../assets/svgs/Profile.svg';
import DaftarTamu from '../assets/svgs/daftartamuhitam.svg';
import { IoMdSearch } from "react-icons/io";
import Terbaru from '../assets/svgs/Terbaru.svg'
import { stat } from 'fs';


function page() {
  return (
    <>
      <body style={{ background: "linear-gradient(180deg, #EBEAF2 100%, #A2A1B4 100%)" }}>
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
              
        <div className='mt-8'>
          <div className='flex'>
            <Image alt='daftar tamu' className='mr-[1080px]' src={DaftarTamu}/>
            <button className='rounded-xl mt-3 px-7 shadow-2xl mb-3 p-[-10px] bg-[#D0D0D0]'>
              <Image alt='terbaru' src={Terbaru} />
            </button>
          </div>
          <div className=''>
            <Image alt='hari tanggal' width={1700} src={status} />
          </div>
          <div className='bg-white'>
          <table className='ml-36' style={{ width: "80%", borderCollapse: "collapse",backgroundColor:"" }}>
            <tbody>
              {/* Example rows for table data */}
              <tr className="bg-white border-2 border-r-white border-l-white">
                <td className='text-sm font-medium border-white' style={{ padding: "15px", textAlign: "left"}}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi / Jabatan</span></td>
                <td style={{ padding: "15px", textAlign: "left", borderRightColor:"white" }}>Hari / Tanggal</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Tujuan</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Keperluan</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Kartu<br/> Identitas</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Jumlah<br/>Tamu</td>
                <td style={{ padding: "15px", textAlign: "left" }}><input type='checkbox'/></td>
              </tr>
              <tr className="bg-white border-2 border-r-white border-l-white">
                <td className='text-sm font-medium border-white' style={{ padding: "15px", textAlign: "left"}}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi / Jabatan</span></td>
                <td style={{ padding: "15px", textAlign: "left" }}>Hari / Tanggal</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Tujuan</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Keperluan</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Kartu<br/> Identitas</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Jumlah<br/>Tamu</td>
                <td style={{ padding: "15px", textAlign: "left" }}><input type='checkbox'/></td>
              </tr>
              <tr className="bg-white border-2 border-r-white border-l-white">
                <td className='text-sm font-medium border-white' style={{ padding: "15px", textAlign: "left"}}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi / Jabatan</span></td>
                <td style={{ padding: "15px", textAlign: "left" }}>Hari / Tanggal</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Tujuan</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Keperluan</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Kartu<br/> Identitas</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Jumlah<br/>Tamu</td>
                <td style={{ padding: "15px", textAlign: "left" }}><input type='checkbox'/></td>
              </tr>
              <tr className="bg-white border-2 border-r-white border-l-white">
                <td className='text-sm font-medium border-white' style={{ padding: "15px", textAlign: "left"}}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi / Jabatan</span></td>
                <td style={{ padding: "15px", textAlign: "left" }}>Hari / Tanggal</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Tujuan</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Keperluan</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Kartu<br/> Identitas</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Jumlah<br/>Tamu</td>
                <td style={{ padding: "15px", textAlign: "left" }}><input type='checkbox'/></td>
              </tr>
              <tr className="bg-white border-2 border-r-white border-l-white">
                <td className='text-sm font-medium border-white' style={{ padding: "15px", textAlign: "left"}}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi / Jabatan</span></td>
                <td style={{ padding: "15px", textAlign: "left" }}>Hari / Tanggal</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Tujuan</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Keperluan</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Kartu<br/> Identitas</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Jumlah<br/>Tamu</td>
                <td style={{ padding: "15px", textAlign: "left" }}><input type='checkbox'/></td>
              </tr>
              <tr className="bg-white border-2 border-r-white border-l-white">
                <td className='text-sm font-medium border-white' style={{ padding: "15px", textAlign: "left"}}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi / Jabatan</span></td>
                <td style={{ padding: "15px", textAlign: "left" }}>Hari / Tanggal</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Tujuan</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Keperluan</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Kartu<br/> Identitas</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Jumlah<br/>Tamu</td>
                <td style={{ padding: "15px", textAlign: "left" }}><input type='checkbox'/></td>
              </tr>
              <tr className="bg-white border-2 border-r-white border-l-white">
                <td className='text-sm font-medium border-white' style={{ padding: "15px", textAlign: "left"}}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi / Jabatan</span></td>
                <td style={{ padding: "15px", textAlign: "left" }}>Hari / Tanggal</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Tujuan</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Keperluan</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Kartu<br/> Identitas</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Jumlah<br/>Tamu</td>
                <td style={{ padding: "15px", textAlign: "left" }}><input type='checkbox'/></td>
              </tr>
              <tr className="bg-white border-2 border-r-white border-l-white">
                <td className='text-sm font-medium border-white' style={{ padding: "15px", textAlign: "left"}}>NAMA ORANG<br /><span className='text-gray-400 text-sm'>Instansi / Jabatan</span></td>
                <td style={{ padding: "15px", textAlign: "left" }}>Hari / Tanggal</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Tujuan</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Keperluan</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Kartu<br/> Identitas</td>
                <td style={{ padding: "15px", textAlign: "left" }}>Jumlah<br/>Tamu</td>
                <td style={{ padding: "15px", textAlign: "left" }}><input type='checkbox'/></td>
              </tr>
            </tbody>
          </table>
            </div>
        </div>
      </body>
    </>
  );
}

export default page;
