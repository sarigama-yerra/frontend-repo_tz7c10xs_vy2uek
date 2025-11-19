import { useState } from 'react'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import ModelShowcase from './components/ModelShowcase'
import LiveDemo from './components/LiveDemo'
import UseCases from './components/UseCases'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'

function App() {
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero onOpenLogin={()=>setLoginOpen(true)} onStart={()=>{
        const el = document.getElementById('demo')
        if(el) el.scrollIntoView({ behavior: 'smooth' })
      }} />
      <HowItWorks />
      <ModelShowcase />
      <LiveDemo />
      <UseCases />
      <Footer />
      <LoginModal open={loginOpen} onClose={()=>setLoginOpen(false)} />
    </div>
  )
}

export default App
