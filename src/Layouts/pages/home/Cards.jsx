import React from "react"
import { Link } from "react-router-dom"

export default function Cards({ src, cssclassName, para, h3, route }) {
  return (
    <>
      <div className='card'>
        <div className='card-img'>
          <img src={src} alt='' className={cssclassName} />
        </div>
        <div className='card-text'>
          <div className='figure'>{h3}</div>
          <div className='descript'>{para} </div>
          <div className='details'>
            <Link to={route}>
              <img className='arrows' src='arrow.svg' alt='' />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
