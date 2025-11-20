import React from 'react'

const socials = [
  { name: 'Facebook', desc: 'Follow us on Facebook for updates', href: '#', arrow: '→' },
  { name: 'Twitter', desc: 'Get the latest news on Twitter', href: '#', arrow: '→' },
  { name: 'Instagram', desc: 'See our photos and stories', href: '#', arrow: '→' },
  { name: 'LinkedIn', desc: 'Connect with our professional network', href: '#', arrow: '→' },
  { name: 'GitHub', desc: 'Check out our code repositories', href: '#', arrow: '→' },
  { name: 'Discord', desc: 'Join our community server', href: '#', arrow: '→' },
]

function Socials() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-slate-950" />
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Connect With Us</h2>
        <p className="text-slate-300 text-center mt-3 max-w-3xl mx-auto">
          Stay updated with our latest news, training sessions, and community events
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socials.map((s) => (
            <a key={s.name} href={s.href} className="group rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur p-6 hover:border-slate-500 transition">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{s.name}</h3>
                <span className="text-blue-400 group-hover:translate-x-1 transition-transform">{s.arrow}</span>
              </div>
              <p className="mt-2 text-slate-300">{s.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Socials
