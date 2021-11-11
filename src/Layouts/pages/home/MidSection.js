import React from "react"
import marvisImage from "../../../images/marvis-home.png"
export default function MidSection() {
  return (
    <>
      <div className='midsection' data-scroll>
        <div className='bio-img'>
          <div className='img-c'>
            <img src={marvisImage} alt='marvis' />
          </div>
        </div>
        <div className='bio-caption'>
          <p>
            I am Ighedosa Ofure Marvis, a 22-year-old product designer with
            4-year of experience with an affinity for solving human problems and
            promoting reliable solutions. <br />
            <br />
            <br /> After completing my design internship at UNICUS, I had the
            opportunity to work with several companies and clients. I am
            currently working remotely and would like to continue to grow in an
            efficient and creative environment (open for relocation).
          </p>
        </div>
      </div>
    </>
  )
}
