import { motion } from 'framer-motion'
import { TrendingDown, Globe2, BookOpen, Network } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const stats = [
  {
    icon: TrendingDown,
    number: '70%',
    label: 'of Sudanese students',
    detail: 'have never spoken with a professional in their desired field',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
  },
  {
    icon: Globe2,
    number: '3M+',
    label: 'Sudanese professionals',
    detail: 'live in the diaspora — an untapped resource of knowledge and experience',
    color: 'text-gold-400',
    bg: 'bg-gold-500/10',
    border: 'border-gold-500/20',
  },
  {
    icon: BookOpen,
    number: '1 in 10',
    label: 'Sudanese students',
    detail: 'has access to professional guidance for CVs, LinkedIn, or scholarships',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: Network,
    number: '85%',
    label: 'of top scholarships',
    detail: 'go to students with professional networks and polished application materials',
    color: 'text-brand-400',
    bg: 'bg-brand-500/10',
    border: 'border-brand-500/20',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Problem() {
  return (
    <section id="problem" className="bg-night-950 py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-900/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="The Challenge"
          title={<>The gap we're<br /><span className="text-gradient">here to close</span></>}
          subtitle="Thousands of brilliant Sudanese students are navigating their futures alone — without mentors, without networks, without guidance. The knowledge exists. The distance is the only problem."
        />

        {/* Stats grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map(({ icon: Icon, number, label, detail, color, bg, border }) => (
            <motion.div
              key={label}
              variants={item}
              className={`glass rounded-2xl p-6 border ${border} hover:bg-white/8 transition-all duration-300 group`}
            >
              <div className={`w-11 h-11 rounded-xl ${bg} border ${border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <p className={`text-4xl font-black mb-2 ${color}`}>{number}</p>
              <p className="text-white font-semibold text-sm mb-2">{label}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{detail}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Narrative block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Brain drain doesn't have to be permanent. It can be{' '}
              <span className="text-gradient">brain circulation.</span>
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6 text-lg">
              Every Sudanese engineer in Silicon Valley, doctor in London, or entrepreneur in Dubai carries knowledge that could transform a young person's trajectory back home.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              SudanBridge is the platform that makes that knowledge transfer possible — structured, meaningful, and impactful.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {[
              { text: 'No access to CV and portfolio guidance', fixed: 'Professional templates & workshops' },
              { text: 'No professional networking skills', fixed: 'LinkedIn optimization & networking training' },
              { text: 'No visibility into global opportunities', fixed: 'Scholarship & internship databases' },
              { text: 'No role models in technical fields', fixed: 'Mentor spotlights & career showcases' },
            ].map(({ text, fixed }) => (
              <div key={text} className="glass rounded-xl p-5 border border-white/5 flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <span className="text-red-400 text-xs">✕</span>
                  </div>
                </div>
                <div>
                  <p className="text-slate-400 text-sm line-through opacity-60">{text}</p>
                  <p className="text-brand-400 text-sm font-medium mt-1">→ {fixed}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
