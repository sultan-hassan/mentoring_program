import { motion } from 'framer-motion'
import { MapPin, Briefcase, ArrowRight, Quote } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { MENTOR_FORM_URL } from '../../config'

const mentors = [
  {
    initials: 'AM',
    name: 'Amani Mohammed',
    title: 'Principal Engineer',
    company: 'Google DeepMind',
    location: 'London, UK',
    flag: '🇬🇧',
    areas: ['AI & Machine Learning', 'Software Engineering'],
    quote: 'I want every Sudanese student to know that a seat at the table was always meant for them.',
    sessions: 42,
    color: '#10b981',
    gradient: 'from-brand-500/20 to-teal-500/10',
  },
  {
    initials: 'KO',
    name: 'Dr. Khalid Omar',
    title: 'Cardiologist & Researcher',
    company: 'Johns Hopkins Medicine',
    location: 'Baltimore, USA',
    flag: '🇺🇸',
    areas: ['Medicine', 'Academia & Research'],
    quote: 'Medicine is not just about healing bodies — it\'s about healing communities. Mentorship is medicine.',
    sessions: 67,
    color: '#7c3aed',
    gradient: 'from-violet-500/20 to-purple-500/10',
  },
  {
    initials: 'NI',
    name: 'Nadia Ibrahim',
    title: 'Founder & CEO',
    company: 'TechBridge MENA',
    location: 'Dubai, UAE',
    flag: '🇦🇪',
    areas: ['Entrepreneurship', 'Product Management'],
    quote: 'I founded three companies. The only thing harder than building a startup is building it without guidance. Let me be that guidance.',
    sessions: 38,
    color: '#f59e0b',
    gradient: 'from-gold-500/20 to-amber-400/10',
  },
]

export default function MentorSpotlight() {
  return (
    <section id="mentors" className="bg-night-950 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Mentor Spotlight"
          title={<>Meet the people<br /><span className="text-gradient">behind the mission</span></>}
          subtitle="These are real Sudanese professionals who volunteered their time, knowledge, and hearts to guide the next generation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {mentors.map(({ initials, name, title, company, location, flag, areas, quote, sessions, color, gradient }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl overflow-hidden border border-white/10 group hover:border-white/20 transition-all duration-300"
            >
              {/* Top gradient section */}
              <div className={`bg-gradient-to-br ${gradient} p-8 pb-12 relative`}>
                {/* Avatar */}
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-2xl mb-4 ring-4 ring-white/10"
                  style={{ backgroundColor: color }}
                >
                  {initials}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
                <p className="text-slate-300 text-sm font-medium">{title}</p>
                <p className="text-slate-400 text-sm">{company}</p>
              </div>

              <div className="p-6 -mt-6">
                {/* Location */}
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                  <MapPin className="w-3.5 h-3.5" />
                  {flag} {location}
                </div>

                {/* Areas */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {areas.map((area) => (
                    <span
                      key={area}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `${color}18`, color, border: `1px solid ${color}33` }}
                    >
                      {area}
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <div className="glass rounded-xl p-4 mb-5 border border-white/5">
                  <Quote className="w-4 h-4 text-slate-600 mb-2" />
                  <p className="text-slate-300 text-sm leading-relaxed italic">"{quote}"</p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <Briefcase className="w-3.5 h-3.5" />
                    {sessions} sessions completed
                  </div>
                  <button
                    className="flex items-center gap-1 text-sm font-semibold transition-colors group/btn"
                    style={{ color }}
                  >
                    Request session
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join as mentor CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 md:p-12 border border-brand-500/20 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(5,150,105,0.03) 100%)' }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Are you a Sudanese professional abroad?
            </h3>
            <p className="text-slate-400 text-lg max-w-lg">
              Join 150+ mentors who are shaping the next generation. It takes just a few hours a month.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href={MENTOR_FORM_URL}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold shadow-lg shadow-brand-500/25 transition-all hover:-translate-y-0.5 whitespace-nowrap"
            >
              Become a Mentor
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
