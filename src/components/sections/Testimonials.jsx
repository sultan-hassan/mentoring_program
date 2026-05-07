import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const testimonials = [
  {
    quote: "I had no idea how to write a CV. After three sessions with my mentor in London, I had a professional resume and a LinkedIn profile. Two months later, I got my first internship offer. This platform changed everything for me.",
    name: 'Amira Hassan',
    role: 'Computer Science Student, Khartoum University',
    country: '🇸🇩',
    avatar: 'AH',
    color: '#10b981',
    stars: 5,
  },
  {
    quote: "I've been a software engineer in Toronto for 12 years. Mentoring through SudanBridge is the most meaningful thing I do. Watching Sudanese students discover what's possible — that feeling is irreplaceable.",
    name: 'Mohammed Al-Amin',
    role: 'Senior Software Engineer, Toronto',
    country: '🇨🇦',
    avatar: 'MA',
    color: '#f59e0b',
    stars: 5,
  },
  {
    quote: "I was studying medicine with no idea about specialization paths, scholarships, or global programs. My mentor — a Sudanese cardiologist in the UK — opened doors I didn't even know existed.",
    name: 'Sara Osman',
    role: 'Medical Student, Sudan',
    country: '🇸🇩',
    avatar: 'SO',
    color: '#7c3aed',
    stars: 5,
  },
  {
    quote: "As a researcher in Berlin, I felt disconnected from Sudan. SudanBridge gave me a way to contribute. My mentee just got accepted to a fully-funded PhD program in Germany. I cried when she told me.",
    name: 'Dr. Khalid Ibrahim',
    role: 'AI Researcher, TU Berlin',
    country: '🇩🇪',
    avatar: 'KI',
    color: '#0891b2',
    stars: 5,
  },
  {
    quote: "I wanted to start a tech company but had no one to ask about business models, funding, or strategy. My mentor in Dubai walked me through everything. We just launched our first product.",
    name: 'Nour Al-Rashid',
    role: 'Young Entrepreneur, Omdurman',
    country: '🇸🇩',
    avatar: 'NR',
    color: '#dc2626',
    stars: 5,
  },
  {
    quote: "The portfolio workshop alone was worth everything. I now have a GitHub profile, a personal website, and three live projects. My mentor reviews my code every two weeks. It feels like having a senior engineer by my side.",
    name: 'Yusuf Salim',
    role: 'Computer Engineering Student',
    country: '🇸🇩',
    avatar: 'YS',
    color: '#059669',
    stars: 5,
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  const navigate = (dir) => {
    setDirection(dir)
    setActive((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }

  const t = testimonials[active]

  return (
    <section id="testimonials" className="bg-night-950 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      {/* Gradient orbs */}
      <div className="absolute left-0 top-1/2 w-80 h-80 bg-brand-900/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute right-0 top-1/2 w-80 h-80 bg-violet-900/20 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Stories of Impact"
          title={<>Real people.<br /><span className="text-gradient">Real change.</span></>}
          subtitle="These aren't hypotheticals. These are the voices of students and mentors whose lives have been shaped by this community."
        />

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass rounded-3xl p-8 md:p-12 border border-white/10 mb-8 relative"
            >
              <Quote className="w-10 h-10 text-brand-500/30 mb-6" />
              <p className="text-xl md:text-2xl text-white leading-relaxed font-light mb-8 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm ring-2 ring-white/10"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t.country} {t.name}</p>
                    <p className="text-slate-400 text-sm">{t.role}</p>
                  </div>
                </div>
                <StarRating count={t.stars} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i) }}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? 'w-6 h-2.5 bg-brand-500' : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mini cards row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-12">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => { setDirection(i > active ? 1 : -1); setActive(i) }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`p-3 rounded-xl text-left transition-all duration-200 border ${
                i === active
                  ? 'bg-brand-500/15 border-brand-500/40'
                  : 'glass border-white/5 hover:bg-white/5'
              }`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold mb-2"
                style={{ backgroundColor: t.color }}
              >
                {t.avatar}
              </div>
              <p className="text-white text-xs font-medium truncate">{t.name.split(' ')[0]}</p>
              <p className="text-slate-500 text-xs truncate">{t.country}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
