import React from 'react'
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown,faCricketBatBall} from "@fortawesome/free-solid-svg-icons";
import './Header.css'
function Header() {
  return (
    <div className='header'>
        <motion.div
         initial={{x:0}}
         animate={{x:100}}
         transition={{duration:1}}
        className='Left__header'>
        <img 
        src="https://crex.live/assets/logo/logo2.webp" alt="" />
        <h1>CREX</h1>
        </motion.div>

        <motion.div
         initial={{x:100}}
         animate={{x:-40}}
         transition={{duration:1}}
         className="right__header">
           <a href="">Home</a>
           <a className='series' href="">Series<FontAwesomeIcon icon={faCaretDown} /></a>
           <a href="">Fixtures</a>
           <a href="">🏏Stats Corner</a>
           <a href="">Rankings</a>
        </motion.div>
    </div>
  )
}

export default Header