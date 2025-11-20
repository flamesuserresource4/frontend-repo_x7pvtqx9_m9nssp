import React from 'react'

const news = [
  {
    category: 'Announcement',
    date: 'November 15, 2024',
    title: 'ICPC Hue Team Formation',
    body: 'We are excited to announce the formation of the first ICPC team in Hours University. Applications are now open!',
  },
  {
    category: 'Training',
    date: 'November 20, 2024',
    title: 'Training Sessions Begin',
    body: 'Our first training session will cover basic algorithms and data structures. All members are welcome to attend.',
  },
  {
    category: 'Competition',
    date: 'November 25, 2024',
    title: 'Mock Contest Results',
    body: 'Congratulations to all participants in our first mock contest. Top performers will be announced soon.',
  },
  {
    category: 'Event',
    date: 'December 1, 2024',
    title: 'Guest Speaker Session',
    body: 'Join us for a special session with an experienced competitive programmer sharing insights and tips.',
  },
]

function News() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 -z-10 bg-slate-950" />
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Latest News</h2>
        <p className="text-slate-300 text-center mt-3 max-w-3xl mx-auto">
          Stay informed about our team activities, training sessions, and upcoming events
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {news.map((n) => (
            <div key={n.title} className="rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur p-6">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/30">{n.category}</span>
                <span>{n.date}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-white">{n.title}</h3>
              <p className="mt-2 text-slate-300">{n.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default News
