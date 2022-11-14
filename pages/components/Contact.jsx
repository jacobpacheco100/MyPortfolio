import React from 'react'

import { RiMailSendLine } from 'react-icons/ri'

const Contact = () => {
  return (
    <div id='contact' className='contact-container mt-[230px] mb-44'>
      <h1 className='heading text-center font-medium '>Send me a message!</h1>
      <p className='text-center mt-4 text-text text-sm laptop:text-md leading-7'>
        Get in touch or shoot me an email directly on <br />
        <a
          href='mailto:jacobpachecoofficial@gmail.com'
          className='text-primary font-medium hover:underline'
        >
          jacobpachecoofficial@gmail.com
        </a>
      </p>

      {/* form */}
      <form action='POST' className='mt-24'>
        <div className='tablet:flex justify-between'>
          <div className='w-full px-3'>
            <label className='label-styles' htmlFor='email'>
              Email Address
            </label>{' '}
            <br />
            <input
              className='input-styles'
              type='email'
              name='email'
              placeholder='Enter your email address'
            />
          </div>

          <div className='w-full px-3 mt-8 tablet:mt-0'>
            <label className='label-styles' htmlFor='name'>
              Full Name
            </label>{' '}
            <br />
            <input
              className='input-styles'
              type='text'
              name='name'
              placeholder='Enter your name'
            />
          </div>
        </div>
        <div className='w-full px-3 mt-8'>
          <label className='label-styles' htmlFor='email'>
            Your message
          </label>{' '}
          <br />
          <textarea
            className='input-styles laptop:max-h-[49px]'
            type='text'
            name='email'
            placeholder='Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?'
          />
        </div>

        <button className='btn-outline flex items-center mx-auto mt-16'>
          Send Message <RiMailSendLine className='ml-4 text-lg' />
        </button>
      </form>
    </div>
  )
}

export default Contact
