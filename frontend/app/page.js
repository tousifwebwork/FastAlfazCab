import React from 'react'
import Hero from './pages/Hero'
import Nav from './components/Nav'
import About from './about/About'
import Services from './services/Services'
import Galary from './galary/Galary'
import Contact from './contact/Contact'
import Marquee from './Marquee/Marquee'
import Footer from './components/Footer'

export const metadata = {
  title: "Cab in Goa | Reliable 24/7 Cab Service by Alfaz",
  description:
    "Looking for a trusted cab in Goa? Alfaz offers safe, comfortable rides for airport transfers, local trips, and outstation journeys — available 24/7.",
  alternates: { canonical: "https://yourdomain.com/" },
}

const page = () => {
  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: "#0C0C0C", overflowX: "clip" }}>
      {/* Schema markup — helps Google understand this is a local cab service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            "name": "Alfaz Cab Service",
            "areaServed": "Goa",
            "description": "Reliable cab in Goa for airport transfers, local rides, and outstation trips.",
            "telephone": "+91-7776069948"
          }),
        }}
      />

      <Nav />
      <main className="mt-10">
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