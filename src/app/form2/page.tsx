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
          <Image src={KembaliMerah} alt="Back" style={{ position: "absolute", marginTop: "20px"}} />
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
                <Image src={NameIcon} alt="Name" />
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
                <Image src={DateIcon} alt="Keperluan" />
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
                <Image src={CompanyIcon} alt="Company" />
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
                <Image src={UnitIcon} alt="Unit" />
              </label>
              <select
                name="unit"
                className="w-96 p-4 border text-gray-500  border-black rounded-[17px] bg-[#ECECF2] focus:outline-none focus:ring-2 focus:ring-[#d62b4e] shadow-2xl placeholder-gray-500"
              >
                <option value="">KTP / NPWP / ID Pegawai / Karyawan</option>
                <option value="Principal">Principal</option>
                <option value="HR (Human Resources)">HR (Human Resources)</option>
                <option value="Finance/Administration">Finance/Administration</option> 
                <option value="Curriculum">Curriculum</option>
                <option value="Student Affairs">Student Affairs</option>
                <option value="Facilities (Facilities and Infrastructure)">Facilities (Facilities and Infrastructure)</option>
                <option value="Industry Relations">Industry Relations</option>
                <option value="Admissions">Admissions</option>
                <option value="Teacher">Teacher</option>
              </select>
            </div>

            <div style={{marginLeft:"-200px"}}>
              <label className="block text-sm font-medium text-black mb-2">
                <Image src={NeedsIcon} alt="Needs" />
              </label>
              <select
                name="unit"
                className="w-96 p-4 border text-gray-500  border-black rounded-[17px] bg-[#ECECF2] focus:outline-none focus:ring-2 focus:ring-[#d62b4e] shadow-2xl placeholder-gray-500"
              >
                <option value="">Unit</option>
                <option value="Principal">Principal</option>
                <option value="HR (Human Resources)">HR (Human Resources)</option>
                <option value="Finance/Administration">Finance/Administration</option> 
                <option value="Curriculum">Curriculum</option>
                <option value="Student Affairs">Student Affairs</option>
                <option value="Facilities (Facilities and Infrastructure)">Facilities (Facilities and Infrastructure)</option>
                <option value="Industry Relations">Industry Relations</option>
                <option value="Admissions">Admissions</option>
                <option value="Teacher">Teacher</option>
              </select>
            </div>

            <div >
              <label className="block text-sm font-medium text-black mb-2">
                <Image src={IdentityIcon} alt="Identity" />
              </label>
              <input
                type="text"
                name="needs"
                className="w-96 p-4 border  border-black rounded-[17px] bg-[#ECECF2] focus:outline-none focus:ring-2 focus:ring-[#d62b4e] shadow-2xl placeholder-gray-500"
                placeholder="08.."
              />
            </div>
          </form>

          <Link href="/closing" style={{ marginTop: "-250px", position: "absolute", alignItems: "center" }}>
            <button
              className="
                relative inline-block text-white font-sans font-bold text-lg border-none rounded-full
                px-8 py-3 cursor-pointer transition-all duration-300 ease-in-out outline-none text-center
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
