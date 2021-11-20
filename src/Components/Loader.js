import React from "react"
import { motion } from "framer-motion"
import Page from "./Page"

export default function Loader() {
  return (
    <div className='loader'>
      <motion.div
        initial={{
          scale: 1,
        }}
        animate={{ scale: [1.2, 1, 1.2, 1, 1.2] }}
        transition={{ duration: 4, repeat: true, ease: "linear" }}
        className='animate-img'>
        <img src='favicon-32x32.png' alt='' />
      </motion.div>
    </div>
  )
}
