import React from "react"
import imageOne from "../../../images/card-1.jpg"
import imageTwo from "../../../images/card-2.jpg"
import imageThree from "../../../images/card-3.jpg"
import imageFour from "../../../images/card-4.jpg"
import imageFive from "../../../images/card-5.jpg"
import Cards from "./Cards"
export default function SelectedFlex() {
  return (
    <>
      <div className='selected-flex'>
        <div className='select-one'>
          <Cards
            route='/jorge-investment'
            src={imageFour}
            cssclassName='work-card'
            h3='Jorge investment IOS app'
            para='TRM is an enterprise SaaS solution that automates loan recoveries and communications within finance institutions.'
          />
          <Cards
            route='/bella-food'
            src={imageOne}
            cssclassName='work-card'
            h3='Bella Foods MObile app'
            para='TRM is an enterprise SaaS solution that automates loan recoveries and communications within finance institutions.'
          />
          <Cards
            route='/coming-soon'
            src={imageThree}
            cssclassName='work-card'
            h3='Estate management system'
            para='TRM is an enterprise SaaS solution that automates loan recoveries and communications within finance institutions.'
          />
        </div>
        <div className='select-two'>
          <Cards
            route='/redxam'
            src={imageFive}
            cssclassName='work-card'
            h3='Pardigm group investment'
            para='TRM is an enterprise SaaS solution that automates loan recoveries and communications within finance institutions.'
          />
          <Cards
            route='/coming-soon'
            src={imageTwo}
            cssclassName='work-card'
            h3='Pardigm group investment'
            para='TRM is an enterprise SaaS solution that automates loan recoveries and communications within finance institutions.'
          />
        </div>
      </div>
    </>
  )
}
