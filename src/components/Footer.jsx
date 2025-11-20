import React from 'react'

function Footer() {
  return (
    <footer className="relative">
      <div className="absolute inset-0 -z-10 bg-slate-950" />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 border-t border-slate-800 pt-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white">ICPC Hue</h3>
            <p className="mt-2 text-slate-300 max-w-xl">
              The first ICPC team in our university. Competitive programming resources, training materials, and team collaboration tools for aspiring competitive programmers.
            </p>
            <a href="#top" className="inline-block mt-4 text-blue-400 hover:text-blue-300">Back to Top</a>
          </div>

          <div>
            <h4 className="text-white font-semibold">Resources</h4>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white">PDF Library</a></li>
              <li><a href="#" className="hover:text-white">Video Episodes</a></li>
              <li><a href="#" className="hover:text-white">Tutorials</a></li>
              <li><a href="#" className="hover:text-white">Code Examples</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold">Learning Paths</h4>
            <ul className="mt-3 space-y-2 text-slate-300">
              <li><a href="#" className="hover:text-white">Beginner</a></li>
              <li><a href="#" className="hover:text-white">Intermediate</a></li>
              <li><a href="#" className="hover:text-white">Advanced</a></li>
              <li><a href="#" className="hover:text-white">Expert</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-slate-400 border-t border-slate-800 pt-6">
          <p>© 2025 ICPC Hue. All rights reserved.</p>
          <p>Built for the competitive programming community • Powered by React and modern web tech</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
