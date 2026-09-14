import React from 'react'
import Hero from './pages/Hero'
import Nav from './components/Nav'
import About from './about/About'
import Services from './services/Services'
import Galary from './galary/Galary'
import Contact from './contact/Contact'
import Marquee from './Marquee/Marquee'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className=" min-h-screen pt-20" style={{ backgroundColor: "#0C0C0C", overflowX: "clip" }}> 
      <Nav />
        <main className=' mt-10'>
          <Hero />
          <Marquee />
          <About />
          <Services />
          <Galary />
          <Contact />
          <Footer />
        </main>
    </div>
  )
}

export default page