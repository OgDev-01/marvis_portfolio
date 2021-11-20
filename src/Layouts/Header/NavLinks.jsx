import React from "react"
import Links from "./Links"
import CloseIcon from "@mui/icons-material/Close"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

const menuVariant = {
  hidden: {
    opacity: 0,
    x: 600,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, type: "tween", stiffness: 90 },
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
                    <a
                      onClick={handleClose}
                      href='https://www.linkedin.com/in/marvisdosa/'
                      target='_blank'
                      rel='noopener'
                      className='s-link'>
                      Linkedin
                    </a>
                    <a
                      onClick={handleClose}
                      href=' https://www.behance.net/MarvisIghedosa'
                      target='_blank'
                      rel='noopener'
                      className='s-link'>
                      Behance
                    </a>
                    <a
                      onClick={handleClose}
                      href=' https://dribbble.com/marvisIghedosa'
                      target='_blank'
                      rel='noopener'
                      className='s-link'>
                      Dribbble
                    </a>
                    <a
                      onClick={handleClose}
                      href='https://www.instagram.com/marvisighedosa'
                      target='_blank'
                      rel='noopener'
                      className='s-link'>
                      Instagram
                    </a>
                    <a
                      onClick={handleClose}
                      href=' https://www.twitter.com/marvisIghedosa'
                      target='_blank'
                      rel='noopener'
                      className='s-link'>
                      Twitter
                    </a>
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
                      route='/projects'
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
                  <a
                    onClick={handleClose}
                    href=' https://dosamarvis@gmail.com'
                    target='_blank'
                    rel='noopener'
                    className='s-link'>
                    dosamarvis@gmail.com
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
