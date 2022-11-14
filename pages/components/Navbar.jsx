import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-scroll'

// media icons
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai'
import { SiUpwork } from 'react-icons/si'
import { TiSocialLinkedin } from 'react-icons/ti'

const Navbar = ({ mainIsVisible }) => {
  const [isMenu, setMenu] = useState(false)

  return (
    <section className='container z-50 h-24 fixed left-0 right-0 top-0 flex items-center justify-center tablet:justify-between'>
      <Link
        to='home'
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
        className='hover:cursor-pointer hidden tablet:block h-6 hover:cursor-pointer'
      >
        <svg
          width='74'
          height='28'
          viewBox='0 0 74 28'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M25.6736 28C27.1706 28 28.5448 27.1924 29.2539 25.897C31.5994 21.6152 36.71 12.2864 36.71 12.2864C36.71 12.2864 41.7024 21.3924 44.016 25.6136C44.7266 26.9076 46.1009 27.7152 47.5963 27.7152H47.5994C48.4903 27.7152 49.3145 27.2455 49.7706 26.4788C50.2251 25.7136 50.2418 24.7636 49.816 23.9818C45.6933 16.4197 36.7433 0 36.7433 0C36.7433 0 27.6266 16.7515 23.4948 24.3409C23.0782 25.1076 23.0948 26.0379 23.5418 26.7894C23.9872 27.5394 24.7963 28 25.6691 28C25.6721 28 25.6736 28 25.6736 28ZM12.6009 25.1424C16.5569 25.1424 20.1963 22.9742 22.0782 19.4924C25.6918 12.8076 31.2251 2.57121 31.2251 2.57121H2.54179C1.65846 2.57121 0.837245 3.0303 0.375124 3.78485C-0.0869976 4.53788 -0.124876 5.47727 0.276639 6.26667C0.276639 6.26667 0.276639 6.26818 0.278154 6.2697C0.905427 7.50455 2.19028 8.28636 3.59482 8.28636H21.7372H21.7357C20.7721 10.0485 18.9236 11.1424 16.9145 11.1424C14.1539 11.1424 10.1782 11.1424 7.19027 11.1424C6.30694 11.1424 5.48573 11.603 5.02361 12.3561C4.56149 13.1091 4.52361 14.05 4.92361 14.8379C4.92512 14.8394 4.92512 14.8394 4.92512 14.8409C5.55391 16.0773 6.83876 16.8576 8.24331 16.8576H17.0418C16.1736 18.4424 14.51 19.4288 12.7024 19.4288C12.3266 19.4288 11.9372 19.4288 11.5478 19.4288C10.6645 19.4288 9.84331 19.8879 9.38118 20.6424C8.91906 21.3955 8.88118 22.3349 9.28118 23.1227C9.2827 23.1242 9.2827 23.1258 9.2827 23.1273C9.91149 24.3621 11.1963 25.1424 12.6009 25.1424ZM61.1782 25.1424C57.2206 25.1424 53.5827 22.9742 51.7009 19.4924C48.0872 12.8076 42.5539 2.57121 42.5539 2.57121H71.2357C72.1206 2.57121 72.9418 3.0303 73.4039 3.78485C73.866 4.53788 73.9039 5.47727 73.5024 6.26515C73.5024 6.26667 73.5009 6.26818 73.5009 6.2697C72.8721 7.50455 71.5888 8.28636 70.1842 8.28636H52.0418C53.0069 10.0485 54.8554 11.1424 56.8645 11.1424C59.6251 11.1424 63.6009 11.1424 66.5888 11.1424C67.4721 11.1424 68.2933 11.603 68.7554 12.3561C69.2175 13.1091 69.2554 14.05 68.8539 14.8379C68.8539 14.8394 68.8539 14.8394 68.8524 14.8409C68.2251 16.0773 66.9403 16.8576 65.5357 16.8576H56.7372C56.7372 16.8576 56.7372 16.8576 56.7372 16.8591C57.6054 18.4439 59.2691 19.4288 61.0751 19.4288C61.4509 19.4288 61.8403 19.4288 62.2312 19.4288C63.1145 19.4288 63.9357 19.8879 64.3978 20.6424C64.86 21.3955 64.8978 22.3349 64.4963 23.1227C64.4963 23.1242 64.4963 23.1258 64.4948 23.1273C63.8675 24.3621 62.5827 25.1424 61.1782 25.1424Z'
            fill={mainIsVisible ? '#282157' : '#F1EFFF'}
            className=' ease-in-out duration-150 scale-75 outline-1 outline-dark '
          />
        </svg>
      </Link>

      <div className='relative'>
        <div
          onClick={() => setMenu((prev) => !prev)}
          className={`${
            mainIsVisible ? 'bg-[#e4e1f1] laptop:bg-white' : 'hover:bg-dark'
          } h-12 w-12 rounded-xl flex items-center justify-center  laptop:hover:bg-[#e4e1f1] hvr`}
        >
          <HiOutlineMenuAlt3
            className={`${
              mainIsVisible ? 'text-dark' : 'text-white laptop:text-dark'
            } text-4xl `}
          />
        </div>

        {/* ismenu */}
        <div
          className={`h-[629px] w-[259px] border border-text bg-white tablet:bg-[#f1efffe6] max-h-[80vh] fixed top-20 rounded-lg translate-x-[-45%]  tablet:translate-x-[-80%] flex flex-col items-center justify-center space-y-14 transition ${
            isMenu ? '' : 'translate-y-[-120%]'
          }`}
        >
          <ul className='text-center text-dark text-lg space-y-5 uppercase '>
            <li>
              <Link
                to='about'
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                className='hover:border-b-2 border-primary pb-2 ease-in-out duration-75'
                href='#'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='projects'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className='hover:border-b-2 border-primary pb-2 ease-in-out duration-75'
                href='#'
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to='designs'
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                className='hover:border-b-2 border-primary pb-2 ease-in-out duration-75'
                href='#'
              >
                Designs
              </Link>
            </li>
            <li>
              <a
                className='hover:border-b-2 border-primary pb-2 ease-in-out duration-75'
                target='_blank'
                href='https://docs.google.com/document/d/e/2PACX-1vTRNMzMdCh0hkffskcZqfckKrRKX9si9zImiYeFn1ie7VzyBrmdkmorMDZWH9PSWB5mYl1OCARq7kkV/pub'
              >
                Resume
              </a>
            </li>
            <li>
              <Link
                to='contact'
                spy={true}
                smooth={true}
                offset={-140}
                duration={500}
                className='hover:border-b-2 border-primary pb-2 ease-in-out duration-75'
                href='#'
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className='grid grid-cols-2 gap-4 text-[24px] text-dark'>
            <a href='https://github.com/jacobpacheco100' target='_blank'>
              <div className='h-14 w-14 border-2 border-dark rounded-full flex items-center justify-center hover:text-white hover:bg-primary hover:border-none hvr'>
                <AiFillGithub />
              </div>
            </a>

            {/* linkedin */}
            <a
              href='https://www.linkedin.com/in/jacobpachecofrontenddev/'
              target='_blank'
            >
              <div className='h-14 w-14 border-2 border-dark rounded-full flex items-center justify-center hover:text-white hover:bg-primary hover:border-none hvr'>
                <TiSocialLinkedin />
              </div>
            </a>

            {/* twitter */}
            <a href='https://twitter.com/JDesignsArt' target='_blank'>
              <div className='h-14 w-14 border-2 border-dark rounded-full flex items-center justify-center hover:text-white hover:bg-primary hover:border-none hvr'>
                <AiOutlineTwitter />
              </div>
            </a>

            {/* upwork */}
            <a
              href='https://www.upwork.com/freelancers/~011c91af7d258b29fc'
              target='_blank'
            >
              <div className='h-14 w-14 border-2 border-dark rounded-full flex items-center justify-center hover:text-white hover:bg-primary hover:border-none hvr'>
                <SiUpwork className='pt-1' />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Navbar
