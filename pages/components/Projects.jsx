import React from 'react'
import Project from './Project'

import { BsArrowUpRightSquare } from 'react-icons/bs'

const Projects = () => {
  return (
    <section className='grid-container mb-[200px]'>
      <h1 className='mt-44 laptop:mt-20 mb-16 text-dark font-medium text-xl text-center'>
        Projects
      </h1>

      <div className='tablet:columns-2 gap-5'>
        <Project isBig={true} />
        <Project />
        <Project isBig={true} />
        <Project />
        <Project isBig={true} />
        <Project />
      </div>

      <button className='absolute flex items-center mt-8 font-light border-l-4 pl-4 border-primary hover:underline hvr hover:border-l-8'>
        Visit My Resume <BsArrowUpRightSquare className='ml-2 ' />
      </button>
    </section>
  )
}

export default Projects
