import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, User, MessageSquare } from 'lucide-react'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if(!form.name.trim()) e.name = 'Your name is required'
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if(form.message.trim().length < 10) e.message = 'Please provide at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev)=>{
    ev.preventDefault()
    if(!validate()) return
    setSent(true)
    setTimeout(()=> setSent(false), 3000)
    setForm({name:'', email:'', message:''})
  }

  const baseField = 'flex items-center gap-3 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 focus-within:ring-cyan-400/40 transition'
  const label = 'text-xs uppercase tracking-wide text-white/60'
  const input = 'w-full bg-transparent text-white placeholder-white/30 focus:outline-none'

  return (
    <section id="contact" className="relative bg-slate-950 py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-3xl md:text-5xl font-bold text-white text-center">Get in touch</motion.h2>
        <p className="mt-3 text-center text-white/70">Questions, pilots, or partnerships? We\'d love to hear from you.</p>

        <form onSubmit={onSubmit} className="mx-auto mt-10 grid gap-4">
          <div className={baseField}>
            <User className="h-5 w-5 text-white/70" />
            <div className="w-full">
              <div className={label}>Name</div>
              <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} placeholder="Jane Doe" className={input} />
              {errors.name && <div className="mt-1 text-xs text-rose-300">{errors.name}</div>}
            </div>
          </div>

          <div className={baseField}>
            <Mail className="h-5 w-5 text-white/70" />
            <div className="w-full">
              <div className={label}>Email</div>
              <input value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} placeholder="you@company.com" className={input} />
              {errors.email && <div className="mt-1 text-xs text-rose-300">{errors.email}</div>}
            </div>
          </div>

          <div className={baseField}>
            <MessageSquare className="h-5 w-5 text-white/70" />
            <div className="w-full">
              <div className={label}>Message</div>
              <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} placeholder="Tell us about your use case" rows={5} className={input} />
              {errors.message && <div className="mt-1 text-xs text-rose-300">{errors.message}</div>}
            </div>
          </div>

          <motion.button whileTap={{scale:.98}} whileHover={{scale:1.01}} className="group relative mt-2 inline-flex items-center justify-center overflow-hidden rounded-2xl bg-cyan-500/20 px-6 py-3 font-semibold text-white ring-1 ring-cyan-400/40 transition">
            <span className="relative z-10">Send message</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/40 to-fuchsia-400/40 opacity-0 group-hover:opacity-100 transition" />
          </motion.button>

          <motion.div initial={{opacity:0}} animate={{opacity: sent?1:0}} className="text-sm text-emerald-300">Thanks! We\'ll be in touch shortly.</motion.div>
        </form>
      </div>
    </section>
  )
}
