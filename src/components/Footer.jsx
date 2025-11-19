export default function Footer(){
  return (
    <footer className="relative bg-slate-950 py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex gap-4">
            {['twitter','github','linkedin'].map((s,i)=> (
              <a key={i} href="#" className="group relative h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/10 hover:ring-cyan-400/40 transition shadow-inner">
                <span className="absolute inset-0 rounded-full bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition" />
              </a>
            ))}
          </div>
          <p className="text-white/70 text-sm">Powered by Advanced Medical AI Technologies</p>
        </div>
      </div>
    </footer>
  )
}
