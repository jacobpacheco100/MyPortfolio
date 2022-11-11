import React from 'react'

// icons
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { SiUpwork } from 'react-icons/si'
import { TiSocialLinkedin } from 'react-icons/ti'

const Footer = () => {
  return (
    <div className='min-h-[525px] py-16 w-full hero-gradient flex items-center justify-center'>
      <div className='container flex flex-col items-center space-y-12'>
        <a href='/'>
          <img src='/logo.svg' alt='logo' className='h-[48px]' />
        </a>
        <p className='max-w-[275px] text-center text-subWhite text-sm'>
          Always learning, always building. I will not betray my dream. That is
          all.
        </p>

        {/* github */}
        <div className='flex flex-col space-y-6 tablet:flex-row tablet:space-y-0 tablet:space-x-6 text-[24px] text-white'>
          <a href='#'>
            <div className=' h-14 w-14 border-2 border-white rounded-full flex items-center justify-center hover:text-primary hover:bg-white hvr'>
              <AiFillGithub />
            </div>
          </a>

          {/* linkedin */}
          <a href='https://www.linkedin.com/in/jacobpachecofrontenddev/'>
            <div className=' h-14 w-14 border-2 border-white rounded-full flex items-center justify-center hover:text-primary hover:bg-white hvr'>
              <TiSocialLinkedin />
            </div>
          </a>

          {/* twitter */}
          <a href='#'>
            <div className=' h-14 w-14 border-2 border-white rounded-full flex items-center justify-center hover:text-primary hover:bg-white hvr'>
              <AiOutlineTwitter />
            </div>
          </a>

          {/* upwork */}
          <a href='#'>
            <div className=' h-14 w-14 border-2 border-white rounded-full flex items-center justify-center hover:text-primary hover:bg-white hvr'>
              <SiUpwork className='pt-1' />
            </div>
          </a>
        </div>

        <p className='text-sm text-subWhite'>Handcrafted by me@2022</p>
      </div>
    </div>
  )
}

export default Footer
