import { motion } from 'framer-motion'

export default function ModelShowcase(){
  return (
    <section id="models" className="relative bg-slate-950 py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-3xl md:text-5xl font-bold text-white text-center">AI Model Showcase</motion.h2>
        <p className="mt-3 text-center text-white/70 max-w-2xl mx-auto">Deep learning pipeline featuring CNNs with VGG16 transfer learning, augmentation and robust validation.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {title:'Convolutional Neural Networks',desc:'Feature extraction across scales to identify parasites and bacteria morphologies.'},
            {title:'VGG16 Transfer Learning',desc:'Leverages pretrained weights for faster convergence and better generalization.'},
            {title:'Augmentation & Regularization',desc:'Random rotations, flips, CLAHE; dropout and L2 for stable training.'},
          ].map((c,i)=>(
            <motion.div key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6, delay:.05*i}} className="relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_40%)]" />
              <div className="relative">
                <h3 className="text-white font-semibold">{c.title}</h3>
                <p className="mt-2 text-white/70 text-sm">{c.desc}</p>
                <div className="mt-6 h-24 w-full rounded-xl bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-emerald-500/20 ring-1 ring-white/10 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D-like Neural Sphere (CSS + motion) */}
        <div className="mt-12 flex justify-center">
          <motion.div
            initial={{opacity:0, scale:.9}}
            whileInView={{opacity:1, scale:1}}
            viewport={{once:true}}
            transition={{duration:.8}}
            className="relative h-64 w-64 rounded-full ring-1 ring-white/10"
            style={{
              background: 'radial-gradient(circle at 30% 30%, rgba(34,211,238,0.35), transparent 40%), radial-gradient(circle at 70% 70%, rgba(217,70,239,0.35), transparent 45%), radial-gradient(circle at 50% 50%, rgba(16,185,129,0.25), rgba(2,6,23,1) 60%)'
            }}
          >
            {/* Outer rotating glow */}
            <motion.div
              aria-hidden
              className="absolute inset-0 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
              style={{
                background: 'conic-gradient(from 0deg, rgba(34,211,238,0.25), rgba(217,70,239,0.25), rgba(16,185,129,0.25), rgba(59,130,246,0.25), rgba(34,211,238,0.25))'
              }}
            />

            {/* Inner core with subtle blur and depth */}
            <div className="absolute inset-6 rounded-full bg-slate-900/80 backdrop-blur-xl ring-1 ring-white/10" />

            {/* Orbiting particles */}
            {[0,1,2,3,4,5].map((i)=> (
              <motion.span
                key={i}
                className="absolute h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_2px_rgba(34,211,238,0.6)]"
                style={{ top: '50%', left: '50%', transformOrigin: '0 -110px' }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10 + i*2, ease: 'linear' }}
              />
            ))}

            {/* Label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/90 text-sm">3D Neural Sphere</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
