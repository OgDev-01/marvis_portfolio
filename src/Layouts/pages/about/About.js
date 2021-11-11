import React from "react"
import { Link } from "react-router-dom"
import pImage from "../../../images/profile.png"
import starImg from "../../../images/star.png"
import { motion } from "framer-motion"
import Page from "../../../Components/Page"

const homeVariant = {
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
export default function About() {
  return (
    <Page title='About'>
      <motion.div
        variants={homeVariant}
        animate='visible'
        initial='hidden'
        exit='exit'
        className='about-wrapper'>
        <div className='name-head'>
          <h1>
            My name is <span>Marvis Ighedosa</span>
          </h1>
        </div>
        <div className='profile'>
          <div className='p-text'>
            <p>
              I am a Product Designer, IOS developer, Visual designer, Soon to
              be art director(lol). <br />
              <br />
              <br /> I love creating conversion-oriented user experiences and
              digital user interfaces. I am passionate about solving complex
              problems through data-driven processes that translate business
              objectives into solutions, with empathy for the user. <br />{" "}
              <br />
              <br /> Currently, I work as a visual designer at Conreal.ch and
              occasionally freelance with global clients as a via Upwork
            </p>
          </div>
          <div className='p-img'>
            <img src={pImage} alt='' />
          </div>
        </div>
        <div className='profile two'>
          <div className='star-img'>
            <img src={starImg} alt='' />

            <button className='resume-btn'>Download resume</button>
          </div>
          <div className='d-text'>
            <p>
              Interested in emerging technologies, e.g, blockchain, TV and game
              interface design/experience, motion graphics, voice interfaces,
              virtual and mixed reality, wearables, financial technology,
              assistive technology and cognitive psychology for UX. Involved in
              each phase of the design process from discovery, requirements
              analysis, visual design strategy & ideation, feature
              specification, process flow, user flows, wire-flows, prototyping
              to user testing and scaling. <br />
              <br />
              <br />
              🏠I am currently based in Lagos, Nigeria 🇳🇬, working with people
              and businesses all over the world 🌏
            </p>
          </div>
        </div>
      </motion.div>
    </Page>
  )
}
