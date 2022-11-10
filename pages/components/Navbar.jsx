import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

// media icons
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { SiUpwork } from 'react-icons/si'
import { TiSocialLinkedin } from 'react-icons/ti'

const Navbar = () => {
  const [isMenu, setMenu] = useState(false)

  return (
    <section className='container z-50 h-20 fixed left-0 right-0 top-0 flex items-center justify-center tablet:justify-between'>
      <img
        src='logo.svg'
        alt=''
        className='hidden tablet:block h-6 hover:cursor-pointer'
      />

      <div className='relative'>
        <div
          onClick={() => setMenu((prev) => !prev)}
          className='h-12 w-12 rounded-xl flex items-center justify-center hover:bg-[#e4e1f1] hvr'
        >
          <HiOutlineMenuAlt3 className=' text-4xl text-white laptop:text-dark' />
        </div>

        {/* ismenu */}
        <div
          className={`h-[629px] w-[259px] border border-text bg-white tablet:bg-[#f1efffb1] fixed top-20 rounded-lg translate-x-[-45%]  tablet:translate-x-[-80%] flex flex-col items-center justify-center space-y-14 transition ${
            isMenu ? '' : 'translate-y-[-120%]'
          }`}
        >
          <ul className='text-center text-dark text-lg space-y-5 uppercase '>
            <li>
              <a
                className='hover:border-b-2 border-primary pb-2 ease-in-out duration-75'
                href='#'
              >
                About
              </a>
            </li>
            <li>
              <a
                className='hover:border-b-2 border-primary pb-2 ease-in-out duration-75'
                href='#'
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className='hover:border-b-2 border-primary pb-2 ease-in-out duration-75'
                href='#'
              >
                Designs
              </a>
            </li>
            <li>
              <a
                className='hover:border-b-2 border-primary pb-2 ease-in-out duration-75'
                href='#'
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className='hover:border-b-2 border-primary pb-2 ease-in-out duration-75'
                href='#'
              >
                Contact
              </a>
            </li>
          </ul>

          <div className='grid grid-cols-2 gap-4 text-[24px] text-dark'>
            <div className=' h-14 w-14 border-2 border-dark rounded-full flex items-center justify-center hover:text-white hover:bg-primary hover:border-none hvr'>
              <AiFillGithub />
            </div>
            <div className=' h-14 w-14 border-2 border-dark rounded-full flex items-center justify-center hover:text-white hover:bg-primary hover:border-none hvr'>
              <TiSocialLinkedin />
            </div>
            <div className=' h-14 w-14 border-2 border-dark rounded-full flex items-center justify-center hover:text-white hover:bg-primary hover:border-none hvr'>
              <AiOutlineTwitter />
            </div>
            <div className=' h-14 w-14 border-2 border-dark rounded-full flex items-center justify-center hover:text-white hover:bg-primary hover:border-none hvr'>
              <SiUpwork className='pt-1' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
