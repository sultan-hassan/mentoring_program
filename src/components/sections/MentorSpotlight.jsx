import { motion } from 'framer-motion'
import { Code2, Stethoscope, Lightbulb, ArrowRight, Clock, Globe2, Heart } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { MENTOR_FORM_URL } from '../../config'

const archetypes = [
  {
    icon: Code2,
    emoji: '💻',
    title: 'The Engineer',
    fields: ['Software Engineering', 'AI & Data Science', 'Cybersecurity', 'Product'],
    pitch: 'You\'ve shipped products, navigated tech interviews, built careers in some of the world\'s top companies. A Sudanese student wants to know how you got there.',
    color: '#10b981',
    gradient: 'from-brand-500/20 to-teal-500/10',
    border: 'border-brand-500/20',
  },
  {
    icon: Stethoscope,
    emoji: '🩺',
    title: 'The Doctor & Researcher',
    fields: ['Medicine', 'Public Health', 'Academia', 'Biotech'],
    pitch: 'You know which scholarships are worth applying for, which specializations open doors, and how to write a personal statement that stands out. Share it.',
    color: '#7c3aed',
    gradient: 'from-violet-500/20 to-purple-500/10',
    border: 'border-violet-500/20',
  },
  {
    icon: Lightbulb,
    emoji: '🚀',
    title: 'The Entrepreneur & Leader',
    fields: ['Startups', 'Finance', 'Consulting', 'Design', 'Law'],
    pitch: 'You\'ve built things, led teams, navigated unfamiliar environments. The lessons you learned the hard way are exactly what a young Sudanese professional needs to hear.',
    color: '#f59e0b',
    gradient: 'from-gold-500/20 to-amber-400/10',
    border: 'border-gold-500/20',
  },
]

const commitments = [
  { icon: Clock,  text: '1 hour per month minimum' },
  { icon: Globe2, text: 'Any country, any timezone' },
  { icon: Heart,  text: 'Any field — all experience counts' },
]

export default function MentorSpotlight() {
  return (
    <section id="mentors" className="bg-night-950 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Become a Mentor"
          title={<>We're looking for<br /><span className="text-gradient">people like you</span></>}
          subtitle="We're recruiting our founding cohort of mentors. No prior teaching experience needed — just lived experience and an hour a month."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {archetypes.map(({ icon: Icon, emoji, title, fields, pitch, color, gradient, border }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className={`glass rounded-3xl overflow-hidden border ${border} group hover:border-white/20 transition-all duration-300`}
            >
              <div className={`bg-gradient-to-br ${gradient} p-8 pb-6`}>
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <div className="flex flex-wrap gap-2">
                  {fields.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{ backgroundColor: `${color}20`, color, border: `1px solid ${color}33` }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <p className="text-slate-300 leading-relaxed text-sm mb-6 italic">"{pitch}"</p>
                <a
                  href={MENTOR_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold transition-all group/btn"
                  style={{ color }}
                >
                  Apply as {title.split(' ')[1] || 'Mentor'}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitment bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
        >
          {commitments.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-brand-400" />
              </div>
              <span className="text-white font-medium text-sm">{text}</span>
            </div>
          ))}
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12 border border-brand-500/20 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(5,150,105,0.03) 100%)' }}
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to be one of our founding mentors?
            </h3>
            <p className="text-slate-400 text-lg max-w-lg">
              The first cohort sets the tone for everything. Be part of building this from the ground up.
            </p>
          </div>
          <a
            href={MENTOR_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-lg shadow-lg shadow-brand-500/30 hover:-translate-y-0.5 transition-all whitespace-nowrap flex-shrink-0"
          >
            Apply to Mentor
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
