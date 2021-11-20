import React from "react"
import { motion } from "framer-motion"

const landedVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
}
const imojiVariant = {
  hidden: {
    opacity: 0,
    scale: 0.2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
}

const captionVariant = {
  hidden: {
    opacity: 0,
    y: 110,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
}

const scrollToTarget = () => {
  document.getElementById("me").scrollIntoView()
}
export default function Landed() {
  return (
    <>
      <motion.div
        variants={landedVariant}
        initial='hidden'
        animate='visible'
        exit='exit'
        data-scroll
        className='landed'>
        <div className='caption'>
          <motion.h1 variants={captionVariant}>
            MARVIS <span>IGHEDOSA</span> PRODUCT DESIGNER X IOS ENGINEER{" "}
          </motion.h1>
        </div>
        <div className='description'>
          <motion.p variants={captionVariant}>
            You got a fantastic idea? Yes YOU, the digital product you about to
            build could be a million-dollar idea that solves a problem(s).
            <br />
            <br />
            <br /> You painted the picture and you have seen it all happening
            but don't know how to go about it? thats where I come in.
            <br />A good idea becomes a great idea when you let it out.
          </motion.p>
        </div>
        <motion.div variants={imojiVariant} className='imoji'></motion.div>
        <div className='scroll-down'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1, yoyo: Infinity }}
            className='circle'
            onClick={scrollToTarget}>
            <img className='down-arrow' src='arrow.svg' alt='' />
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
