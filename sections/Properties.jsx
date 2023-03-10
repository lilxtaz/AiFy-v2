"use client"

import React from 'react'
import Box from '../components/Box'
import styles from '../styles/styles'
import { useScroll, useTransform, motion, easeIn, easeOut } from 'framer-motion'

const Properties = () => {

    let { scrollYProgress } = useScroll();
    const x = useTransform(scrollYProgress, [0, 0.35], [600 , 0], easeOut)

  return (
    <div className={`${styles.xPaddings} flex px-64 flex-col items-center justify-center text-center bg-[url('../public/bg-props-test.png')] bg-fixed bg-center bg-cover overflow-hidden`}>

    <div className='flex flex-row items-center justify-center  py-20'>
        <h1 className=' text-text-color font-medium text-5xl '> 
            Wield the Power of AI
        </h1>
    </div>

    <div className='grid grid-cols-3 grid-rows-1 gap-44 pb-28 '>
            <motion.div style={{x}}>
            <Box title="GPT 3.5 Turbo" content="OpenAI's GPT-3.5-turbo model powers me that generates instant responses to user input." icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6b4473" className="w-8 h-8 hover:bounceOrig transition-all duration-1000">
                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" clipRule="evenodd" />
                </svg>
            }/>
            </motion.div>
            <motion.div style={{x}}>
            <Box title="Generate Responses" content="Select text anywhere and tap on 'AiFy' to generate intelligent responses to your queries." icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6b4473" className="w-8 h-8 hover:bounceOrig transition-all duration-1000">
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                </svg>
            }/>
            </motion.div>
            <motion.div style={{x}}>
            <Box title="Just chat with the AI" content="Or you can just ask questions from me and, I will try my best to answer them using the OpenAI model." icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6b4473" className="w-8 h-8 hover:bounceOrig transition-all duration-1000">
                <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z" clipRule="evenodd" />
                </svg>
            }/>
            </motion.div>
    </div>
        
    </div>
  )
}

export default Properties