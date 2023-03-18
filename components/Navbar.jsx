"use client"


import Link from 'next/link'
import React from 'react'
import styles from '../styles/styles'
import Buttons from './Buttons'

const Navbar = (props) => {
  return (
    <nav className={`flex lg:justify-between items-center py-[2vh] sm:justify-center 2xl:pr-[15%] lg:pr-40 md:pr-0 sm:pr-0`}>

        <div className="gradient-01" />
              <img
                  src={props.src}
                  alt="logo"
                  className={`${styles.iconsStyles}`} 
                  width={96}
              />
            <div className={`font-thin text-[20px] ${props.color} sm:hidden md:hidden lg:block`}>

                <Link href='/' className='mx-6 font-medium cursor-pointer'>Home</Link>
                <Link href='/blog' className='mx-6 font-medium cursor-pointer'>Blog</Link>
                <Link href='mailto:info@textaify.com' className='mx-6 font-medium cursor-pointer'>Contact</Link>
            </div>
            <div className='sm:hidden md:hidden lg:block'>
              <Link href='https://play.google.com/store/apps/details?id=com.textaify&hl=en&gl=US' target='_blank'>
              <Buttons text='Get App' main={props.main} hover={props.hover} textMain={props.textMain} textHover={props.textHover} />
              </Link>
            </div>
    </nav>
  )
}

export default Navbar