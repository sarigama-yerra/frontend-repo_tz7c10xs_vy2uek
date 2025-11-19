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
                {/* Visual placeholder for each model card */}
                <div className="mt-6 h-24 w-full rounded-xl bg-gradient-to-r from-cyan-500/20 via-fuchsia-500/20 to-emerald-500/20 ring-1 ring-white/10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture banner (replaces 3D Neural Sphere) */}
        <div className="mt-12 overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur-md">
          <div className="relative">
            {/* soft gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(217,70,239,0.12),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.12),transparent_50%)]" />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12">
                <h3 className="text-white text-xl md:text-2xl font-semibold">End-to-end Architecture</h3>
                <p className="mt-2 text-white/70 text-sm md:text-base">Input images are normalized and augmented, passed through VGG16 backbone with fine-tuned top layers, then classified via fully-connected heads. Metrics include F1 and AUC for robust evaluation.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Preprocessing","VGG16","GlobalAvgPool","Dense","Softmax"].map((chip,i)=> (
                    <span key={i} className="px-3 py-1 rounded-full text-xs md:text-sm bg-slate-900/60 text-white/80 ring-1 ring-white/10">{chip}</span>
                  ))}
                </div>
              </div>
              {/* Inline SVG diagram as an illustrative image */}
              <div className="p-6 md:p-10">
                <motion.svg
                  initial={{opacity:0, y:8}}
                  whileInView={{opacity:1, y:0}}
                  viewport={{once:true}}
                  transition={{duration:.6}}
                  viewBox="0 0 600 320"
                  className="w-full h-[260px] md:h-[300px]"
                >
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="rgba(34,211,238,0.9)" />
                      <stop offset="100%" stopColor="rgba(217,70,239,0.9)" />
                    </linearGradient>
                    <linearGradient id="g2" x1="0" x2="1" y1="1" y2="0">
                      <stop offset="0%" stopColor="rgba(16,185,129,0.9)" />
                      <stop offset="100%" stopColor="rgba(59,130,246,0.9)" />
                    </linearGradient>
                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="rgba(0,0,0,0.35)" />
                    </filter>
                  </defs>

                  {/* Layers */}
                  {[
                    {x:40,  y:40,  w:120, h:40, r:10, label:'Input'},
                    {x:200, y:40,  w:150, h:40, r:10, label:'Augment'},
                    {x:380, y:40,  w:160, h:40, r:10, label:'Normalize'},

                    {x:40,  y:120, w:220, h:48, r:10, label:'VGG16 (frozen early)'},
                    {x:300, y:120, w:240, h:48, r:10, label:'Fine-tuned top'},

                    {x:40,  y:200, w:180, h:44, r:10, label:'Global Avg Pool'},
                    {x:250, y:200, w:160, h:44, r:10, label:'Dense + Dropout'},
                    {x:440, y:200, w:120, h:44, r:10, label:'Softmax'}
                  ].map((box, i) => (
                    <g key={i} filter="url(#shadow)">
                      <rect x={box.x} y={box.y} width={box.w} height={box.h} rx={box.r} fill={i < 3 ? 'url(#g1)' : i < 5 ? 'url(#g2)' : 'url(#g1)'} opacity="0.85" />
                      <text x={box.x + box.w/2} y={box.y + box.h/2 + 5} textAnchor="middle" fontSize="14" fill="#0B1220" fontWeight="600">{box.label}</text>
                    </g>
                  ))}

                  {/* Arrows */}
                  {[
                    [[160,60],[200,60]],
                    [[350,60],[380,60]],
                    [[260,144],[300,144]],
                    [[220,222],[250,222]],
                    [[410,222],[440,222]]
                  ].map(([[x1,y1],[x2,y2]],i)=> (
                    <g key={i} stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="none">
                      <line x1={x1} y1={y1} x2={x2} y2={y2} />
                      <polygon points={`${x2-8},${y2-5} ${x2},${y2} ${x2-8},${y2+5}`} fill="rgba(255,255,255,0.85)" />
                    </g>
                  ))}
                </motion.svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
