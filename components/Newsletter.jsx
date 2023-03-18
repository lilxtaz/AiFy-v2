"use client"

import React, {useState} from 'react'
import Popup from '../components/Popup'
import MailchimpFormContainer from '../components/MailchimpFormContainer'

const Buttons = (props) => {

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div class='flex items-center justify-center font-extrabold'>
    <div class="flex items-center justify-center bg-transparent rounded">
        <button onClick={()=> setButtonPopup(true)} class={`relative inline-flex text-lg sm:text-[1rem] rounded-full font-medium tracking-wider border-[1px] border-transparent transition-colors outline-transparent focus:outline-transparent  disabled:pointer-events-none disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed disabled:shadow-none
        text-${props.textMain} bg-${props.bgMain} hover:bg-gray-600 hover:text-${props.textHover} focus:border-[#FFFFFF] focus:bg-[#383838] px-4 py-2 sm:py-2 sm:px-6`}>

            <div className='pr-4 pb-[2px]'>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>

            </div>
            <div className=' pt-[0.18rem]'>
            {props.text}
            </div>
            
        </button>
    </div>
    <div >
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>

        <MailchimpFormContainer />

      </Popup>

    </div>
</div>
  )
}

export default Buttons

//black
//white
//gray-600
//white

