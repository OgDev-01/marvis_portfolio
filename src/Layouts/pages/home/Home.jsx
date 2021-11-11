import React, { useEffect } from "react"
import Page from "../../../Components/Page"
import Landed from "./Landed"
import MidSection from "./MidSection"
import ScrollText from "./ScrollText"
import SelectedWorks from "./SelectedWorks"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/src/locomotive-scroll.scss"
import { motion } from "framer-motion"
import useLocoScroll from "../../../context/useLocoScroll"

// Variants
const homeVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 2, when: "beforeChildren" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.8 },
  },
}

export default function Home({ navBar }) {
  useLocoScroll(navBar)
  return (
    <Page title='Home'>
      <motion.div
        className='wrapper'
        variants={homeVariant}
        animate='visible'
        initial='hidden'
        exit='exit'
        data-scroll-container>
        <Landed />
        <MidSection />
        <ScrollText />
        <SelectedWorks />
      </motion.div>
    </Page>
  )
}
