import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import Logo from './Logo'

export default function Hero({ onOpenLogin, onStart }) {
  const overlayRef = useRef(null)

  // Simple parallax on mouse move for overlay particles
  useEffect(() => {
    const el = overlayRef.current
    if (!el) return
    const handler = (e) => {
      const { innerWidth, innerHeight } = window
      const x = (e.clientX / innerWidth - 0.5) * 10
      const y = (e.clientY / innerHeight - 0.5) * 10
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/D17NpA0ni2BTjUzp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient and particle overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950" />
      <div ref={overlayRef} className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      {/* Top Navigation */}
      <div className="relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <a href="#top" className="transition-transform hover:scale-[1.02] active:scale-[0.98]">
            <Logo size={44} withText className="drop-shadow-[0_0_12px_rgba(56,189,248,0.25)]" />
          </a>
          <div className="flex items-center gap-3">
            <a href="#how" className="text-white/70 hover:text-white transition-colors text-sm">How it works</a>
            <a href="#models" className="text-white/70 hover:text-white transition-colors text-sm">Models</a>
            <a href="#demo" className="text-white/70 hover:text-white transition-colors text-sm">Live demo</a>
            <button onClick={onOpenLogin} className="group ml-2 relative overflow-hidden rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/20 hover:ring-cyan-400/50 transition-all">
              <span className="relative z-10">Login</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-fuchsia-400/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Copy and CTA */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-12 pb-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 drop-shadow-[0_0_24px_rgba(56,189,248,0.35)]"
        >
          Malaria and Leptospirosis Detection AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-5 max-w-3xl text-base sm:text-lg text-white/80"
        >
          Next-Generation Diagnostic Intelligence for rapid, accurate detection. Immerse in a cinematic 3D experience that brings microscopic analysis to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={onStart}
            className="group relative overflow-hidden rounded-2xl bg-cyan-500/20 px-8 py-3 font-semibold text-white backdrop-blur-md ring-1 ring-cyan-400/40 hover:ring-cyan-300 transition-all"
          >
            <span className="relative z-10">Start Detection</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/40 to-fuchsia-400/40 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <a href="#demo" className="text-white/80 hover:text-white transition-colors">Watch Live Demo</a>
        </motion.div>
      </div>
    </section>
  )
}
