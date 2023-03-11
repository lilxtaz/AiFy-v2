"use client"

import React from 'react'


const Card = (props) => {



  return (
    <div className=' bg-back-smoke flex flex-row justify-between px-[10%] py-[10%] rounded-lg hover:scale-110 transition-all duration-150 w-[100%] ' style={{ boxShadow: '0 5px 10px 0 rgb(10 10 10 / 5%)', borderColor: 'transparent'}}>

        <div className='flex flex-col justify-start items-start text-left'>
            <h1 className=' text-2xl pb-3'>{props.title}</h1>
            <p className=' text-text-lighter text-lg'>{props.content}</p>
        </div>

        <div className=' scale-150 flex items-center pl-16 opacity-50'>

            {props.icon}

        </div>

    </div>
  )
}

export default Card