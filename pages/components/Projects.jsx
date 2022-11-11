import React from 'react'
import Project from './Project'

import { BsArrowUpRightSquare } from 'react-icons/bs'

const Projects = () => {
  const data = [
    {
      name: 'Modivel Design Agency',
      stack: 'Next js, Tailwind CSS, 3D Models, Landing Page ',
      img: '/proj-previews/modivel.png',
      repoUrl: 'https://github.com/jacobpacheco100/modivel-design-agency',
      siteUrl: 'https://modivel.netlify.app/',
      isBig: true,
    },
    {
      name: 'BookMark Landing Page',
      stack: 'Javascript, Html, Bootstrap, Landing Page ',
      img: '/proj-previews/bookmark.jpg',
      siteUrl: 'https://jacobpacheco100.github.io/bookmark-landing-page/',
      isBig: false,
    },
    {
      name: 'Gradientology',
      stack: 'React js, Tailwind, JSON, Local Storage',
      img: '/proj-previews/gradientology.png',
      siteUrl: 'https://gradientology.netlify.app/',
      isBig: true,
    },
    {
      name: 'Cryptopia',
      stack: 'React js, Tailwind CSS, API, React Router ',
      img: '/proj-previews/cryptopia.png',
      siteUrl: 'https://cryptopia.netlify.app/',
      isBig: false,
    },
    {
      name: 'Skotcha Task Manager',
      stack: 'React js, Tailwind CSS, C.R.U.D, Local Storage ',
      img: '/proj-previews/skotcha.png',
      siteUrl: 'https://skotcha.netlify.app/',
      isBig: true,
    },
    {
      name: 'Game Show App',
      stack: 'Javascript, Html, CSS',
      img: '/proj-previews/gameshow.jpg',
      siteUrl: 'https://jacobpacheco100.github.io/GameShowApp/',
      isBig: false,
    },
  ]

  const displayProjects = data.map((proj) => {
    return (
      <Project
        isBig={proj.isBig}
        img={proj.img}
        name={proj.name}
        stack={proj.stack}
        Rurl={proj.repoUrl}
        Surl={proj.siteUrl}
      />
    )
  })

  return (
    <section className='grid-container '>
      <h1 className='heading mt-44 laptop:mt-20 mb-16 text-dark font-medium text-center'>
        Projects
      </h1>

      <div className='tablet:columns-2 gap-5'>{displayProjects}</div>

      <button className='absolute flex items-center mt-8 font-light border-l-4 pl-4 border-primary hover:underline hvr hover:border-l-8'>
        Visit My Resume <BsArrowUpRightSquare className='ml-2 ' />
      </button>
    </section>
  )
}

export default Projects
