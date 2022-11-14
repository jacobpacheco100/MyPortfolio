import react, { useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Index() {
  const { ref: main, inView: mainIsVisible } = useInView()

  return (
    <>
      <Navbar mainIsVisible={mainIsVisible} />
      <Hero />
      <About />
      <main ref={main}>
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
