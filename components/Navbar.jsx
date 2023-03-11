"use client"


import Link from 'next/link'
import React from 'react'
import styles from '../styles/styles'
import Buttons from './Buttons'

const Navbar = () => {
  return (
    <nav className={`flex lg:justify-between items-center py-[2vh] sm:justify-center 2xl:pr-[15%] lg:pr-40 md:pr-0 sm:pr-0`}>

        <div className="gradient-01" />
              <img
                  src="/logo.svg"
                  alt="logo"
                  className={`${styles.iconsStyles}`} 
                  width={96}
              />
            <div className="font-thin text-[20px] text-white sm:hidden md:hidden lg:block">

                <Link href='/black' className='mx-6 font-medium cursor-pointer'>Home</Link>
                <Link href='/white' className='mx-6 font-medium cursor-pointer'>About</Link>
                <Link href='/grey' className='mx-6 font-medium cursor-pointer'>Contact</Link>
            </div>
            <div className='sm:hidden md:hidden lg:block'>
              <Link href='https://play.google.com/store/apps/details?id=com.textaify&hl=en&gl=US' target='_blank'>
              <Buttons text='Get App'/>
              </Link>
            </div>
    </nav>
  )
}

export default Navbar