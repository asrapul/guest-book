'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Stelkers from '../assets/svgs/StelkerAtas.svg';
import LogoTS from '../assets/images/LogoTS.png';
import icon from '../assets/images/icon.png';
import BgPutih from '../assets/images/BgPutih.png';
import BgForm from '../assets/svgs/gepeng.svg';
import DateIcon from '../assets/svgs/Tanggal.svg';
import BackIcon from '../assets/svgs/Kembali.svg';
import Link from 'next/link';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import NameIcon from '../assets/svgs/Name.svg';
import CompanyIcon from '../assets/svgs/Company.svg';
import UnitIcon from '../assets/svgs/Unit.svg';
import NeedsIcon from '../assets/svgs/Needs.svg';
import IdentityIcon from '../assets/svgs/Identity.svg';
import VisitorIcon from '../assets/svgs/Visitor.svg';
import KembaliMerah from '../assets/svgs/KembaliMerah.svg';

function Page() { 
  const [formData, setFormData] = useState({
    name: '',
    keperluan: '',
    company: '',
    identity: '',
    unit: '',
    needs: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid = Object.values(formData).every((value) => value !== '');

  return (
    <>
      <Image src={Stelkers} alt="Stelkers" style={{ marginLeft: "330px" }} />
      <div style={{ position: 'absolute', marginTop: "-80px" }}>
        <div className='flex absolute'>
        <Link href='/'>
          <h1 className='flex font-medium' style={{  marginTop: "20px",paddingLeft:"18px",color:"#AF1318"}} ><MdOutlineKeyboardArrowLeft className='mt-1' />  Kembali </h1>
        </Link>
        <p className='text-orange-700 text-xs font-semibold mt-5 ml-[240px]'>Note: <span className='text-[#09122C]'>Semua pertanyaan wajib diisi agar dapat dikumpul</span></p>
        </div>

        <Image src={BgForm} alt="Background Form" width={1600} height={800} style={{backgroundColor:"#E6E6E9"}} />
        <div className="flex justify-center items-center mt-[70px]">
          <form 
            action="" 
            style={{ marginTop: "-780px" }} 
            className="grid grid-cols-2 gap-4  rounded-lg max-w-md w-full poppins-medium"
          >

            <div style={{marginLeft:"-200px"}}>
              <label className="block text-sm font-medium text-black mb-2">
                Nama
              </label>
              <input
                type="text"
                name="name"
                className="w-96 p-4 border border-black rounded-[17px] bg-[#ECECF2] focus:outline-none focus:ring-2 focus:ring-[#d62b4e] shadow-2xl placeholder-gray-500"
                placeholder="Nama lengkap (KAPITAL)" 
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div >
              <label className="block text-sm font-medium text-black mb-2">
                Keperluan
              </label>
              <input
                type="text"
                name="keperluan"
                placeholder='Keperluan'
                className="w-96 p-4 border border-black rounded-[17px] bg-[#ECECF2] focus:outline-none focus:ring-2 focus:ring-[#d62b4e] shadow-2xl placeholder-gray-500"
                value={formData.keperluan}
                onChange={handleChange}
              />
            </div>

            <div style={{marginLeft:"-200px"}}>
              <label className="block text-sm font-medium text-black mb-2">
                Instansi
              </label>
              <input
                type="text"
                name="company"
                className="w-96 p-4 border border-black rounded-[17px] bg-[#ECECF2] focus:outline-none focus:ring-2 focus:ring-[#d62b4e] shadow-2xl placeholder-gray-500"
                placeholder="Instansi / Jabatan"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Kartu Identitas
              </label>
              <select
                name="identity"
                className="w-96 p-4 border  border-black rounded-[17px] bg-[#ECECF2] focus:outline-none focus:ring-2 focus:ring-[#d62b4e] shadow-2xl placeholder-gray-500"
                value={formData.identity}
                onChange={handleChange}
              >
                <option className='' value="">KTP / NPWP / ID Pegawai / Karyawan</option>
                <option value="KTP (Kartu Tanda Penduduk)">KTP (Kartu Tanda Penduduk)</option>
                <option value="NPWP (Nomor Pokok Wajib Pajak)">NPWP (Nomor Pokok Wajib Pajak)</option>
                <option value="ID Pegawai / Karyawan">ID Pegawai / Karyawan</option> 
              </select>
            </div>

            <div style={{marginLeft:"-200px"}}>
              <label className="block text-sm font-medium text-black mb-2">
                Tujuan (Unit)
              </label>
              <select
                name="unit"
                className="w-96 p-4 border border-black rounded-[17px] bg-[#ECECF2] focus:outline-none focus:ring-2 focus:ring-[#d62b4e] shadow-2xl placeholder-gray-500"
                value={formData.unit}
                onChange={handleChange}
              >
                <option className='' value="">Unit</option>
                <option value="Kepala Sekolah">Kepala Sekolah</option>
                <option value="SDM (Sumber Daya Manusia)">SDM (Sumber Daya Manusia)</option>
                <option value="Keuangan / Administrasi">Keuangan / Administrasi</option> 
                <option value="Kurikulum">Kurikulum</option>
                <option value="Kesiswaan">Kesiswaan</option>
                <option value="Sarpra (Sarana dan Prasarana)">Sarpra (Sarana dan Prasarana)</option>
                <option value="Hubin (Hubungan Industri)">Hubin (Hubungan Industri)</option>
                <option value="PPDB (Penerimaan Peserta Didik Baru)">PPDB (Penerimaan Peserta Didik Baru)</option>
                <option value="Guru">Guru</option>
              </select>
            </div>

            <div >
              <label className="block text-sm font-medium text-black mb-2">
                Nomor Telpon
              </label>
              <input
                type="text"
                name="needs"
                className="w-96 p-4 border  border-black rounded-[17px] bg-[#ECECF2] focus:outline-none focus:ring-2 focus:ring-[#d62b4e] shadow-2xl placeholder-gray-500"
                placeholder="08.."
                value={formData.needs}
                onChange={handleChange}
              />
            </div>
          </form>

          <Link href="/closing" style={{ marginTop: "-250px", position: "absolute", alignItems: "center", marginRight:"27px" }}>
            <button
              className={`relative inline-block mb-3 text-white font-sans font-bold text-lg border-none rounded-full px-10 py-2 cursor-pointer transition-all duration-300 hover:py-3 hover:px-12  hover:ease-in-out outline-none text-center bg-gradient-to-b from-[#BC2D32] to-[#BC2D32] shadow-md hover:shadow-lg hover:from-[#BC2D32] ml-[2px] hover:to-[#BC2D32] active:scale-95 active:shadow-sm ${isFormValid ? '' : 'opacity-50 cursor-not-allowed'}`}
              disabled={!isFormValid}
            >
              Submit
            </button>
          </Link>
        </div>
      </div>

      <Image src={Stelkers} alt="Stelkers" style={{ marginLeft: "330px", marginTop: "410px" }} />
    </>
  );
}

export default Page;
