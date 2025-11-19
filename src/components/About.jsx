import { motion } from 'framer-motion'

export default function About(){
  const items = [
    {
      title: 'Convolutional Neural Networks (CNNs)',
      points: [
        'CNNs learn hierarchical feature representations directly from images using convolutional filters.',
        'Early layers capture edges and textures; deeper layers encode shapes, structures, and pathology‑specific patterns.',
        'They are translation‑aware and parameter‑efficient compared to fully connected networks, making them ideal for microscopy.',
      ],
    },
    {
      title: 'VGG16 with Transfer Learning',
      points: [
        'We initialize with ImageNet‑pretrained VGG16 to leverage robust low‑level visual priors.',
        'Freeze early blocks for stability; fine‑tune later blocks and the classifier head on labeled malaria and leptospirosis datasets.',
        'Benefits: faster convergence, better generalization with limited labeled slides, and reduced overfitting.',
      ],
    },
    {
      title: 'Augmentation & Regularization',
      points: [
        'Augmentations: random rotations, flips, color jitter, CLAHE‑style contrast shifts, and mild Gaussian noise to mimic acquisition variability.',
        'Regularization: dropout on classifier layers, L2 weight decay, early stopping on validation loss, and learning‑rate scheduling.',
        'Validation protocol: stratified splits with patient‑level separation to avoid leakage; report confidence and calibration metrics.',
      ],
    },
  ]

  return (
    <section id="about" className="relative bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{opacity:0,y:12}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.6}}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          Model Overview
        </motion.h2>
        <motion.p
          initial={{opacity:0,y:10}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{delay:.1,duration:.6}}
          className="mt-3 text-center text-white/70 max-w-3xl mx-auto"
        >
          A clear summary of our approach—CNN foundations, VGG16 transfer learning, and the augmentation/regularization toolbox that drives robust clinical performance. No promotional imagery—just the essentials.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{opacity:0, y:12}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:.6, delay: idx*0.05}}
              className="relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-xl hover:ring-cyan-400/40"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
              <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75 list-disc list-inside">
                {item.points.map((p, i)=> (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4">
          <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            viewport={{once:true}}
            transition={{duration:.8}}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/75"
          >
            <p className="text-sm">
              Notes on training: we monitor ROC‑AUC and F1, apply temperature scaling for probability calibration, and export a lightweight head for on‑device inference when needed. This section intentionally contains no images to keep focus on the methodology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
