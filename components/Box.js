"use client"

import React from 'react'

const Box = (props) => {
  return (
    <div className=' bg-white flex flex-col justify-center px-8 py-[2.5rem] rounded-xl lg:w-72 2xl:w-96 h-[276px]' style={{ boxShadow: '0 5px 10px 0 rgb(10 10 10 / 10%)', borderColor: 'rgba(160, 32, 240, .2)', borderWidth: '0.6px'}}>
        
        <div className='flex w-full items-center justify-center pb-6'>

            {props.icon}

        </div>

        <div className='flex flex-col justify-center items-center text-center'>
            <h1 className=' text-text-color text-xl pb-3 font-medium '>{props.title}</h1>
            <p className=' text-text-color text-base opacity-70 pb-2'>{props.content}</p>
        </div>

            

    </div>
  )
}

export default Box