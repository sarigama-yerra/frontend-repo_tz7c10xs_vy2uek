import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { UploadCloud } from 'lucide-react'

export default function LiveDemo(){
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [status, setStatus] = useState('Drop an image to simulate detection')

  const onDrop = useCallback((e)=>{
    e.preventDefault()
    const f = e.dataTransfer.files?.[0]
    if(!f) return
    setFile(f)
    const url = URL.createObjectURL(f)
    setPreview(url)
    simulate()
  },[])

  const onPick = (e)=>{
    const f = e.target.files?.[0]
    if(!f) return
    setFile(f)
    const url = URL.createObjectURL(f)
    setPreview(url)
    simulate()
  }

  const simulate = ()=>{
    setStatus('Analyzing sample...')
    setTimeout(()=>{
      const classes = ['Malaria detected', 'Leptospirosis detected', 'No pathogen detected']
      const choice = classes[Math.floor(Math.random()*classes.length)]
      const conf = (Math.random()*20+80).toFixed(2)
      setStatus(`${choice} • Confidence ${conf}%`)
    }, 1500)
  }

  return (
    <section id="demo" className="relative bg-slate-950 py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-3xl md:text-5xl font-bold text-white text-center">Live Detection Demo</motion.h2>
        <p className="mt-3 text-center text-white/70 max-w-2xl mx-auto">Glassy panel with drag-and-drop upload and animated scanning feedback.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-xl">
            <div
              onDragOver={(e)=>e.preventDefault()}
              onDrop={onDrop}
              className="group relative flex h-80 w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/20 bg-slate-900/40 text-white/70 hover:border-cyan-400/40"
            >
              <input type="file" accept="image/*" onChange={onPick} className="absolute inset-0 opacity-0 cursor-pointer" />
              <UploadCloud className="h-10 w-10 text-cyan-300" />
              <p className="mt-3 text-sm">Drag & drop blood smear image or click to upload</p>
            </div>
            <div className="mt-4 h-10 w-full overflow-hidden rounded-lg bg-gradient-to-r from-cyan-400/20 via-fuchsia-400/20 to-emerald-400/20">
              <div className="h-full w-1/3 animate-[shimmer_2s_ease_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
            <style>{`@keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(300%)}}`}</style>
            <p className="mt-3 text-white/80 text-sm font-mono">{status}</p>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-3">
            <div className="relative h-80 w-full rounded-xl bg-slate-900/60 ring-1 ring-white/10 overflow-hidden">
              {preview ? (
                <img src={preview} alt="preview" className="h-full w-full object-cover" />
              ) : (
                <div className="absolute inset-0 grid place-content-center text-white/60">3D sample preview</div>
              )}
              <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_6px,rgba(34,211,238,0.12)_7px,transparent_8px)]" />
              <div className="pointer-events-none absolute inset-0 animate-pulse bg-gradient-to-b from-transparent via-transparent to-cyan-500/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
