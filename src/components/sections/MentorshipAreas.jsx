import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { MENTOR_FORM_URL } from '../../config'

const broadFields = [
  'Engineering & Technology', 'Medicine & Healthcare', 'Science & Research',
  'Business & Entrepreneurship', 'Finance & Economics', 'Law & Policy',
  'Design & Creative Arts', 'Education & Academia', 'Social Work & NGOs',
  'Journalism & Media', 'Architecture', 'Agriculture & Environment',
  'And any other field you work in',
]

export default function MentorshipAreas() {
  return (
    <section id="areas" className="bg-night-900 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="All Fields Welcome"
          title={<>Any field.<br /><span className="text-gradient">Any discipline.</span></>}
          subtitle="We're not looking for a specific job title or industry. We're looking for Sudanese professionals with a story to share — whatever their field."
        />

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 md:p-12 border border-brand-500/20 text-center mb-12"
          style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.07) 0%, rgba(5,150,105,0.03) 100%)' }}
        >
          <Sparkles className="w-10 h-10 text-brand-400 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            If you have a career path and a story, we want you.
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Whether you're a software engineer in London, a doctor in Toronto, a researcher in Berlin, an artist in New York, or someone who built a career abroad and came back to Sudan — your experience matters to a student who hasn't found their way yet.
          </p>

          {/* Field tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {broadFields.map((field, i) => (
              <motion.span
                key={field}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  i === broadFields.length - 1
                    ? 'bg-brand-500/15 border-brand-500/40 text-brand-300 italic'
                    : 'bg-white/5 border-white/10 text-slate-300'
                }`}
              >
                {field}
              </motion.span>
            ))}
          </div>

          <a
            href={MENTOR_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-lg shadow-xl shadow-brand-500/30 hover:-translate-y-1 transition-all"
          >
            Apply to Mentor — Any Field
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Two paths */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              emoji: '✈️',
              title: 'Living abroad',
              desc: 'You built your career outside Sudan. You know what it takes to navigate a foreign job market, win a competitive scholarship, or break into a new industry. That knowledge is exactly what Sudanese youth need.',
              border: 'border-brand-500/20',
              bg: 'from-brand-500/10 to-teal-500/5',
            },
            {
              emoji: '🏠',
              title: 'Returned home',
              desc: 'You studied or worked abroad and came back to Sudan. You bridge two worlds — and you can show students that investing in yourself doesn\'t mean leaving forever. You\'re a uniquely powerful role model.',
              border: 'border-gold-500/20',
              bg: 'from-gold-500/10 to-amber-400/5',
            },
          ].map(({ emoji, title, desc, border, bg }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`glass rounded-2xl p-8 border ${border} bg-gradient-to-br ${bg}`}
            >
              <div className="text-3xl mb-4">{emoji}</div>
              <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
