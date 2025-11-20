import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full blur-3xl opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.35),transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        {/* Terminal style intro */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-700/60 bg-slate-900/70 backdrop-blur shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/50">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs text-slate-300/70">terminal • icpc-hue</span>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed text-slate-200">
            <div className="text-emerald-400">$</div>
            <div><span className="text-blue-400">icpc-hue</span> --init</div>
            <div className="mt-3 text-slate-300">Initializing competitive programming platform...</div>
            <div className="text-emerald-400">✓</div>
            <div>Connected to <span className="text-amber-300">LeetCode</span></div>
            <div className="text-emerald-400">✓</div>
            <div>Connected to <span className="text-sky-300">Codeforces</span></div>
            <div className="text-emerald-400">✓</div>
            <div>Loading problem sets...</div>
            <div className="text-emerald-400">✓</div>
            <div>Team ready for training!</div>
            <div className="mt-2">$<span className="animate-pulse">_</span></div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">ICPC HUE</h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            First ICPC Team in Hours University. Competitive programming resources, training materials, and team collaboration tools.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#training" className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition">Join Training</a>
            <a href="#apply" className="px-6 py-3 rounded-xl border border-slate-700 text-slate-200 hover:border-slate-500 transition">Apply Now</a>
          </div>
          <div className="mt-8 text-slate-400">Scroll to explore</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
