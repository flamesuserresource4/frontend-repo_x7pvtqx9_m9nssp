import React from 'react'

const phases = [
  {
    id: 1,
    title: 'Foundation',
    desc: 'Learn basic programming concepts, data structures, and algorithms',
    items: ['C++ Basics', 'STL Library', 'Time Complexity', 'Basic Algorithms'],
  },
  {
    id: 2,
    title: 'Intermediate',
    desc: 'Master advanced algorithms and problem-solving techniques',
    items: ['Graph Algorithms', 'Dynamic Programming', 'Greedy Algorithms', 'Binary Search'],
  },
  {
    id: 3,
    title: 'Advanced',
    desc: 'Tackle complex competitive programming problems',
    items: ['Advanced DP', 'String Algorithms', 'Number Theory', 'Geometry'],
  },
  {
    id: 4,
    title: 'Competition Ready',
    desc: 'Prepare for ICPC and other competitive programming contests',
    items: ['Contest Strategies', 'Team Practice', 'Mock Contests', 'ICPC Preparation'],
  },
]

function Roadmap() {
  return (
    <section id="training" className="relative py-20">
      <div className="absolute inset-0 -z-10 bg-slate-950" />
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Training Roadmap</h2>
        <p className="text-slate-300 text-center mt-3 max-w-3xl mx-auto">
          Our structured learning path designed to take you from beginner to competition-ready programmer
        </p>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((p) => (
            <div key={p.id} className="rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-blue-600 text-white grid place-content-center font-bold">
                  {p.id}
                </div>
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              </div>
              <p className="mt-2 text-slate-300">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-slate-300/90">
                {p.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Roadmap
