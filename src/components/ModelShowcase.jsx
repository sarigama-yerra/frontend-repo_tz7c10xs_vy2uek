import { motion } from 'framer-motion'

export default function ModelShowcase(){
  return (
    <section id="models" className="relative bg-slate-950 py-20">
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{opacity:0,y:12}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.6}}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          End-to-end Architecture
        </motion.h2>

        <motion.p
          initial={{opacity:0,y:8}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.6, delay:.05}}
          className="mt-4 text-center text-white/80 max-w-3xl mx-auto"
        >
          Our pipeline normalizes and augments inputs, extracts features via a transfer-learned backbone, and classifies through lightweight heads for responsive inference across environments.
        </motion.p>

        <div className="mt-10 mx-auto max-w-3xl">
          <motion.h3
            initial={{opacity:0,y:6}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:.5}}
            className="text-lg md:text-xl font-semibold text-white"
          >
            Notes on training
          </motion.h3>
          <motion.p
            initial={{opacity:0,y:6}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:.5, delay:.05}}
            className="mt-3 text-white/80"
          >
            We monitor ROC‑AUC and F1, apply temperature scaling for probability calibration, and export a lightweight head for on‑device inference when needed. This section intentionally contains no images to keep focus on the methodology.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
