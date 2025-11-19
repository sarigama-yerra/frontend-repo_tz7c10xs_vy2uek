import { motion } from 'framer-motion'

const cases = [
  {title:'Hospitals',desc:'Point-of-care decision support for triage and rapid screening.'},
  {title:'Diagnostic Labs',desc:'Batch processing, QA dashboards, and reporting pipelines.'},
  {title:'Universities',desc:'Teaching tooling, datasets, and research reproducibility.'},
]

export default function UseCases(){
  return (
    <section className="relative bg-slate-950 py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-3xl md:text-5xl font-bold text-white text-center">Use Cases & Benefits</motion.h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c,i)=> (
            <motion.div key={i} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6, delay:i*0.05}} className="relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md">
              <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-fuchsia-400/10 blur-2xl" />
              <h3 className="text-white font-semibold">{c.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
