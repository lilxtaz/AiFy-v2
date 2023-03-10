"use client"

import React from 'react'
import Card from '../components/Card'
import styles from '../styles/styles'
import {motion} from "framer-motion"

const Features = () => {
  return (
    <div className={`${styles.xPaddings} flex mt-44 px-72 flex-col items-center justify-center text-center`}>
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
             <motion.img
             initial={{ opacity: 0.3 }}
             animate={{opacity: 1}}
             transition={{duration: 0.6}}
             
            

             priority={true}
             src="/iphone.png" style={{transform:'scale(1.3)'}} 
             className='pl-4'
             width={400}
             height={400}

             /> 
            </div>
            <div className=' grid grid-rows-3 grid-cols-1 gap-10 pl-[24rem]'>

                <motion.div
                
                layout
                initial={{ y: 100, x: -850 ,scale: 0.6, opacity: 0.5 }}
                whileInView={{ y: 0, x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}


                >
                    <Card title="Accessibilty" content="I am available in any app. Just highlight the text and select me as the pop-up." icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#998da0" class="w-6 h-6 hover:bounceOrig transition-all">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                        </svg>
                    }/>
                    
                </motion.div>
                <motion.div
                
                layout
                initial={{ y: 0, x: -850 ,scale: 0.6, opacity: 0.5 }}
                whileInView={{ y: 0, x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 1.4}}
                viewport={{ once: true }}

                
                >
                    <Card title="Voice Control" content="I also have a voice and can serve as your assistant." icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#998da0" className="w-6 h-6 hover:bounceOrig transition-all duration-1000">
                        <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                        <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                        </svg>
                    }/>
                </motion.div>
                <motion.div
                
                layout
                initial={{ y: -100, x: -850 ,scale: 0.6, opacity: 0.5 }}
                whileInView={{ y: 0, x: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 1.6}}
                viewport={{ once: true }}


                >
                    <Card title="Every language" content="I can chat with you in any language. Just change my default language in the settings tab." icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#998da0" className="w-6 h-6 hover:bounceOrig transition-all duration-1000">
                        <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" />
                        </svg>
                    }/>
                </motion.div>



            </div>
            

        </div>
    </div>
  )
}

export default Features