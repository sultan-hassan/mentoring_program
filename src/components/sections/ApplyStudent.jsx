import { motion } from 'framer-motion'
import { ArrowRight, Users, BookOpen, Globe2 } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { STUDENT_FORM_URL } from '../../config'

const benefits = [
  { icon: Users,    text: 'Get matched with a Sudanese professional in your field' },
  { icon: BookOpen, text: 'Get guidance on CVs, portfolios, and scholarship applications' },
  { icon: Globe2,   text: 'Connect with someone who understands where you\'re coming from' },
]

export default function ApplyStudent() {
  return (
    <section id="apply-student" className="bg-night-900 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 100%, rgba(245,158,11,0.08) 0%, transparent 50%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="For Students"
          title={<>Register your<br /><span className="text-gradient-gold">interest as a student</span></>}
          subtitle="Tell us about yourself and what you're looking for. We'll reach out as soon as we have a mentor who fits your goals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* What you get */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-7 border border-white/10"
          >
            <h3 className="text-white font-bold text-lg mb-5">What you get</h3>
            <ul className="space-y-4">
              {benefits.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-gold-400" />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Who can apply */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-7 border border-white/10"
          >
            <h3 className="text-white font-bold text-lg mb-5">Who can register</h3>
            <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
              {[
                'Sudanese high school students exploring careers',
                'University students looking for field-specific guidance',
                'Recent graduates seeking professional direction',
                'Anyone who wants a Sudanese mentor who understands their background',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-gold-400 mt-0.5 flex-shrink-0">→</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-slate-500 text-xs">
              Completely free. No experience required. Open to all students.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center glass rounded-2xl p-8 border border-gold-500/20"
          style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.07) 0%, transparent 100%)' }}
        >
          <p className="text-slate-300 mb-6 text-base">
            Registration takes <strong className="text-white">2 minutes</strong> and is completely free.
          </p>
          <a
            href={STUDENT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-night-950 font-bold text-lg shadow-xl shadow-gold-500/25 hover:-translate-y-1 transition-all"
          >
            Register Student Interest — Google Form
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-slate-500 text-xs mt-4">
            Opens in a new tab · Free & confidential · We'll reach out when a mentor is ready
          </p>
        </motion.div>
      </div>
    </section>
  )
}
