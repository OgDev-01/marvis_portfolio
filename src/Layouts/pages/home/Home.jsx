import React from "react"
import Page from "../../../Components/Page"
import Landed from "./Landed"
import MidSection from "./MidSection"
import ScrollText from "./ScrollText"
import SelectedWorks from "./SelectedWorks"
import { motion } from "framer-motion"
// import useLocoScroll from "../../../context/useLocoScroll"
import Loader from "../../../Components/Loader"

// Variants
const homeVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, when: "beforeChildren" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.8 },
  },
}

export default function Home({ navBar }) {
  return (
    <Page title='Home'>
      <motion.div
        className='wrapper'
        variants={homeVariant}
        animate='visible'
        initial='hidden'
        exit='exit'>
        {/* <Loader /> */}
        <Landed />
        <MidSection />
        <ScrollText />
        <SelectedWorks />
      </motion.div>
    </Page>
  )
}
