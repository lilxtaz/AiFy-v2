"use client"

import React from 'react'

const Props = (props) => {
  return (
    <div class="flex items-center">
        <div class="group relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <div class="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
            <div class="relative rounded-[15px] bg-white p-6">
            <div class="space-y-4">
                <div className='relative'>
                <img src="light.svg" alt="" className=' flex justify-center items-center text-center'/>
                <div className=' absolute left-[38.5%] top-[27%] translate-x-1/2 translate-y-1/2 '>

                {props.icon}


                </div>
                </div>
                <p class="text-lg font-semibold text-text-color  hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300 ease-in-out">{props.title}</p>
                <p class="font-md text-text-lighter">{props.content}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Props

