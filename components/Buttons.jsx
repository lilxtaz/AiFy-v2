"use client"

import React from 'react'

const Buttons = (props) => {
  return (
    <div class='flex items-center justify-center font-extrabold'>
    <div class="flex items-center justify-center bg-transparent rounded">
        <button class={`relative inline-flex text-lg sm:text-[1.25rem] rounded-full font-medium tracking-wider border-2 border-transparent transition-colors outline-transparent focus:outline-transparent  disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-${props.textMain} bg-${props.main} hover:bg-gray-600 hover:text-${props.textHover} focus:border-[#B3B3FD] px-4 py-2 sm:py-3 sm:px-8`}>
            {props.text}
        </button>
    </div>
</div>
  )
}

export default Buttons


