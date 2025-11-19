import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'
import { useEffect, useState } from 'react'

const testimonials = [
  {
    quote: 'The AI cut our diagnostic turnaround time by 60% while improving accuracy. It\'s become an essential part of triage.',
    name: 'Dr. A. Mensah',
    role: 'Head of Diagnostics, Accra General',
  },
  {
    quote: 'Seamless workflow integration and clear confidence metrics. Our lab team trusts the outputs daily.',
    name: 'Priya Sharma',
    role: 'Lab Manager, Bangalore BioLabs',
  },
  {
    quote: 'A beautiful UX with serious science under the hood. Training reproducibility made our research so much faster.',
    name: 'Prof. L. Almeida',
    role: 'Biomedical AI, Universidade do Porto',
  },
]

export default function Testimonials(){
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    const id = setInterval(()=>{
      setIndex((i)=> (i+1)%testimonials.length)
    }, 4500)
    return ()=> clearInterval(id)
  },[])

  const t = testimonials[index]

  return (
    <section className="relative bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-3xl md:text-5xl font-bold text-white">Trusted by clinicians and researchers</motion.h2>

        <div className="mt-10 relative mx-auto max-w-3xl">
          <div className="mb-4 flex justify-center gap-1 text-cyan-300">
            {Array.from({length:5}).map((_,i)=>(<Star key={i} className="h-5 w-5 fill-cyan-300/30" />))}
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-white/5 p-8 ring-1 ring-white/10 backdrop-blur-md">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{opacity:0, y:10}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0, y:-10}}
                transition={{duration:.5}}
                className="text-white/90 text-lg leading-relaxed"
              >
                “{t.quote}”
                <footer className="mt-6 text-sm text-white/70">
                  <span className="font-semibold text-white">{t.name}</span>
                  <span className="mx-2">•</span>
                  <span>{t.role}</span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-6 flex items-center justify-center gap-2">
              {testimonials.map((_,i)=> (
                <button key={i} onClick={()=>setIndex(i)} className={`h-2.5 w-2.5 rounded-full transition-all ${i===index? 'bg-cyan-400 w-6':'bg-white/20 hover:bg-white/40'}`} aria-label={`Go to testimonial ${i+1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
