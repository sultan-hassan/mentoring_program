import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { STUDENT_FORM_URL } from '../../config'

const bullets = [
  'High school and university students in Sudan or abroad',
  'Any field of interest — science, arts, business, medicine, tech, law',
  'No experience or credentials needed — just curiosity and ambition',
  'Completely free, always',
]

export default function ApplyStudent() {
  return (
    <section id="apply-student" className="bg-white py-20 lg:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 100%, rgba(245,158,11,0.07) 0%, transparent 50%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="For Students"
          title={<>Looking for a<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-gold-600 to-amber-500">Sudanese mentor?</span></>}
          subtitle="Register your interest. We'll match you with a mentor in your field as soon as our first cohort is ready."
          light
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto rounded-3xl border border-amber-200 overflow-hidden shadow-sm"
          style={{ background: 'linear-gradient(135deg, #fffbeb, #fef3c7)' }}
        >
          <div className="p-8 md:p-10">
            <h3 className="text-slate-900 font-bold text-xl mb-5">Who can register</h3>
            <ul className="space-y-3 mb-8">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="text-gold-500 font-bold mt-0.5 flex-shrink-0">→</span>
                  <span className="text-slate-700 text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>

            <p className="text-slate-600 text-sm mb-6">
              The registration form takes <strong>2 minutes</strong>. Tell us your field and what you're hoping to learn — we'll take it from there.
            </p>

            <a
              href={STUDENT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-night-950 font-bold text-lg shadow-lg shadow-gold-500/25 hover:-translate-y-1 transition-all"
            >
              Register Interest — Google Form
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-slate-500 text-xs mt-3">
              Opens in a new tab · Free · We'll reach out when a mentor is ready
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
