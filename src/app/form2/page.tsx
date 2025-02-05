import React from 'react';
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
import KembaliMerah from '../assets/svgs/KembaliMerah.svg'

function Page() { 
  return (
    <>
      <Image src={Stelkers} alt="Stelkers" style={{ marginLeft: "330px" }} />
      <div style={{ position: 'absolute', marginTop: "-80px" }}>
        <Link href='/'>
          <h1 className='flex font-medium' style={{ position: "absolute", marginTop: "20px",paddingLeft:"18px",color:"#AF1318"}} ><MdOutlineKeyboardArrowLeft className='mt-1' />  Kembali </h1>
        </Link>

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
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Kartu Identitas
              </label>
              <select
                name="Kartu Identitas"
                className="w-96 p-4 border  border-black rounded-[17px] bg-[#ECECF2] focus:outline-none focus:ring-2 focus:ring-[#d62b4e] shadow-2xl placeholder-gray-500"
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
              />
            </div>
          </form>

          <Link href="/closing" style={{ marginTop: "-250px", position: "absolute", alignItems: "center", marginRight:"27px" }}>
            <button
              className="
                relative inline-block text-white font-sans font-bold text-lg border-none rounded-full
                px-10 py-2 cursor-pointer transition-all duration-300 hover:py-3 hover:px-12  hover:ease-in-out outline-none text-center
                bg-gradient-to-b from-[#BC2D32] to-[#BC2D32] shadow-md hover:shadow-lg hover:from-[#BC2D32] hover:to-[#BC2D32]
                active:scale-95 active:shadow-sm 
              "
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
