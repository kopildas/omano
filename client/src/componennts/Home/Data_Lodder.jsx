import React from 'react'
import spinner from "../..//assets/svg/spinner.svg"
export default function Data_Lodder() {
  return (
    <div className="h-96 flex items-center justify-center inset-0">
      <div>
        <img src={spinner} alt="loading..." className="h-24 -mt-10"/>
      </div>
    </div>
  )
}
