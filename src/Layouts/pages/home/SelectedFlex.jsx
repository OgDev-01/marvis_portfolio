import React from "react"
import useFetch from "../../../hooks/useFetch"
import imageOne from "../../../images/card-1.jpg"
import imageTwo from "../../../images/card-2.jpg"
import imageThree from "../../../images/card-3.jpg"
import imageFour from "../../../images/card-4.jpg"
import imageFive from "../../../images/card-5.jpg"
import Cards from "./Cards"
export default function SelectedFlex() {
  // const api_url = "https://strapibackend1.herokuapp.com/projects"
  // const { loading, error, data } = useFetch(api_url)
  // if (loading) return <div>Loading...</div>
  // if (error) return <div>Error :</div>
  // console.log(data)

  return (
    <>
      <div className='selected-flex'>
        <div className='select-one'>
          <Cards
            route='/project/jorge-investment'
            src={imageFour}
            cssclassName='work-card'
            h3='Jorge investment app'
            para='Private crypto investment mobile app'
          />
          <Cards
            route='/project/bella-food'
            src={imageOne}
            cssclassName='work-card'
            h3='Bella Foods'
            para='Bella foods is a fast convenient hamburger delivery application'
          />
          <Cards
            route='/coming-soon'
            src={imageThree}
            cssclassName='work-card'
            h3='Estate management system'
            para='An estate management and automation system for house owners or residents.'
          />
        </div>
        <div className='select-two'>
          <Cards
            route='/project/redxam'
            src={imageFive}
            cssclassName='work-card'
            h3='Redam website'
            para='Easy investment in ROI-guaranted stocks and cryptocurrencies'
          />
          <Cards
            route='/coming-soon'
            src={imageTwo}
            cssclassName='work-card'
            h3='DSBIR Tax Portal Dashboard'
            para='An enterprise SaaS solution that automates Tax recoveries and communication within business.'
          />
        </div>
      </div>
    </>
  )
}
