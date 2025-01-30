import React from 'react'
import Sidebar from '../assets/svgs/DashboardSideBar.svg'
import Image from 'next/image'

function page() {
  return (
    <>
    <Image
    src={Sidebar}
    alt='Sidebar'
    />
    
    </>
  )
}

export default page