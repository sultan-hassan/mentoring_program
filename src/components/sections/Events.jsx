import { motion } from 'framer-motion'
import { Video, PenLine, Mic2, Bell, ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { MENTOR_FORM_URL, CONTACT_EMAIL } from '../../config'

const formats = [
  {
    icon: Mic2,
    title: 'Speaker Sessions',
    description: 'Sudanese professionals share their career journeys live — the real story of how they got to where they are, what they learned, and what they\'d tell their younger selves.',
    color: 'from-brand-500 to-teal-500',
    badge: 'bg-brand-500/15 text-brand-400 border-brand-500/30',
  },
  {
    icon: PenLine,
    title: 'Practical Workshops',
    description: 'Hands-on sessions covering the essentials: writing a CV, building a LinkedIn, applying for scholarships, preparing for interviews — guided by professionals who\'ve done it.',
    color: 'from-gold-500 to-amber-400',
    badge: 'bg-gold-500/15 text-gold-400 border-gold-500/30',
  },
  {
    icon: Video,
    title: 'Community Conversations',
    description: 'Open, informal gatherings where students and mentors connect across fields, swap stories, and build the kind of relationships that change career trajectories.',
    color: 'from-violet-500 to-purple-500',
    badge: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
  },
]

export default function Events() {
  return (
    <section id="events" className="bg-white py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle at 10% 50%, rgba(16,185,129,0.06) 0%, transparent 40%), radial-gradient(circle at 90% 50%, rgba(245,158,11,0.06) 0%, transparent 40%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Events & Sessions"
          title={<>Learning that<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-teal-600">happens in conversation</span></>}
          subtitle="Once our mentor cohort is in place, we'll run regular virtual events — free, open, and built around the things Sudanese students actually need to know."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-14">
          {formats.map(({ icon: Icon, title, description, color, badge }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-1.5 bg-gradient-to-r ${color}`} />
              <div className="p-6">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${badge}`}>
                  <Icon className="w-3 h-3" />
                  {title}
                </span>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Notification CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl bg-gradient-to-r from-brand-50 to-teal-50 border border-brand-100 p-8 text-center"
        >
          <Bell className="w-8 h-8 text-brand-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">Events start when our mentors do.</h3>
          <p className="text-slate-600 mb-6 text-sm max-w-lg mx-auto">
            Apply to be a mentor now — the first event will bring the founding cohort together with students.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={MENTOR_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 transition-all"
            >
              Apply as a Mentor
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=SudanBridge — Stay Updated`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-brand-200 text-brand-700 font-semibold hover:border-brand-400 hover:bg-brand-50 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
