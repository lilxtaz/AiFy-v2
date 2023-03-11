"use client"

import React from 'react'
import Started from '../components/Started'
import styles from '../styles/styles'

const Hero = () => {
  return (
    <div className={`flex px-[10vw] md:py-[12vh] md:pb-[30vh] sm:pb-[30vh] sm:py-[0vh]`}>
        <div className={`flex flex-col z-10`}>
          <h1 className={`${styles.heroHeading} head sm:pb-[0vh]`} >Be the Ultimate Rizzler with <br /> AiFy</h1>
          <div className=' absolute md:bottom-[4%] md:left-[10%] sm:bottom-[10%]'>
            <Started text='Get Started'/>
          </div>
        </div>
        <img src="/phone_1.png" className='image lg:opacity-100 sm:opacity-50 lg:filter-none sm:filter blur-sm brightness-50'/>
    </div>
  )
}

export default Hero