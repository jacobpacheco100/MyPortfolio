import React from 'react'

const Project = ({ isBig }) => {
  return (
    <div
      className={`${
        isBig ? 'h-[376px]' : 'h-[257px]'
      } w-full bg-text rounded-[20px] mb-5 break-inside-avoid`}
    ></div>
  )
}

export default Project
