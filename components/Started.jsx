"use client"

import React from 'react'

const Buttons = (props) => {
  return (
    <div class='flex items-center justify-center font-extrabold'>
    <div class="flex items-center justify-center bg-transparent rounded">
        <button class='relative inline-flex text-lg sm:text-[2rem] rounded-full font-medium tracking-wider border-2 border-transparent transition-colors outline-transparent focus:outline-transparent  disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-white bg-black hover:bg-slate-600 focus:border-[#B3B3FD] focus:bg-[#4040F2] px-4 py-2 sm:py-6 sm:px-12'>
            {props.text}
        </button>
    </div>
</div>
  )
}

export default Buttons

