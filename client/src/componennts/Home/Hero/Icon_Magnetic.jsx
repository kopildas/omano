import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'

export default function Icon_Magnetic({children}) {

const ref = useRef(null)
const [position,setPosition] = useState({x:0, y:0});

const mouseMove =(e) => {
    const { clientX, clientY } = e;
        const {height, width, left, top} = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width/2)
        const middleY = clientY - (top + height/2)
        setPosition({x: middleX, y: middleY})
}

const mouseLeave = ()=> {
    setPosition({x:0,y:0})
}
const {x,y} = position;

  return (
    <motion.div
    className='z-20'
    style={{position: "relative"}}
    ref={ref}
    onMouseMove={mouseMove}
    onMouseLeave={mouseLeave}
    animate={{x,y}}
    transition={{type: "spring", stiffness: 50, damping: 5, mass: 0.1}}>
      {children}
    </motion.div>
  )
}