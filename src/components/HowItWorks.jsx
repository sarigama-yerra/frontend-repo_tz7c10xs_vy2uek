import { motion } from 'framer-motion'
import { Beaker, Scan, FileBarChart2, Upload } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { icon: Upload, title: 'Upload Blood Sample', desc: 'Drag & drop slides or select images of blood smear samples.' },
    { icon: Scan, title: 'AI Microscopic Analysis', desc: 'Holographic scanning pipeline with deep feature extraction.' },
    { icon: Beaker, title: 'Detection', desc: 'Classifies Malaria or Leptospirosis with clinical precision.' },
    { icon: FileBarChart2, title: 'Accuracy Score + Report', desc: 'Get confidence scores, overlays and downloadable PDF.' },
  ]
  return (
    <section id="how" className="relative bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-3xl md:text-5xl font-bold text-white text-center">How it works</motion.h2>
        <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:.1,duration:.6}} className="mt-3 text-center text-white/70 max-w-2xl mx-auto">A streamlined diagnostic flow built for labs and clinicians.</motion.p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{opacity:0, x: i%2===0? -20:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:.6, delay:i*0.05}} className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md hover:ring-cyan-400/40">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/10 blur-2xl" />
              <s.icon className="h-8 w-8 text-cyan-300" />
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
