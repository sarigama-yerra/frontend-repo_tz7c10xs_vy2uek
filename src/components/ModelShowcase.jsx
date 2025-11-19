import { motion } from 'framer-motion'

export default function ModelShowcase(){
  return (
    <section id="models" className="relative bg-slate-950 py-20 overflow-hidden">
      {/* Subtle glow backdrop (kept minimal) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[40rem] rounded-full bg-gradient-to-r from-fuchsia-500/10 via-sky-500/10 to-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{opacity:0,y:12}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.5}}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          Model Overview
        </motion.h2>

        <motion.p
          initial={{opacity:0,y:8}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.5, delay:.05}}
          className="mt-4 text-center text-white/80 max-w-3xl mx-auto"
        >
          A clear summary of our approach—CNN foundations, VGG16 transfer learning, and the augmentation/regularization toolbox that drives robust clinical performance. No promotional imagery—just the essentials.
        </motion.p>

        {/* Essentials only: concise, non-promotional details */}
        <motion.div
          initial={{opacity:0, scale:0.98}}
          whileInView={{opacity:1, scale:1}}
          viewport={{once:true}}
          transition={{duration:0.6, ease:'easeOut'}}
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-5">
              <h3 className="text-white font-semibold">CNN Foundations</h3>
              <p className="mt-2 text-sm text-white/70">Convolutional layers for spatial feature extraction; ReLU + batch norm; global average pooling for compact representations.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-5">
              <h3 className="text-white font-semibold">Transfer Learning (VGG16)</h3>
              <p className="mt-2 text-sm text-white/70">Pretrained VGG16 backbone with fine-tuned higher blocks; frozen early layers for stability and faster convergence.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-5">
              <h3 className="text-white font-semibold">Augmentation & Regularization</h3>
              <p className="mt-2 text-sm text-white/70">Color jitter, flips, MixUp/CutMix; dropout, weight decay, and temperature scaling for calibrated outputs.</p>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm text-white/70">
            <div className="rounded-lg border border-white/10 bg-slate-900/40 p-4">
              <div className="text-white/90 font-medium">Inputs</div>
              <div className="mt-1">Microscope images (slides, smears); 224–256 px normalized</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-900/40 p-4">
              <div className="text-white/90 font-medium">Outputs</div>
              <div className="mt-1">Malaria vs healthy; leptospirosis risk score with confidence</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-slate-900/40 p-4">
              <div className="text-white/90 font-medium">Calibration</div>
              <div className="mt-1">Temperature scaling to align predicted probabilities with observed outcomes</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
