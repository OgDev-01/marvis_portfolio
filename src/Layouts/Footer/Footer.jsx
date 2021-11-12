import { React, useState } from "react"
import Links from "../Header/Links"
import star from "../../images/last_star.png"
import useLocoScroll from "../../context/useLocoScroll"
export default function Footer({ navBar }) {
  const [inputValue, setInputValue] = useState(null)
  useLocoScroll(navBar)
  const updateField = e => {
    setInputValue(e.target.value)
  }
  return (
    <>
      <footer className='footer'>
        <div className='foot-top'>
          <div className='left-foot'>
            <div className='headings'>
              <h2>HAVE AN IDEA? TELL ME ABOUT IT</h2>
            </div>
            <div className='foot-social'>
              <a
                href=' https://dosamarvis@gmail.com'
                target='_blank'
                rel='noopener'
                className='m-link'>
                gmail
              </a>
              <a
                href=' https://www.linkedin.com/in/marvisdosa'
                target='_blank'
                rel='noopener'
                className='m-link'>
                Linkedin
              </a>
              <a
                href=' https://dribbble.com/marvisIghedosa'
                target='_blank'
                rel='noopener'
                className='m-link'>
                Dribbble
              </a>
              <a
                href=' https://www.instagram.com/marvisighedosa'
                target='_blank'
                rel='noopener'
                className='m-link'>
                Instagram
              </a>
            </div>
            <form action='#' method='post'>
              <input
                type='text'
                placeholder='Write a message'
                value={inputValue}
                onChange={updateField}
              />
              {inputValue && <button type='submit'>Send</button>}
            </form>
          </div>
          <div className='right-foot'>
            <div className='title'>
              <h2>ACKNOWLEDMENTS</h2>
            </div>
            <div className='para'>
              This portfolio was graciously designed by Marvis Ighedosa, and
              magically developed by Sunday Ogbonna.
            </div>
            <div className='star'>
              <img src={star} alt='' srcSet='' />
            </div>
          </div>
        </div>
        <div className='foot-bottom'>
          <div className='marvis'>marvisportfolio.2020</div>
          <div className='privacy'>
            <Links name={"privacy policy"} route='/' cssclass='m-link' />
          </div>
        </div>
      </footer>
    </>
  )
}
