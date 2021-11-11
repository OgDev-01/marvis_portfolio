import React from "react"

import SelectedFlex from "./SelectedFlex"

export default function SelectedWorks() {
  return (
    <>
      <div className='selected-work-wrap' data-scroll>
        <div className='selected-title'>
          <h2>Selected Works</h2>
        </div>
        <SelectedFlex />
      </div>
    </>
  )
}
