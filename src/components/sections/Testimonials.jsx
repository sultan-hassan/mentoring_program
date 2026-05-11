import { motion } from 'framer-motion'
import { Heart, Globe2, Lightbulb, Users, ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const reasons = [
  {
    icon: Heart,
    title: 'Stay connected to Sudan',
    description: 'Living abroad can feel like growing distant from home. Mentoring is a way to stay rooted — to invest in the next generation and give back to the community that shaped you.',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
  },
  {
    icon: Globe2,
    title: 'Pay forward your opportunity',
    description: 'Someone opened a door for you once — a professor, a colleague, a chance meeting. Now you have the chance to be that person for a Sudanese student who has no one else to turn to.',
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
    border: 'border-brand-500/20',
  },
  {
    icon: Lightbulb,
    title: 'Share what school didn\'t teach',
    description: 'The most valuable career lessons — how to network, how to negotiate, how to navigate a foreign job market — are never written down. You carry them. Share them.',
    color: 'text-gold-400',
    bg: 'bg-gold-500/10',
    border: 'border-gold-500/20',
  },
  {
    icon: Users,
    title: 'Build something that lasts',
    description: 'One conversation can redirect a career. One hour a month from you could determine whether a Sudanese student reaches their potential or never discovers it.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
}

const card = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Testimonials() {
  return (
    <section id="why-mentor" className="bg-night-950 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute left-0 top-1/2 w-80 h-80 bg-brand-900/20 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute right-0 top-1/2 w-80 h-80 bg-violet-900/20 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Mentor?"
          title={<>Four reasons to<br /><span className="text-gradient">give one hour.</span></>}
          subtitle="You don't need to be famous, published, or have decades of experience. You just need to have walked a path a Sudanese student hasn't walked yet."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {reasons.map(({ icon: Icon, title, description, color, bg, border }) => (
            <motion.div
              key={title}
              variants={card}
              whileHover={{ y: -4 }}
              className={`glass rounded-2xl p-8 border ${border} hover:bg-white/5 transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 rounded-xl ${bg} border ${border} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
              <p className="text-slate-400 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Commitment callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 md:p-12 border border-brand-500/20 text-center"
          style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(5,150,105,0.03) 100%)' }}
        >
          <p className="text-3xl md:text-4xl font-bold text-white mb-4">
            Just{' '}
            <span className="text-gradient">1 hour per month.</span>
          </p>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            That's all we ask. One session per month with a student in your field. Video call, chat, or async — on your schedule, in your timezone.
          </p>
          <a
            href="#mentors"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-lg shadow-xl shadow-brand-500/30 hover:-translate-y-1 transition-all"
          >
            Apply to be a Mentor
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
