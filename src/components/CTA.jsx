import React from 'react'

function CTA() {
  return (
    <section id="apply" className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Join ICPC Hue Training</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Ready to take your competitive programming skills to the next level? Join our training program and become part of the first ICPC team in Hours University.
          </p>
          <div className="mt-8">
            <a href="#apply" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg shadow-blue-600/30 transition">Start Application</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
