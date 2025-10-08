import React, { useRef } from 'react'
import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import ProfileVIP from './components/ProfileVIP'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  // refs for smooth scrolling from badges/buttons
  const portfolioRef = useRef(null)
  const aboutRef = useRef(null)
  const vipRef = useRef(null)
  const contactRef = useRef(null)

  const scrollTo = (ref) => {
    if(ref && ref.current){
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      <Header onViewWork={() => scrollTo(portfolioRef)} onContact={() => scrollTo(contactRef)} />
      <main>
        <section ref={aboutRef}>
          <About onBadge52={() => scrollTo(vipRef)} onBadge76={() => scrollTo(aboutRef)} />
        </section>

        <section ref={portfolioRef}>
          <Portfolio />
        </section>

        <section>
          <Skills />
        </section>

        <section ref={vipRef}>
          <ProfileVIP />
        </section>

        <section ref={contactRef}>
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  )
}