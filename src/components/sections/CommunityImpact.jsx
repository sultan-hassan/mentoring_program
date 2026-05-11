import { motion } from 'framer-motion'
import { Target, Globe2, Users, BookOpen } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const goals = [
  {
    icon: Users,
    target: '50',
    unit: 'Mentors',
    label: 'Year 1 Goal',
    detail: 'Sudanese professionals from any field, anywhere in the world',
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
    border: 'border-brand-500/20',
  },
  {
    icon: BookOpen,
    target: '200',
    unit: 'Students',
    label: 'Year 1 Goal',
    detail: 'Sudanese high school and university students connected to mentors',
    color: 'text-gold-400',
    bg: 'bg-gold-500/10',
    border: 'border-gold-500/20',
  },
  {
    icon: Target,
    target: '500',
    unit: 'Sessions',
    label: 'Year 1 Goal',
    detail: 'Hours of mentorship, guidance, and knowledge shared',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
  },
  {
    icon: Globe2,
    target: '20+',
    unit: 'Countries',
    label: 'Year 1 Goal',
    detail: 'Nations where Sudanese mentor volunteers will join from',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function CommunityImpact() {
  return (
    <section id="impact" className="bg-night-900 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Launch Goals"
          title={<>What we're<br /><span className="text-gradient">building toward</span></>}
          subtitle="We're at the very beginning. These are the targets we're working toward in Year 1 — and we need your help to get there."
        />

        {/* Goal cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {goals.map(({ icon: Icon, target, unit, label, detail, color, bg, border }) => (
            <motion.div
              key={unit}
              variants={item}
              className={`glass rounded-2xl p-6 md:p-8 border ${border} text-center group hover:bg-white/5 transition-all`}
            >
              <div className={`w-12 h-12 rounded-xl ${bg} border ${border} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${color} opacity-70`}>{label}</p>
              <p className={`text-4xl md:text-5xl font-black mb-1 ${color}`}>{target}</p>
              <p className="text-white font-semibold text-sm mb-3">{unit}</p>
              <p className="text-slate-500 text-xs leading-relaxed">{detail}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 border border-brand-500/20 text-center max-w-4xl mx-auto"
          style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.07) 0%, rgba(5,150,105,0.03) 100%)' }}
        >
          <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-4">
            "Sudanese talent exists{' '}
            <span className="text-gradient">everywhere</span> — and the next generation should not grow{' '}
            <span className="text-gradient-gold">alone</span>."
          </p>
          <p className="text-brand-400 font-semibold">— The SudanBridge Mission</p>
        </motion.div>
      </div>
    </section>
  )
}
