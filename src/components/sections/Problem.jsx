import { motion } from 'framer-motion'
import { TrendingDown, Globe2, BookOpen, Network } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const challenges = [
  {
    icon: TrendingDown,
    title: 'No career visibility',
    detail: 'Most Sudanese students have never had a real conversation with a professional working in their area of interest — the guidance simply isn\'t accessible.',
    color: 'text-red-400',
    bg: 'bg-red-500/10',
    border: 'border-red-500/20',
  },
  {
    icon: Globe2,
    title: 'An untapped diaspora',
    detail: 'Millions of Sudanese professionals live and work abroad — in engineering, medicine, finance, academia, and more. Their knowledge and experience rarely makes it back home.',
    color: 'text-gold-400',
    bg: 'bg-gold-500/10',
    border: 'border-gold-500/20',
  },
  {
    icon: BookOpen,
    title: 'Missing the basics',
    detail: 'Applying for a scholarship, writing a CV, or building a LinkedIn profile feels out of reach without someone who\'s done it before to show you how.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: Network,
    title: 'Networks start early',
    detail: 'Opportunity flows through networks. Students who have professional connections — even one strong mentor — reach outcomes that others simply can\'t access alone.',
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
      <div className="absolute inset-0 grid-overlay opacity-50" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-900/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="The Challenge"
          title={<>The gap we're<br /><span className="text-gradient">here to close</span></>}
          subtitle="Brilliant Sudanese students are navigating their futures without the guidance that students elsewhere take for granted. The knowledge exists in our diaspora — the connection doesn't."
        />

        {/* Challenge cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {challenges.map(({ icon: Icon, title, detail, color, bg, border }) => (
            <motion.div
              key={title}
              variants={item}
              className={`glass rounded-2xl p-6 border ${border} hover:bg-white/8 transition-all duration-300 group`}
            >
              <div className={`w-11 h-11 rounded-xl ${bg} border ${border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <h3 className={`text-lg font-bold mb-3 ${color}`}>{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{detail}</p>
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
              { problem: 'No access to CV and portfolio guidance',    solution: 'Professional templates & workshops' },
              { problem: 'No professional networking skills',         solution: 'LinkedIn optimization & networking training' },
              { problem: 'No visibility into global opportunities',   solution: 'Scholarship & internship guidance' },
              { problem: 'No role models in technical fields',        solution: 'Mentors who share their real journeys' },
            ].map(({ problem, solution }) => (
              <div key={problem} className="glass rounded-xl p-5 border border-white/5 flex items-start gap-4">
                <div className="mt-0.5 flex-shrink-0">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <span className="text-red-400 text-xs">✕</span>
                  </div>
                </div>
                <div>
                  <p className="text-slate-400 text-sm line-through opacity-60">{problem}</p>
                  <p className="text-brand-400 text-sm font-medium mt-1">→ {solution}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
