import React from 'react';
import Image from 'next/image';
import HariTanggal from '../assets/svgs/haritable.svg';
import Navbar from '../assets/svgs/Navbarstaf.svg';
import Icon from '../assets/images/IconSchool.png';
import Home from '../assets/svgs/HomeStaff.svg';
import Notif from '../assets/svgs/Lonceng.svg';
import Profile from '../assets/svgs/Profile.svg';
import LogoDaftarTamu from '../assets/svgs/IconDaftarAktif.svg'
import { MdKeyboardArrowLeft } from "react-icons/md";
import DaftarTamu from '../assets/svgs/DaftarTamu.svg';
import { IoMdSearch } from "react-icons/io";
import Link from 'next/link';


function page() {
  const today = new Date();
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember",
  ];

  const dayName = days[today.getDay()];
  const date = today.getDate();
  const monthName = months[today.getMonth()];
  const year = today.getFullYear();
  return (
    <>
      <body className='bg-[#faf3ff]'>
        <div>
          <Image src={Navbar} alt='Navbar' width={1536} style={{ marginTop: "" }} />

          <Link href='/lobbystaf'>
          {/* <Image
            src={DaftarTamu}
            alt='Navbar'
            width={230}
            style={{ marginTop: "-82px", marginLeft: "55px" }}
          /> */}
          <p className='mt-[-70px] ml-[55px] text-[20px] text-white font-medium flex '><MdKeyboardArrowLeft className='text-[30px] text-white' />Daftar Tamu
            <Image
            src={LogoDaftarTamu}
            alt='DaftarTamu'
            className='ml-2'
            />
          </p>
          </Link>

          <Image
            src={Profile}
            alt='Navbar'
            width={35}
            style={{ marginTop: "-36px", marginLeft: "1270px" }}
          />

          <div style={{ display: 'flex', alignItems: 'center', marginTop: "-31px", marginLeft: "700px" }}>
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
                
              }}
            />
          </div>

          <p
            className='text-right text-lg'
            style={{ color: "white", marginRight: "120px", marginTop: "-32px" }}
          >
            admin loby
          </p>
        </div>

        <div className='mt-20'>
          <div className='mb-10 ml-36 flex'>
            <h1 className='font-semibold ' style={{fontSize:"17px"}}>{`${dayName}`}</h1>
            <p className='ml-4 font-medium' style={{fontSize:"17px"}}>{`${date}, ${monthName}, ${year}`}</p>
          </div>
          <table className='ml-36' style={{ width: "80%", borderCollapse: "collapse" }}>
            <thead style={{ position: "sticky", bottom: "0", backgroundColor: "#E3E2EC" }}>
              <tr className="border-[#EBEAF2] border-2 rounded-3xl">
                <th style={{ borderRadius: "20px 0px 0px 0px", padding: "25px", textAlign: "left" }}>Nama</th>
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
      </body>
    </>
  );
}

export default page;
