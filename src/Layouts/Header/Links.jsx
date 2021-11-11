import React from "react"
import { Link } from "react-router-dom"

export default function Links({
  name,
  route,
  cssClass,
  animateCss,
  handleClose,
}) {
  const links = document.querySelectorAll("#refresh")

  const animateIt = e => {
    const span = document.querySelector(".span")
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 15,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move

    span.style.transform = `translate(${xMove}px, ${yMove}px)`

    if (e.type === "mouseleave") span.style.transform = ""
  }
  links.forEach(b => b.addEventListener("mousemove", animateIt))
  links.forEach(b => b.addEventListener("mouseleave", animateIt))

  console.log(links)
  return (
    <Link className={cssClass} onClick={handleClose} id={animateCss} to={route}>
      <span className='span'>{name}</span>
    </Link>
  )
}
