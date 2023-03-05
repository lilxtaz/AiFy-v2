"use client"

import React from 'react'
import Started from '../components/Started'
import styles from '../styles/styles'
import '../styles/globals.css'

const Hero = () => {
  return (
    <div className={`${styles.xPaddings} flex`}>
        <img src="/phone.png" className='image'/>
        <div className={`px-96  flex flex-col z-10`}>
        <h1 className={`${styles.heroHeading} head `} >Be the Ultimate Rizzler with <br /> AiFy</h1>
        <div className=' absolute bottom-[8%] left-[33%]'>
        <Started text='Get Started'/>
        </div>
        </div>
    </div>
  )
}

export default Hero