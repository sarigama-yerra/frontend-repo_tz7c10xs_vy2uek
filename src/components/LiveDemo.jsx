import { useCallback, useMemo, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { UploadCloud, Sparkles, ShieldCheck, Activity, Camera } from 'lucide-react'

export default function LiveDemo(){
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState(null) // { label: string, confidence: number }

  const onDrop = useCallback((e)=>{
    e.preventDefault()
    const f = e.dataTransfer.files?.[0]
    if(!f) return
    handleFile(f)
  },[])

  const onPick = (e)=>{
    const f = e.target.files?.[0]
    if(!f) return
    handleFile(f)
  }

  const handleFile = (f)=>{
    setFile(f)
    setResult(null)
    const url = URL.createObjectURL(f)
    setPreview(url)
    simulate()
  }

  const simulate = ()=>{
    setIsAnalyzing(true)
    setResult(null)
    setTimeout(()=>{
      const classes = [
        { label: 'Malaria detected', tone: 'danger' },
        { label: 'Leptospirosis detected', tone: 'warning' },
        { label: 'No pathogen detected', tone: 'success' },
      ]
      const confidence = +(Math.random()*20+80).toFixed(2)
      const choice = classes[Math.floor(Math.random()*classes.length)]
      setResult({ ...choice, confidence })
      setIsAnalyzing(false)
    }, 1600)
  }

  // 3D tilt for the upload card
  const cardRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-50, 50], [8, -8])
  const rotateY = useTransform(x, [-50, 50], [-8, 8])

  const handleMouseMove = (e)=>{
    const rect = cardRef.current?.getBoundingClientRect()
    if(!rect) return
    const px = e.clientX - rect.left - rect.width/2
    const py = e.clientY - rect.top - rect.height/2
    x.set(px/4)
    y.set(py/4)
  }

  const statusText = useMemo(()=>{
    if(isAnalyzing) return 'Analyzing sample…'
    if(result) return `${result.label} • Confidence ${result.confidence}%`
    return 'Drop an image to simulate detection'
  }, [isAnalyzing, result])

  const toneClasses = useMemo(()=>{
    if(!result) return {
      glow: 'from-cyan-400/30 via-fuchsia-400/30 to-emerald-400/30',
      chip: 'bg-white/5 text-white/80 ring-white/20'
    }
    if(result.tone === 'danger') return { glow: 'from-rose-500/30 via-fuchsia-500/25 to-amber-400/20', chip: 'bg-rose-500/15 text-rose-200 ring-rose-400/30' }
    if(result.tone === 'warning') return { glow: 'from-amber-400/30 via-cyan-400/25 to-fuchsia-400/20', chip: 'bg-amber-400/15 text-amber-100 ring-amber-300/30' }
    return { glow: 'from-emerald-400/30 via-cyan-400/25 to-sky-400/20', chip: 'bg-emerald-500/15 text-emerald-100 ring-emerald-300/30' }
  }, [result])

  return (
    <section id="demo" className="relative overflow-hidden bg-slate-950 py-24">
      {/* Ambient gradient grid + particles */}
      <DecorativeBackdrop />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70">Live Detection Demo</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Upload a microscopic smear and watch the cinematic scan visualize the outcome in real-time.</p>
          </div>
          <motion.div initial={{opacity:0,scale:.9}} whileInView={{opacity:1,scale:1}} transition={{delay:.15,duration:.5}} className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="text-sm text-white/80">Cinematic mode</span>
          </motion.div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Upload + status card */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            whileHover={{ scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 120, damping: 12 }}
            className="relative overflow-hidden rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-xl"
          >
            {/* neon border glow */}
            <div className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r ${toneClasses.glow} opacity-40 blur-2xl`} />

            <div
              onDragOver={(e)=>e.preventDefault()}
              onDrop={onDrop}
              className="group relative flex h-80 w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-white/15 bg-slate-900/40 text-white/70 hover:border-cyan-400/40"
              style={{ transform: 'translateZ(20px)' }}
            >
              <input type="file" accept="image/*" onChange={onPick} className="absolute inset-0 opacity-0 cursor-pointer" />
              <motion.div animate={{ y: isAnalyzing ? [0,-6,0] : 0 }} transition={{ repeat: isAnalyzing ? Infinity : 0, duration: 1.6, ease: 'easeInOut' }}>
                <UploadCloud className="h-11 w-11 text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]" />
              </motion.div>
              <p className="mt-3 text-sm">Drag & drop blood smear image or click to upload</p>
              {/* Pulsing radar ring when analyzing */}
              {isAnalyzing && (
                <div className="pointer-events-none absolute inset-0 grid place-content-center">
                  <span className="h-32 w-32 rounded-full border border-cyan-400/40 shadow-[0_0_0_0_rgba(34,211,238,0.4)] animate-ping" />
                </div>
              )}
            </div>

            {/* Scan progress bar */}
            <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/5">
              <motion.div
                initial={false}
                animate={{ width: isAnalyzing ? ['0%','100%'] : result ? '100%' : '0%' }}
                transition={{ duration: isAnalyzing ? 1.6 : 0.6, ease: 'easeInOut', repeat: isAnalyzing ? Infinity : 0 }}
                className="h-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-emerald-400"
              />
            </div>

            {/* Status + chips */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <p className="text-white/85 text-sm font-mono">{statusText}</p>
              {result && (
                <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1 ${toneClasses.chip}`}>
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {result.confidence}%
                </span>
              )}
              <span className="ml-auto hidden md:inline-flex items-center gap-2 text-xs text-white/60"><Activity className="h-3.5 w-3.5"/> Inference (mock)</span>
            </div>
          </motion.div>

          {/* Preview panel */}
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5 p-3">
            <div className="relative h-80 w-full overflow-hidden rounded-xl bg-slate-900/80 ring-1 ring-white/10">
              {preview ? (
                <motion.img src={preview} alt="preview" className="h-full w-full object-contain" initial={{opacity:0, scale:.98}} animate={{opacity:1, scale:1}} />
              ) : (
                <div className="absolute inset-0 grid place-content-center text-white/60">
                  <div className="flex items-center gap-2 text-sm">
                    <Camera className="h-4 w-4"/> Sample preview
                  </div>
                </div>
              )}

              {/* holographic scanline when analyzing */}
              {isAnalyzing && (
                <>
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_60%)]" />
                  <div className="pointer-events-none absolute inset-0" style={{mixBlendMode:'screen'}}>
                    <div className="absolute -top-1 left-0 right-0 h-24 bg-gradient-to-b from-cyan-300/35 via-cyan-300/8 to-transparent blur-sm animate-scan" />
                  </div>
                </>
              )}

              {/* corner accents */}
              <CornerAccent position="tl" />
              <CornerAccent position="tr" />
              <CornerAccent position="bl" />
              <CornerAccent position="br" />
            </div>

            {/* result plaque */}
            {result && (
              <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{ type:'spring', stiffness: 160, damping: 14 }} className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge tone={result.tone}>{result.label}</Badge>
                  <span className="text-sm text-white/70">Confidence</span>
                  <span className="font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">{result.confidence}%</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(300%)}}
        @keyframes floaty{0%{transform:translateY(0)}50%{transform:translateY(-8px)}100%{transform:translateY(0)}}
        @keyframes glow{0%{opacity:.6}50%{opacity:1}100%{opacity:.6}}
        @keyframes scan{0%{transform:translateY(-100%)}100%{transform:translateY(220%)} }
        .animate-scan{animation: scan 1.6s ease-in-out infinite}
      `}</style>
    </section>
  )
}

function Badge({ tone='neutral', children }){
  const tones = {
    danger: 'bg-rose-500/15 text-rose-100 ring-rose-400/30',
    warning: 'bg-amber-400/15 text-amber-50 ring-amber-300/30',
    success: 'bg-emerald-500/15 text-emerald-100 ring-emerald-300/30',
    neutral: 'bg-white/5 text-white/80 ring-white/20'
  }
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1 ${tones[tone]}`}>
      <ShieldCheck className="h-3.5 w-3.5" />
      {children}
    </span>
  )
}

function CornerAccent({ position='tl' }){
  const pos = {
    tl: 'left-3 top-3',
    tr: 'right-3 top-3',
    bl: 'left-3 bottom-3',
    br: 'right-3 bottom-3'
  }[position]
  return (
    <div className={`pointer-events-none absolute ${pos} h-6 w-6 rounded-md ring-1 ring-cyan-300/30`}>
      <div className="absolute inset-0 rounded-md bg-cyan-300/10" />
      <div className="absolute -inset-6 -z-10 rounded-xl bg-cyan-400/10 blur-2xl" />
    </div>
  )
}

function DecorativeBackdrop(){
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* soft gradient grid */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.12),rgba(17,24,39,0)_70%)]" />
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />
      {/* floating orbs */}
      <div className="absolute left-[10%] top-20 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl animate-[floaty_8s_ease-in-out_infinite]" />
      <div className="absolute right-[12%] top-40 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-3xl animate-[floaty_9s_ease-in-out_infinite]" />
      <div className="absolute left-[30%] bottom-10 h-28 w-28 rounded-full bg-emerald-500/20 blur-3xl animate-[floaty_10s_ease-in-out_infinite]" />
    </div>
  )
}
