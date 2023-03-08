"use client"

import React from 'react'
import Started from '../components/Started'
import styles from '../styles/styles'

const Hero = () => {
  return (
    <div className={`${styles.xPaddings} flex `}>
        <img src="/phone_1.png" className='image'/>
        <div className={`  flex flex-col z-10`}>
        <h1 className={`${styles.heroHeading} head `} >Be the Ultimate Rizzler with <br /> AiFy</h1>
        <div className=' absolute bottom-[4%] left-[14%]'>
        <Started text='Get Started '/>
        </div>
        </div>
    </div>
  )
}

export default Hero