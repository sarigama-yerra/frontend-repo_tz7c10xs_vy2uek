import { motion } from 'framer-motion'

export default function ModelShowcase(){
  return (
    <section id="models" className="relative bg-slate-950 py-20 overflow-hidden">
      {/* Gradient glow backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[48rem] rounded-full bg-gradient-to-r from-fuchsia-500/20 via-sky-500/20 to-emerald-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
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
          Our pipeline normalizes and augments inputs, extracts features via a transfer‑learned backbone, and classifies through lightweight heads for responsive inference across environments.
        </motion.p>

        {/* Flowchart diagram */}
        <motion.div
          initial={{opacity:0, scale:0.98}}
          whileInView={{opacity:1, scale:1}}
          viewport={{once:true}}
          transition={{duration:0.7, ease:'easeOut'}}
          className="mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="text-sm text-white/60">Flow • High‑level pipeline</div>
            <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_4px_rgba(16,185,129,0.45)]" />
          </div>

          <div className="relative w-full overflow-x-auto">
            <div className="min-w-[860px]">
              <svg
                role="img"
                aria-label="End-to-end model pipeline flowchart"
                className="w-full h-auto"
                viewBox="0 0 1200 360"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9"/>
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.9"/>
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="6" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="5" orient="auto">
                    <polygon points="0 0, 10 5, 0 10" fill="#8b5cf6" />
                  </marker>
                </defs>

                {/* Stage helper */}
                { /* Boxes */ }
                {
                  [
                    {x:40,  y:80,  w:170, h:70, label:'Input', sub:'Microscope / Slide'},
                    {x:240, y:80,  w:200, h:70, label:'Preprocessing', sub:'Normalize • Denoise • Resize'},
                    {x:480, y:80,  w:210, h:70, label:'Augmentation', sub:'Color jitter • Flip • MixUp'},
                    {x:740, y:80,  w:220, h:70, label:'Feature Backbone', sub:'Transfer‑learned CNN/ViT'},
                    {x:1000,y:60,  w:160, h:60, label:'Calibrate', sub:'Temp. scaling'},
                  ].map((b, i) => (
                    <g key={i}>
                      <rect x={b.x} y={b.y} rx="14" ry="14" width={b.w} height={b.h} fill="url(#grad)" opacity="0.18" stroke="#a78bfa" strokeOpacity="0.35" />
                      <rect x={b.x+2} y={b.y+2} rx="12" ry="12" width={b.w-4} height={b.h-4} fill="#0f172a" fillOpacity="0.75" stroke="#ffffff" strokeOpacity="0.06" />
                      <text x={b.x + b.w/2} y={b.y + 32} textAnchor="middle" fontFamily="Inter, system-ui" fontSize="16" fill="#e5e7eb">{b.label}</text>
                      <text x={b.x + b.w/2} y={b.y + 52} textAnchor="middle" fontFamily="Inter, system-ui" fontSize="12" fill="#94a3b8">{b.sub}</text>
                    </g>
                  ))
                }

                {/* Classifier heads group */}
                <g>
                  <rect x="980" y="160" rx="16" ry="16" width="190" height="150" fill="#0f172a" opacity="0.75" stroke="#22d3ee" strokeOpacity="0.35" />
                  <text x="1075" y="182" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="13" fill="#a5b4fc">Classifier Heads</text>
                  <rect x="998" y="196" rx="10" ry="10" width="154" height="46" fill="#0b1220" stroke="#ffffff" strokeOpacity="0.08" />
                  <text x="1075" y="224" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="12" fill="#e2e8f0">Malaria vs Healthy</text>
                  <rect x="998" y="248" rx="10" ry="10" width="154" height="46" fill="#0b1220" stroke="#ffffff" strokeOpacity="0.08" />
                  <text x="1075" y="276" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="12" fill="#e2e8f0">Leptospirosis Risk</text>
                </g>

                {/* Arrows */}
                <g stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#arrow)">
                  <line x1="210" y1="115" x2="240" y2="115" />
                  <line x1="440" y1="115" x2="480" y2="115" />
                  <line x1="690" y1="115" x2="740" y2="115" />
                  <line x1="960" y1="115" x2="1000" y2="115" />
                  <line x1="960" y1="115" x2="980" y2="190" />
                </g>

                {/* Output nodes */}
                <g>
                  <circle cx="1140" cy="90" r="18" fill="#10b981" filter="url(#glow)" opacity="0.9" />
                  <text x="1140" y="94" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="11" fill="#052e22">OK</text>
                  <text x="1120" y="130" textAnchor="end" fontFamily="Inter, system-ui" fontSize="12" fill="#d1fae5">Confidence • Calibrated</text>
                </g>
              </svg>
            </div>
          </div>

          <p className="mt-4 text-xs text-white/60">
            Visual guide only. The live demo below uses the same stages before inference.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
