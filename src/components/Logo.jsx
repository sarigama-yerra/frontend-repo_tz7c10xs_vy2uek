import { motion } from 'framer-motion'

export default function Logo({ size = 40, withText = true, className = '' }) {
  const emblemSize = typeof size === 'number' ? size : 40
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="relative" style={{ width: emblemSize, height: emblemSize }}>
        {/* Glow backplate */}
        <motion.div
          aria-hidden
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/30 via-fuchsia-500/30 to-emerald-500/30 blur-md"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Main emblem */}
        <div className="absolute inset-0 rounded-xl bg-slate-900/70 ring-1 ring-white/20 backdrop-blur-md overflow-hidden">
          <div className="absolute inset-0 bg-[conic-gradient(from_120deg_at_50%_50%,rgba(34,211,238,0.25),rgba(217,70,239,0.25),rgba(16,185,129,0.25),rgba(34,211,238,0.25))] opacity-60 mix-blend-screen" />
          <div className="absolute inset-[3px] rounded-lg bg-slate-950/70" />
          {/* Core pulse */}
          <motion.span
            className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_18px_4px_rgba(34,211,238,0.8)]"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          {/* Orbiting dots */}
          <motion.span
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400"
            style={{ transformOrigin: '22px 0px' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <motion.span
            className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400"
            style={{ transformOrigin: '-22px 0px' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>

      {withText && (
        <div className="leading-tight">
          <div className="flex items-center gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 font-semibold tracking-wide">
              MedAI
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/80 ring-1 ring-white/15">
              Labs
            </span>
          </div>
          <div className="text-[10px] text-white/50 tracking-widest uppercase">
            Diagnostic Intelligence
          </div>
        </div>
      )}
    </div>
  )
}
