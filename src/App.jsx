import React from 'react'
import Hero from './components/Hero'
import CTA from './components/CTA'
import Roadmap from './components/Roadmap'
import Socials from './components/Socials'
import News from './components/News'
import Footer from './components/Footer'

function App() {
  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100">
      {/* Subtle starry gradient backdrop */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.20),transparent_60%),radial-gradient(40%_40%_at_80%_20%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(30%_30%_at_20%_60%,rgba(34,197,94,0.10),transparent_60%)]" />

      <Hero />
      <CTA />
      <Roadmap />
      <Socials />
      <News />
      <Footer />
    </div>
  )
}

export default App
