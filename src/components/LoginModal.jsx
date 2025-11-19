import { motion, AnimatePresence } from 'framer-motion'

export default function LoginModal({ open, onClose }){
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50 grid place-items-center bg-slate-950/60 backdrop-blur-sm">
          <motion.div initial={{scale:.96,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:.96,opacity:0}} transition={{type:'spring', stiffness:220, damping:20}} className="relative w-[92vw] max-w-md overflow-hidden rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10" />
            <div className="relative">
              <h3 className="text-white text-xl font-semibold">Welcome back</h3>
              <p className="text-white/70 text-sm mt-1">Secure access for clinicians and lab staff.</p>
              <form className="mt-6 space-y-4">
                <input type="email" placeholder="Email" className="w-full rounded-xl bg-slate-900/60 px-4 py-3 text-white placeholder-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-cyan-400/40" />
                <input type="password" placeholder="Password" className="w-full rounded-xl bg-slate-900/60 px-4 py-3 text-white placeholder-white/40 ring-1 ring-white/10 focus:outline-none focus:ring-cyan-400/40" />
                <button type="button" onClick={onClose} className="w-full rounded-xl bg-cyan-500/20 px-4 py-3 font-semibold text-white ring-1 ring-cyan-400/40 hover:ring-cyan-300">Login</button>
              </form>
            </div>
            <button onClick={onClose} className="absolute right-3 top-3 rounded-full bg-white/10 px-3 py-1 text-xs text-white ring-1 ring-white/20">Close</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
