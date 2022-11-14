import React from 'react'
import { Link } from 'react-scroll'

// icons
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { SiUpwork } from 'react-icons/si'
import { TiSocialLinkedin } from 'react-icons/ti'

const Footer = () => {
  return (
    <div className='min-h-[525px] py-16 w-full hero-gradient flex items-center justify-center'>
      <div className='container flex flex-col items-center space-y-12'>
        <Link to='home' spy={true} smooth={true} offset={-200} duration={500}>
          <img
            src='/logo.svg'
            alt='logo'
            className='h-[48px] hover:cursor-pointer'
          />
        </Link>
        <p className='max-w-[275px] text-center text-subWhite text-sm'>
          Always learning, always building. I will not betray my dream. That is
          all.
        </p>

        {/* github */}
        <div className='flex flex-col space-y-6 tablet:flex-row tablet:space-y-0 tablet:space-x-6 text-[24px] text-white'>
          <a href='https://github.com/jacobpacheco100' target='_blank'>
            <div className=' h-14 w-14 border-2 border-white rounded-full flex items-center justify-center hover:text-primary hover:bg-white hvr'>
              <AiFillGithub />
            </div>
          </a>

          {/* linkedin */}
          <a
            href='https://www.linkedin.com/in/jacobpachecofrontenddev/'
            target='_blank'
          >
            <div className=' h-14 w-14 border-2 border-white rounded-full flex items-center justify-center hover:text-primary hover:bg-white hvr'>
              <TiSocialLinkedin />
            </div>
          </a>

          {/* twitter */}
          <a href='https://twitter.com/JDesignsArt' target='_blank'>
            <div className=' h-14 w-14 border-2 border-white rounded-full flex items-center justify-center hover:text-primary hover:bg-white hvr'>
              <AiOutlineTwitter />
            </div>
          </a>

          {/* upwork */}
          <a
            href='https://www.upwork.com/freelancers/~011c91af7d258b29fc'
            target='_blank'
          >
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
