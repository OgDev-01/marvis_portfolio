import React from "react"
import { Link } from "react-router-dom"
import Links from "../../Header/Links"

export default function Cards({ src, cssClassName, para, h3, route }) {
  return (
    <>
      <div className='card'>
        <div className='card-img'>
          <img src={src} alt='' className={cssClassName} />
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
