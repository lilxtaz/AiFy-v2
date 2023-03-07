"use client"

import React from 'react'
import Card from '../components/Card'
import styles from '../styles/styles'
import {motion} from "framer-motion"

const Features = () => {
  return (
    <div className={`${styles.xPaddings} flex my-44 px-72 flex-col items-center justify-center text-center`}>
        <div className='flex flex-row items-center justify-center'>
        <h1 className=' text-teal-600 font-medium text-7xl pr-5 opacity-80'>ChatGPT 

        </h1>
        <img src="/chatgpt-icon.svg" className=' w-[7%] pr-4'/>
        <h1 className={` font-medium text-5xl  text-text-color `}>

            now at your fingertips

        </h1>
        </div>
        <div className='flex flex-row items-center justify-center text-text-lighter font-medium py-8 px-72'>

            <h3 className={` text-xl  leading-8`}>

            Need help with spelling, grammar, translation, or finding the right words?
            I'm always just a tap away, available anytime in all your apps.

            </h3>    

        </div>
        <div className='flex flex-row items-center justify-between my-52'>
            <div>
             <img src="/iphone.svg" className=' w-[300%]' style={{transform:'scale(3)'}}/> 
            </div>
            <div className=' grid grid-rows-3 grid-cols-1 gap-10 pl-[33rem]'>

                <motion.div
                
                initial={{ y: 100, x: -950 ,scale: 0.6, opacity: 0.6 }}
                whileInView={{ y: 0, x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}

                >
                    <Card title="Accessibilty" content="Easily accessible within any app" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#998da0" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                        </svg>
                    }/>
                    
                </motion.div>
                <motion.div
                
                initial={{ y: 0, x: -950 ,scale: 0.6, opacity: 0.6 }}
                whileInView={{ y: 0, x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 1.4}}
                viewport={{ once: true }}
                
                >
                    <Card title="Voice Control" content="Supports Voice Assistant" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#998da0" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                        </svg>
                    }/>
                </motion.div>
                <motion.div
                
                initial={{ y: -100, x: -950 ,scale: 0.6, opacity: 0.6 }}
                whileInView={{ y: 0, x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 2}}
                viewport={{ once: true }}

                >
                    <Card title="All languages" content="Available in every language" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#998da0" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                        </svg>
                    }/>
                </motion.div>



            </div>
            

        </div>
    </div>
  )
}

export default Features