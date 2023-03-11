import React, { useState } from 'react'
import * as AiIcons from 'react-icons/ai';
import IconButton from '@mui/material/IconButton';
import { motion } from 'framer-motion';

const Popup = (props) => {

    const [newsColor, setnewsColor] = useState(false);

  return (props.trigger)&&

    <div className='popup'>
        <motion.div 
        
        initial={{ y: -500 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        
        className='popup-inner'>
        <div>
        <IconButton 
        onMouseEnter={() => setnewsColor(true)}
        onMouseLeave={() => setnewsColor(false)}
        onClick={()=>{props.setTrigger(false)}}
        color="tertiary"
        size="large"
        className='popup-close-btn'
        >

            <AiIcons.AiOutlineCloseCircle className='close-icon' style={{ color: newsColor ? 'black' : 'grey' }}/>

        </IconButton></div>
        {props.children}

        </motion.div>
    </div>
}

export default Popup