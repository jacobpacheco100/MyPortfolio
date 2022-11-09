import React from 'react'

const About = () => {
  return (
    <div className='mt-24 laptop:h-screen container flex flex-col items-center justify-center laptop:space-y-32'>
      <div className='text-left flex flex-col laptop:items-center laptop:flex-row  '>
        <div className='h-[100px] w-[100px] laptop:h-[165px] laptop:w-[165px] rounded-xl bg-text laptop:mr-8 bg-[url("/irl.jpeg")] bg-cover bg-center'></div>
        <div>
          <h1 className='text-xl text-dark mt-4 laptop:mt-0'>Who am I</h1>
          <p className=' text-text mt-4 pr-9 max-w-[700px]'>
            My name is Jacob, I have Extensive practice building complex
            front-end web applications featuring modern SEO practices using Next
            Js, as well as 3+ years of freelancing expirience on twitter
            reaching over 1200 followers creating, and improving hundreds of
            branding, and UI / UX designs for my clients.
          </p>
        </div>
      </div>

      <div className='mt-24 laptop:mt-0 text-left flex flex-col laptop:items-center laptop:text-center laptop:flex-row-reverse '>
        <div className='h-[100px] w-[100px] laptop:hidden rounded-xl bg-text laptop:ml-8'></div>
        <div>
          <h1 className='text-xl text-dark mt-4 laptop:mt-0'>
            Developer & Designer
          </h1>
          <p className=' text-text mt-4 pr-9 laptop:pr-0 max-w-[700px]'>
            While developing websites is my fortei, I also love to design as
            much as coding, It sort of a game to me when it comes to designing a
            user interphase, you want the design to be unique enough to catch
            the users attention, while keeping the application as easy to use as
            possible. Finding that balance is where the fun part.
          </p>
          <button className='btn-outline mt-8'>View My Designs</button>
        </div>
      </div>
    </div>
  )
}

export default About
