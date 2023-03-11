"use client"

import React, { useState} from 'react'
import styles from '../styles/styles'
import Newsletter from '../components/Newsletter'
import Link from 'next/link'
import * as SiIcons from 'react-icons/si'
import * as AiIcons from 'react-icons/ai'


const Footer = () => {



  return (
    <div className={`${styles.xPaddings} flex flex-col pt-10 pb-6 lg:px-[10vw] sm:px-[5vw]  items-center justify-between text-center footer-gradient`}>

      <div className='flex lg:flex-row w-full sm:flex-col'>

        <div className=' lg:w-1/2 sm:w-[100%] text-left flex flex-col lg:items-start sm:items-center sm:justify-center lg:justify-start'>

          <h1 className='text-white text-5xl font-semibold my-10 lg:text-left sm:text-center'>Join the Future</h1>
          <div >

            <Newsletter text="Sign Up to our Newsletter"/>
            

          </div>

        </div>

        <div className='lg:w-1/2 sm:w-100'>

          <div className='flex lg:flex-row lg:justify-end sm:justify-center sm:flex-col items-center lg:mt-[8.4rem] sm:mt-[2vh]'>
            <div className='lg:block sm:hidden'>

              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-11 h-11 mr-2">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

            </div>
            <Link href='mailto:info@textaify.com' target='_blank'>
            <h1  className='text-white lg:text-4xl sm:text-lg sm:underline md:mb-0 sm:mb-[7vh]'>
              Contact Us Here
            </h1>
            </Link>

          </div>
        </div>

      </div>

      <div className='w-full'>

        <div className=' w-full flex flex-row justify-start items-center mt-14 '>

          <div className=' lg:grid grid-cols-3 grid-rows-1 gap-x-20 gap-y-5 sm:hidden'>

            <Link href='#'>

              <p className='text-white text-2xl font-normal'>Home</p>

            </Link>

            <Link href='#'>

              <p className='text-white text-2xl font-normal'>About</p>

            </Link>

            <Link href='#'>

              <p className='text-white text-2xl font-normal'>Contact</p>

            </Link>

          
          </div>
          <div className='w-full lg:flex flex-row lg:justify-end sm:justify-between lg:items-end sm:items-center sm:pl-9 mt-1 text-white'>

          <div className=' grid grid-cols-4 grid-rows-1 gap-x-4 gap-y-2'>

            <SiIcons.SiGmail className='text-white mt-[0.1rem]' size='24px'/>
            <AiIcons.AiOutlineTwitter className='text-white' size='28px' />
            <AiIcons.AiFillGithub className='text-white' size='28px' />
            <AiIcons.AiFillInstagram className='text-white' size='28px' />         

          </div>

          </div>
        </div>
        
        <hr className=' text-white h-[1px] w-full my-8' />

        <div className='w-full flex flex-row justify-around items-center mt-1 text-white'>
          <div className='w-1/2 flex justify-start items-center '>

            Copyright &#169; 2023

          </div>

          <div className='w-1/2 flex justify-end items-center '>

            All Rights Reserved &#8482;

          </div>

        </div>
      </div>

    </div>
  )
}

export default Footer