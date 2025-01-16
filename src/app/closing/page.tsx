import React from 'react'
import Image from 'next/image'
import TelkomSchool from '../assets/svgs/TelkomSchool.svg'
import Stelkers from '../assets/svgs/StelkerAtas.svg'
import Link from 'next/link'
import BgClosing from '../assets/images/BgClosing.png'
import BgGradasi from '../assets/svgs/BgGradasi.svg'
import ThankYou from '../assets/svgs/ThankYou.svg'
import { FaArrowLeftLong } from "react-icons/fa6";

function page() {
  return (
    <>
    <div style={{position:"absolute",marginTop:"-48px"}}>

    <Image 
    src={TelkomSchool}
    alt='TelkomSchool'
    style={{position:'absolute',marginTop:"-30px",marginLeft:"20px"}}
        />

    <Image 
    src={BgGradasi}
    alt='Background'
    style={{marginTop:"-193px",width:"2000px"}}
    />
    
    <Image 
    src={Stelkers}
    alt='Stelkers'
    style={{position:"absolute",marginTop:"-530px",width:"2000px"}}
    />


    </div>


    

    <Image 
    src={ThankYou}
    alt='Thank You'
    style={{marginTop:"180px",position:"absolute",marginLeft:"350px"}}
        />

    <Link href="/">
            <button
              className="
                appearance-none bg-transparent  rounded-full
                cursor-pointer font-sans font-semibold text-base 
                px-9 py-2 text-center outline-none 
                transition duration-300 ease-[cubic-bezier(.23,1,.32,1)] 
                disabled:pointer-events-none 
                hover:text-merah-telkom  hover:shadow-white hover:-translate-y-1 bg-white
                active:shadow-none active:translate-y-0 flex items-center
              "
              style={{marginTop:"290px",position:"absolute",marginLeft:"670px"}}
            >
  
             <FaArrowLeftLong className='mr-3 ml-[-13px]'/> Terima Kasih
            </button>
            </Link>

      <Image 
    src={BgClosing}
    alt='Background'
    style={{marginTop:"115px"}}
    />
    </>
  )
}

export default page