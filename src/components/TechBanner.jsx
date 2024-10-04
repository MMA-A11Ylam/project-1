import React from 'react'
import { MARQUEE_TEXT } from '../constants'
import { motion } from 'framer-motion'
const TechBanner = () => {
  return (
    <>
    <div className='mt-4 w-full bg-lime-300 lg:py-6 text-black'>
        <div className='flex overflow-hidden whitespace-nowrap'>
            {[...Array(2)].map((index)=> (
                <motion.h1
                initial = {{x: "-100%"}}
                animate = {{x: "0%"}}
                transition={{repeat: Infinity, ease: "linear", duration: 20}}
                key={index} className='py-2 text-3xl font-bold leading-none tracking-tighter lg:text-7xl'>
                    {MARQUEE_TEXT}
                </motion.h1>
            ))}
        </div>
    </div>
    </>
  )
}

export default TechBanner