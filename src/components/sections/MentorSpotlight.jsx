import { motion } from 'framer-motion'
import { Clock, Globe2, Home, ArrowRight, Heart } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { MENTOR_FORM_URL } from '../../config'

const DEADLINE = 'June 16, 2026'

const profiles = [
  {
    emoji: '✈️',
    type: 'Living Abroad',
    icon: Globe2,
    description: 'You left Sudan to build a career, pursue a degree, or find opportunity. You know firsthand what it takes to navigate a foreign system, and you remember what it felt like to start with no map.',
    examples: 'Engineers, doctors, researchers, lawyers, creatives — in any country, any city.',
    color: '#10b981',
    gradient: 'from-brand-500/15 to-teal-500/5',
    border: 'border-brand-500/20',
  },
  {
    emoji: '🏠',
    type: 'Returned Home',
    icon: Home,
    description: 'You studied or worked abroad and chose to return to Sudan. You bridge two worlds — and you show students that growing globally doesn\'t have to mean leaving permanently.',
    examples: 'Returnees in any sector — your story of coming back is uniquely powerful.',
    color: '#f59e0b',
    gradient: 'from-gold-500/15 to-amber-400/5',
    border: 'border-gold-500/20',
  },
  {
    emoji: '💡',
    type: 'Any Field, Any Story',
    icon: Heart,
    description: 'You don\'t need decades of experience or a prestigious title. You need a real career path, honest lessons, and a genuine desire to give one hour of your month to a student who has no one else.',
    examples: 'Whatever your discipline — if you have a story and an hour, you qualify.',
    color: '#7c3aed',
    gradient: 'from-violet-500/15 to-purple-500/5',
    border: 'border-violet-500/20',
  },
]

export default function MentorSpotlight() {
  return (
    <section id="mentors" className="bg-night-950 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Who We're Looking For"
          title={<>We're looking for<br /><span className="text-gradient">people like you</span></>}
          subtitle="Our founding cohort is open to any Sudanese professional — abroad or returned home — in any field. The only requirement is one hour per month and a genuine desire to help."
        />

        {/* Profile cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {profiles.map(({ emoji, type, icon: Icon, description, examples, color, gradient, border }, index) => (
            <motion.div
              key={type}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className={`glass rounded-3xl overflow-hidden border ${border} hover:border-white/20 transition-all duration-300`}
            >
              <div className={`bg-gradient-to-br ${gradient} p-8 pb-6`}>
                <div className="text-3xl mb-4">{emoji}</div>
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4" style={{ color }} />
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color }}>{type}</span>
                </div>
                <p className="text-white font-bold text-lg leading-snug">
                  {description.split('.')[0]}.
                </p>
              </div>
              <div className="p-6">
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {description.split('. ').slice(1).join('. ')}
                </p>
                <p className="text-slate-500 text-xs italic">{examples}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 1-hour commitment bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 border border-brand-500/20 flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
          style={{ background: 'linear-gradient(90deg, rgba(16,185,129,0.06) 0%, transparent 100%)' }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-500/15 border border-brand-500/30 flex items-center justify-center">
              <Clock className="w-5 h-5 text-brand-400" />
            </div>
            <div>
              <p className="text-white font-bold">1 hour per month</p>
              <p className="text-slate-500 text-xs">That's all we ask. You set the schedule.</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center">
              <Globe2 className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <p className="text-white font-bold">Any timezone</p>
              <p className="text-slate-500 text-xs">Video call, chat, or async — your choice.</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center">
              <Heart className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <p className="text-white font-bold">Any field</p>
              <p className="text-slate-500 text-xs">No minimum experience required.</p>
            </div>
          </div>
        </motion.div>

        {/* Deadline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 md:p-12 border border-brand-500/20 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(5,150,105,0.03) 100%)' }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Apply to be a founding mentor
            </h3>
            <p className="text-slate-400 text-lg mb-3 max-w-lg">
              Open to any Sudanese professional, in any field, anywhere in the world.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-sm font-semibold">
              ⏰ Application deadline: {DEADLINE}
            </div>
          </div>
          <a
            href={MENTOR_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-lg shadow-lg shadow-brand-500/30 hover:-translate-y-0.5 transition-all whitespace-nowrap flex-shrink-0"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
