import { motion, AnimatePresence } from 'framer-motion'
import { Microscope, Activity, ShieldCheck, BrainCircuit, BarChart3 } from 'lucide-react'
import { useEffect, useState } from 'react'

const slides = [
  { icon: Microscope, title: 'Point-of-care Screening', desc: 'Fast smear analysis at triage with real-time feedback.' },
  { icon: Activity, title: 'Continuous Monitoring', desc: 'Track prevalence and hotspots across locations.' },
  { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Automated QC with drift alerts and audit trails.' },
  { icon: BrainCircuit, title: 'Model Governance', desc: 'Versioned models, explainability and approvals.' },
  { icon: BarChart3, title: 'Reporting & Insights', desc: 'Dashboards, accuracy curves and cohort analysis.' },
]

export default function CarouselUseCases(){
  const [i, setI] = useState(0)
  useEffect(()=>{
    const id = setInterval(()=> setI((x)=> (x+1)%slides.length), 4000)
    return ()=> clearInterval(id)
  },[])
  const S = slides[i]

  return (
    <section className="relative bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-3xl md:text-5xl font-bold text-white text-center">Use Cases</motion.h2>

        <div className="mt-10">
          <div className="relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-md">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10" />
            <AnimatePresence mode="wait">
              <motion.div key={i} initial={{opacity:0, x:40}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-40}} transition={{duration:.5}} className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <div className="flex items-center justify-center">
                  <S.icon className="h-24 w-24 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{S.title}</h3>
                  <p className="mt-3 text-white/75">{S.desc}</p>

                  <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                    {['HIPAA-ready','99.5% uptime','Batch & real-time','Role-based access'].map((b,bi)=> (
                      <div key={bi} className="rounded-lg bg-white/5 px-3 py-2 ring-1 ring-white/10 hover:ring-cyan-400/40 transition">{b}</div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {slides.map((_,idx)=> (
              <button key={idx} onClick={()=>setI(idx)} className={`h-2.5 w-2.5 rounded-full transition-all ${idx===i? 'bg-cyan-400 w-6':'bg-white/20 hover:bg-white/40'}`} aria-label={`Go to slide ${idx+1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
