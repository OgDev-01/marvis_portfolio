import { React, useState } from "react"
import Links from "../Header/Links"
import star from "../../images/last_star.png"
export default function Footer() {
  const [inputValue, setInputValue] = useState()

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
              <Links
                name={"dosamarvis@gmail.com"}
                route='/'
                cssClass='m-link'
              />
              <Links name={"Linkedin"} route='/' cssClass='m-link' />
              <Links name={"Dribbble"} route='/' cssClass='m-link' />
              <Links name={"Instagram"} route='/' cssClass='m-link' />
            </div>
            <form action='#' method='post'>
              <input
                type='text'
                placeholder='Write a message'
                value={inputValue}
                onChange={updateField}
              />
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
              <img src={star} alt='' srcset='' />
            </div>
          </div>
        </div>
        <div className='foot-bottom'>
          <div className='marvis'>marvisportfolio.2020</div>
          <div className='privacy'>
            <Links name={"privacy policy"} route='/' cssClass='m-link' />
          </div>
        </div>
      </footer>
    </>
  )
}
