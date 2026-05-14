import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const points = [
  {
    emoji: '🎓',
    title: 'Students with no one to ask',
    detail: 'Most Sudanese students have never had a real conversation with a professional in their area of interest. Career guidance, scholarship advice, CV help — there\'s simply no structure to access it.',
  },
  {
    emoji: '🌍',
    title: 'A diaspora that wants to give back',
    detail: 'Millions of Sudanese professionals live and work abroad — in engineering, medicine, finance, law, academia. Their knowledge and lived experience rarely make it back home in any structured way.',
  },
  {
    emoji: '🔗',
    title: 'One bridge changes everything',
    detail: 'A single mentor can redirect a career, unlock a scholarship, or show a student what\'s possible. SudanBridge exists to make that connection happen — across borders, across fields, across generations.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="bg-night-950 py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why SudanBridge"
          title={<>The gap we're<br /><span className="text-gradient">here to close</span></>}
          subtitle="Brilliant Sudanese students are navigating their futures without the guidance that students elsewhere take for granted."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {points.map(({ emoji, title, detail }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass rounded-2xl p-7 border border-white/8 hover:bg-white/5 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{emoji}</div>
              <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-slate-400 text-lg italic mb-6 max-w-2xl mx-auto">
            "Sudanese talent exists everywhere — and the next generation should not grow alone."
          </p>
          <a
            href="#apply-mentor"
            className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-semibold transition-colors"
          >
            Help change that — apply as a mentor
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
