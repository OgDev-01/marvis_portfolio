import React from "react"
import { Link } from "react-router-dom"
import vector from "../../src/images/coming-soon-vect.png"

export default function ComingSoon() {
  return (
    <>
      <div className='coming-soon-wrap'>
        <div className='vector-img'>
          <img src={vector} alt='' />
        </div>
        <div className='coming-text'>
          <h2>Project coming soon</h2>
          <p>
            No need to worry , i could show you a sneek peek into this project
            tho. let me know if you wish to by clicking on the button below
          </p>
          <Link className='coming-link' to='/'>
            See more
          </Link>
        </div>
      </div>
    </>
  )
}
