import React from "react"
import Page from "../../../Components/Page"
// import Links from "../../Header/Links"
import ScrollText from "../home/ScrollText"
import SelectedFlex from "../home/SelectedFlex"
import { motion } from "framer-motion"

const projectsVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, when: "beforeChildren" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.8 },
  },
}

export default function Projects() {
  return (
    <Page title='Projects'>
      <motion.div
        variants={projectsVariant}
        initial='hidden'
        animate='visible'
        exit='exit'
        className='project-wrap-c'>
        <div className='figures'>
          <h1>View selected projects below</h1>
        </div>
        <ScrollText />
        <div className='selected-work-wrap'>
          <SelectedFlex />
        </div>
      </motion.div>
    </Page>
  )
}
