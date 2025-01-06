import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import Image from 'next/image'
import Stelkers from '../assets/svgs/StelkerAtas.svg'
import LogoTS from '../assets/images/LogoTS.png'
import icon from '../assets/images/icon.png'
import BgPutih from '../assets/images/BgPutih.png'
import BgForm from '../assets/svgs/Bgform.svg'
import DateIcon from '../assets/svgs/Tanggal.svg'
import BackIcon from '../assets/svgs/Kembali.svg'
import NameIcon from '../assets/svgs/Name.svg'
import CompanyIcon from '../assets/svgs/Company.svg'
import UnitIcon from '../assets/svgs/Unit.svg'
import NeedsIcon from '../assets/svgs/Needs.svg'
import IdentityIcon from '../assets/svgs/Identity.svg'
import VisitorIcon from '../assets/svgs/Visitor.svg'

function Page() {

  return (
    <>
      <Image
        src={Stelkers}
        alt="Stelkers"
        style={{ marginLeft: "330px" }}
      />
      <div style={{ position: 'absolute', marginTop: "-80px" }}>
        <Link href='/'>
          <Image
            src={BackIcon}
            alt="Back"
            style={{ position: "absolute", marginTop: "20px" }}
          />
        </Link>

        <Image
          src={BgForm}
          alt="Background Form"
          width={1600}
          height={1200}
        />

        <div className="flex justify-center items-center">
          <form action="" style={{ marginTop: "-870px" }} className="space-y-4 p-6 rounded-lg max-w-md w-full poppins-medium">
            <label className="block text-sm font-medium text-black">
              <Image src={NameIcon} alt="Name" />
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-black rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#d62b4e] shadow-sm placeholder-gray-500"
              placeholder="Enter Name"
            />

            <label className="block text-sm font-medium text-black">
              <Image src={DateIcon} alt="Date" />
            </label>
            <input
              type="date"
              name="date"
              className="w-full px-4 py-2 border border-black rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#d62b4e] shadow-sm placeholder-gray-500"
            />

            <label className="block text-sm font-medium text-black">
              <Image src={CompanyIcon} alt="Company" />
            </label>
            <input
              type="text"
              name="company"
              className="w-full px-4 py-2 border border-black rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#d62b4e] shadow-sm placeholder-gray-500"
              placeholder="Enter Company Name"
            />

            <label className="block text-sm font-medium text-black">
              <Image src={UnitIcon} alt="Unit" />
            </label>
            <select
              name="unit"
              className="w-full px-4 py-2 border border-black rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#d62b4e] shadow-sm placeholder-gray-500"
            >
              <option value="">Select Purpose</option>
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

            <label className="block text-sm font-medium text-black">
              <Image src={NeedsIcon} alt="Needs" />
            </label>
            <input
              type="text"
              name="needs"
              className="w-full px-4 py-2 border border-black rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#d62b4e] shadow-sm placeholder-gray-500"
              placeholder="Enter Purpose"
            />

            <label className="block text-sm font-medium text-black">
              <Image src={IdentityIcon} alt="Identity" />
            </label>
            <select
              name="identity"
              className="w-full px-4 py-2 border border-black rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#d62b4e] shadow-sm placeholder-gray-500"
            >
              <option value="">Select Identity</option>
              <option value="Employee ID">Employee ID</option>
              <option value="Tax ID (NPWP)">Tax ID (NPWP)</option>
              <option value="ID Card (KTP)">ID Card (KTP)</option>
            </select>

            <label className="block text-sm font-medium text-black">
              <Image src={VisitorIcon} alt="Visitor" />
            </label>
            <select
              name="total_visitors"
              className="w-full px-4 py-2 border border-black rounded-[16px] focus:outline-none focus:ring-2 focus:ring-[#d62b4e] shadow-sm placeholder-gray-500"
            >
              <option value="">Select Number of Visitors</option>
              <option value="1 Person">1 Person</option>
              <option value="2 People">2 People</option>
              <option value="3 People">3 People</option>
              <option value="4 People">4 People</option>
              <option value="5 People">5 People</option>
              <option value="5 - 10 People">5 - 10 People</option>
              <option value="More">More</option>
            </select>
          </form>

          <Link href="/closing" style={{ marginTop: "-130px", position: "absolute", alignItems: "center" }}>
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

      <Image
        src={Stelkers}
        alt="Stelkers"
        style={{ marginLeft: "330px", marginTop: "650px" }}
      />
    </>
  )
}

export default Page
