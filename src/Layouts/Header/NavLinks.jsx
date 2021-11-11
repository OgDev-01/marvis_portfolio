import React from "react"
import Links from "./Links"
import CloseIcon from "@mui/icons-material/Close"
import { motion, AnimatePresence } from "framer-motion"

const menuVariant = {
  hidden: {
    opacity: 0,
    x: 600,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, type: "tween", stiffness: 90 },
  },
  exit: {
    opacity: 0,
    x: 600,
    transition: { duration: 0.5, type: "tween", stiffness: 90 },
  },
}
export default function NavLinks({ navBar, setNavBar }) {
  const handleClose = e => {
    setNavBar(false)
    document.body.style.overflow = "auto"
    document.body.style.touchAction = "auto"
  }
  return (
    <>
      <AnimatePresence>
        {navBar && (
          <motion.div
            variants={menuVariant}
            initial='hidden'
            animate='visible'
            exit='exit'
            className='nav-container'>
            <nav>
              <div className='close-btn' onClick={handleClose}>
                <span>
                  Close <CloseIcon className='ic'></CloseIcon>
                </span>
              </div>
              <div className='links'>
                <div className='social'>
                  <figure>Social</figure>
                  <div className='social-links'>
                    <Links
                      handleClose={handleClose}
                      name={"Facebook"}
                      route='/'
                      cssclass='s-link'
                    />
                    <Links
                      handleClose={handleClose}
                      name={"Behance"}
                      route='/'
                      cssclass='s-link'
                    />
                    <Links
                      handleClose={handleClose}
                      name={"Dribbble"}
                      route='/'
                      cssclass='s-link'
                    />
                    <Links
                      handleClose={handleClose}
                      name={"Instagram"}
                      route='/'
                      cssclass='s-link'
                    />
                    <Links
                      handleClose={handleClose}
                      name={"Twitter"}
                      route='/'
                      cssclass='s-link'
                    />
                  </div>
                </div>
                <div className='menu'>
                  <figure>Menu</figure>
                  <div className='menu-links'>
                    <Links
                      handleClose={handleClose}
                      name={"Home"}
                      route='/'
                      cssclass='m-link'
                    />
                    <Links
                      handleClose={handleClose}
                      name={"Work"}
                      route='/project'
                      cssclass='m-link'
                    />
                    <Links
                      handleClose={handleClose}
                      name={"About"}
                      route='/about'
                      cssclass='m-link'
                    />
                    <Links
                      handleClose={handleClose}
                      name={"Services"}
                      route='/services'
                      cssclass='m-link'
                    />
                    <Links
                      handleClose={handleClose}
                      name={"Contacts"}
                      route='/contact'
                      cssclass='m-link'
                    />
                  </div>
                </div>
              </div>
              <div className='gmail'>
                <figure>Social</figure>
                <div className='gmail-link'>
                  <Links
                    name={"dosamarvis@gmail.com"}
                    route='/'
                    cssclass='s-link'
                    animateCss='refresh'
                  />
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
