"use client"

import React from 'react'

const Buttons = (props) => {
  return (
    <div class='flex items-center justify-center font-extrabold'>
    <div class="flex items-center justify-center bg-transparent rounded">
        <button class='relative inline-flex text-lg sm:text-[2rem] rounded-full font-medium tracking-wider border-2 border-transparent transition-colors outline-transparent focus:outline-transparent  disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-white bg-black hover:bg-true-gray-100 hover:text-white focus:bg-[#383838] px-4 py-2 sm:py-6 sm:px-12'>
            {props.text}
            <div className='pl-4 pb-[2px]'>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>



            </div>
        </button>
    </div>
</div>
  )
}

export default Buttons

