"use client"

import React from 'react'
import styles from '../styles/styles'

const Download = () => {
  return (
    <div className='pt-24 overflow-hidden'>
    <div className='w-full bg-black relative '>

        <div className={`${styles.xPaddings} px-60 pt-32 pb-44 flex flex-col items-start justify-start text-left relative`}>

            <h1 className=' text-white font-semibold text-6xl w-[50%] leading-tight'>

                The Most Intelligent AI in your pocket

            </h1>

            <h3 className=' text-true-gray-100 font-normal text-2xl w-[50%] leading-normal py-6'>

                Be it everyday use or professional work. Just select the text and press AiFy.

            </h3>

            <div className=' absolute bottom-[14%] left-[11.7%]'>
                <img src='/play.png' alt='' width={258} />
            </div>

        </div>

        <div>
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