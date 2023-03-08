"use client"

import React from 'react'


const Crossboard = (props) => {



  return (
    <div className={` bg-[url('../public/crossboard.png')] bg-blend-soft-light flex flex-row justify-around px-16 py-[2.5rem] rounded-2xl transition-all duration-150 w-full relative  overflow-hidden`} style={{ boxShadow: '0 5px 10px 0 rgb(10 10 10 / 5%)', borderColor: 'transparent'}}>

        <div className=' absolute w-[33.3%] left-48 -rotate-12 top-10'>

            <img src={props.img} />

        </div>

        <div className='flex flex-col justify-start items-start text-left py-24 pl-[47.5%]'>
            <div className='flex flex-row'>

            <h1 className='text-text-color font-semibold text-6xl pb-3'>{props.title}</h1>

            <div className='flex justify-center items-center text-center pl-3'>
                {props.icon}
            </div>

            </div>
            <p className=' text-text-color text-2xl font-medium pt-10 leading-loose pr-16'>{props.content}</p>
        </div>

        

    </div>
  )
}

export default Crossboard