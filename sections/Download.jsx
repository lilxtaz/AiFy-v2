"use client"

import Link from 'next/link'
import React from 'react'
import styles from '../styles/styles'

const Download = () => {
  return (
    <div className='pt-24 overflow-hidden'>
        <div className='w-full bg-black relative '>

            <div className={`px-[10vw] pt-32 pb-44 flex flex-col lg:items-start lg:justify-start sm:justify-center sm:items-center lg:text-left sm:text-center`}>

                <h1 className=' text-white font-semibold text-6xl lg:w-[50%] sm:w-[100%] leading-tight'>

                    The Most Intelligent AI in your pocket

                </h1>

                <h3 className=' text-true-gray-100 font-normal text-2xl lg:w-[50%] sm:w-[100%] leading-normal py-6'>

                    Be it everyday use or professional work. Just select the text and press AiFy.

                </h3>
                <Link href='https://play.google.com/store/apps/details?id=com.textaify&hl=en&gl=US' target='_blank'>
                <div className='ml-[-5%] cursor-pointer'>
                    <img src='/play.png' alt='' width={258} />
                </div>
                </Link>

            </div>

            <div className='sm:hidden lg:block' >
                
                <div className='absolute top-[42%] right-[-7%]  h-[64rem] w-[64rem] rounded-full bg-true-gray opacity-10'></div>
                <img
                    
                    src="/iphone.png" 
                    width={400}
                    height={400}

                    className='absolute top-[6%] right-[12.5%] rotate-6 scale-150'

                /> 
                

            </div>
            

        </div>
    </div>
  )
}

export default Download