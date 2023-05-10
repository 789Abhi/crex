import React from 'react'
import { motion } from "framer-motion";

import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <motion.div
         initial={{x:0}}
         animate={{x:40}}
         transition={{duration:1}}
        className='footer__image'>
        <img 
        src="https://crex.live/assets/logo/logo2.webp" alt="" />
        <h2>CREX</h2>
        </motion.div>

        {/* footer Links */}
        <div className="footer__links">
         <div className="footer__left__links"> 
       <a href='' >About</a> <br/> <br/>
        <a href=''>Grievance</a>
         </div>
         <div className="footer__right__links">
         <a href='' >Privacy Policy</a> <br/> <br/>
        <a href=''>Terms and Conditions</a>
         </div>
        </div>
    </div>
  )
}

export default Footer