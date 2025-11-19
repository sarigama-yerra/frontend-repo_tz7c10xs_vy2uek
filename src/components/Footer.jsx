import { motion } from 'framer-motion'

export default function Footer(){
  return (
    <footer className="relative overflow-hidden bg-slate-950 py-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.10),transparent_60%)]" />
        <motion.div
          aria-hidden
          className="absolute -left-40 top-1/2 h-56 w-96 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/15 to-fuchsia-500/15 blur-3xl"
          animate={{ x: [0, 40, -20, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-40 top-1/2 h-56 w-96 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 blur-3xl"
          animate={{ x: [0, -40, 20, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <h3 className="text-white/90 text-lg font-semibold">Ready to accelerate diagnostics?</h3>
          <a href="#demo" className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-cyan-500/20 px-6 py-3 font-semibold text-white ring-1 ring-cyan-400/40 transition">
            <span className="relative z-10">Start a pilot</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/40 to-fuchsia-400/40 opacity-0 group-hover:opacity-100 transition" />
          </a>

          <div className="mt-6 h-px w-full max-w-md bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <p className="text-white/60 text-xs">© {new Date().getFullYear()} MedAI Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
