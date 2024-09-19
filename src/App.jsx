import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/heroSection'
import Services from './Components/Services'
import Projects from './Components/Projects'
import Footer from './Components/footer'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <HeroSection />
      <Services />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
