import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../assets/svgs/Navbarstaf.svg'
import TelkomBulat from '../assets/svgs/TelkomBulat.svg'
import Icon from '../assets/images/IconSchool.png'
import Home from '../assets/svgs/HomeStaff.svg'
import Notif from '../assets/svgs/Lonceng.svg'
import Profile from '../assets/svgs/Profile.svg'
import Bulat from '../assets/svgs/BulatStaff.svg'
import Text from '../assets/svgs/TextLobbyStaf.svg'
import IconCard from '../assets/svgs/IconCard.svg'

function page() {
  return (
    <>
    <div className='absolute'>
        
        <Image
         src={Navbar}
         alt='Navbar'
         width={1536}
         style={{marginTop:"-46px"}}
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

        <Image
         src={Notif}
         alt='Navbar'
        width={30}
         style={{marginTop:"-30px",marginLeft:"1200px",}}
        />
        <p className='text-right text-lg ' style={{color:"white",marginRight:"125px",marginTop:"-31px"}}>admin loby</p>
    </div>
        <Image
         src={TelkomBulat}
         alt='Telkom Bulat'
         style={{marginTop:"47px",marginLeft:"758px"}}
         
        />
      
        <Image
         src={Bulat}
         alt='Bulat'
         style={{marginTop:"-550px"}}

        />

        <Image
         src={Text}
         alt='Text'
         width={600}
         style={{marginTop:"-275px",marginLeft:"100px"}}
        />

        <Link href="/daftarstaf" style={{position:"absolute"}}>
            <button
              className="
                appearance-none rounded-[16px]
                cursor-pointer font-sans font-semibold
                px-9 py-3 text-center outline-none 
                transition duration-300 ease-[cubic-bezier(.23,1,.32,1)] 
                disabled:pointer-events-none 
                hover:shadow-white hover:-translate-y-1 bg-[#D9D9D9]
                active:shadow-none active:translate-y-0 flex items-center text-xl
              "
              style={{marginLeft:"90px",marginTop:"63px"}}
            >
              
              Daftar Tamu
              <Image
                src={IconCard}
                alt="Logo Dokumen"
                className='ml-5 mr-[-15px]'
                  
              />
            </button>
            </Link>
    </>
  )
}

export default page