import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='h-[777px] '>
        <div className='h-full w-full laptop:w-[60%]  hero-gradient bg-center '></div>
        <div className='h-full w-full laptop:w-[60%] absolute top-0 bg-dents bg-no-repeat bg-center overflow-hidden laptop:overflow-visible '>
          <img
            src='hero-logo.svg'
            alt=''
            className='absolute top-32 right-[-248px]'
          />
        </div>

        {/* absolute top-32 right-[-248px] */}

        {/* content */}
        <div className='container '>
          <div className='absolute top-44 tablet:top-36 laptop:top-52  tablet:px-[10%]'>
            <h1 className='text-white text-xlMobile tablet:text-xl font-bold'>
              Jacob Pacheco <br />
              Frontend Developer <br />
              UI/UX Designer
            </h1>
            <button className='btn-dark mt-8'>My Projects</button>
            <div className='pt-36 flex flex-col space-y-10 laptop:flex-row laptop:space-y-0 laptop:space-x-10'>
              <p className='max-w-[230px] text-white font-[200]'>
                Skilled designing UI and turning that design into code.
              </p>
              <p className='max-w-[230px] text-white font-[200]'>
                5+ years creating graphic designs for hundreds of clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
