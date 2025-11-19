import { useState } from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import LiveDemo from './components/LiveDemo'
import CarouselUseCases from './components/CarouselUseCases'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'

function App() {
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-white font-[inter]">
      <Hero onOpenLogin={()=>setLoginOpen(true)} onStart={()=>{
        const el = document.getElementById('demo')
        if(el) el.scrollIntoView({ behavior: 'smooth' })
      }} />
      <HowItWorks />
      <About />
      {/* Model Overview section removed per request */}
      <LiveDemo />
      <CarouselUseCases />
      <Testimonials />
      <Contact />
      <Footer />
      <LoginModal open={loginOpen} onClose={()=>setLoginOpen(false)} />
    </div>
  )
}

export default App
