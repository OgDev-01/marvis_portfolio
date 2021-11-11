import { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/src/locomotive-scroll.scss"
export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: 1,
      smoothMobile: false,
      resetNativeScroll: true,
    })

    return () => locoScroll.destroy()
  }, [start])
}
