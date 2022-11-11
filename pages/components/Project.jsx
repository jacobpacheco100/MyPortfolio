import React from 'react'

const Project = (props) => {
  return (
    <a
      href={props.Surl}
      target='_blank'
      className={`${
        props.isBig ? 'h-[376px]' : 'h-[257px]'
      } w-full block  mb-5 break-inside-avoid relative group bg-white`}
    >
      {/* laptop:from-[#181339c3] laptop:to-[#28215736] */}
      {/* inner shadow ( overlay ) */}
      <div className='absolute laptop:hidden group-hover:block rounded-[20px] bg-gradient-to-t from-[#1813399f] to-[#18133923] laptop:from-[#181339c3] laptop:to-[#28215736]   w-full h-full'></div>

      {/* text group */}
      <div className='absolute laptop:opacity-0 bottom-5 left-5  group-hover:opacity-100 ease-in duration-150  text-white'>
        <h1 className='text-[20px] font-medium'>{props.name}</h1>
        <p className='text-xs mt-1 text-subWhite'>{props.stack}</p>
      </div>

      {/* image */}
      <img
        src={props.img}
        className='w-full h-full rounded-[20px] object-cover object-top border border-[#cbc8e172]'
      />
    </a>
  )
}

export default Project
