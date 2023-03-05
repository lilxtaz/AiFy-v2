"use client"


import Link from 'next/link'
import React from 'react'
import styles from '../styles/styles'
import Buttons from './Buttons'

const Navbar = () => {
  return (
    <nav className={`px-64 py-16 relative`}>

        <div className=" w-[50%] inset-0 gradient-01" />
            <div className={`${styles.innerWidth} m-auto flex justify-between items-center gap-8`}>
            <img
                src="/logo.svg"
                alt="logo"
                className={`${styles.iconsStyles} pb-3`} 
                width={96}
            />
            <div className="font-thin text-[24px] text-black flex items-center justify-center leading-7  ">

                <Link href='/black' className='mx-6 font-medium cursor-pointer'>Home</Link>
                <Link href='/white' className='mx-6 font-medium cursor-pointer'>About Us</Link>
                <Link href='/grey' className='mx-6 font-medium cursor-pointer'>Contact</Link>
            </div>
            <Buttons text='Get App'/>
            
            </div>

        

    </nav>
  )
}

export default Navbar