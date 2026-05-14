import { motion } from 'framer-motion'
import { ArrowRight, Clock, Globe2, Home, LinkedinIcon, FileText, ImageIcon, CheckCircle } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { MENTOR_FORM_URL, DEADLINE } from '../../config'

const whyCards = [
  { emoji: '✈️', label: 'Living abroad',   desc: 'You navigated a foreign system and built something. Share what you learned with a student who hasn\'t found their map yet.' },
  { emoji: '🏠', label: 'Returned home',   desc: 'You studied or worked abroad and came back. Your story shows students that growing globally doesn\'t mean leaving permanently.' },
  { emoji: '💡', label: 'Any field',        desc: 'Engineer, doctor, artist, lawyer, accountant — if you have a career path, a student needs to hear about it.' },
]

const needs = [
  { icon: LinkedinIcon, label: 'LinkedIn profile URL' },
  { icon: FileText,     label: 'CV / Resume (Google Drive link)' },
  { icon: ImageIcon,    label: 'Profile photo (Google Drive link)' },
  { icon: Clock,        label: '1 hour per month — your schedule' },
]

export default function ApplyMentor() {
  return (
    <section id="apply-mentor" className="bg-night-950 py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Apply as a Mentor"
          title={<>We're looking for<br /><span className="text-gradient">people like you</span></>}
          subtitle="Any Sudanese professional — living abroad or returned home — in any field. Just 1 hour per month."
        />

        {/* Who we want */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {whyCards.map(({ emoji, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 border border-white/8 hover:bg-white/5 transition-all"
            >
              <div className="text-2xl mb-3">{emoji}</div>
              <p className="text-white font-bold text-sm mb-2">{label}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Application card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl border border-brand-500/20 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.07) 0%, rgba(5,150,105,0.02) 100%)' }}
        >
          <div className="p-8 md:p-10">
            {/* Deadline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold mb-8">
              ⏰ Application deadline: {DEADLINE}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Left: what you need */}
              <div>
                <h3 className="text-white font-bold text-xl mb-6">What you'll need</h3>
                <ul className="space-y-4 mb-8">
                  {needs.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-brand-400" />
                      </div>
                      <span className="text-slate-300 text-sm">{label}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/8">
                  <CheckCircle className="w-4 h-4 text-brand-400 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Accepted mentors will be <span className="text-white font-medium">featured on this website</span> with their photo, bio, field, and LinkedIn profile.
                  </p>
                </div>
              </div>

              {/* Right: CTA */}
              <div className="flex flex-col justify-center">
                <p className="text-slate-300 text-lg leading-relaxed mb-4">
                  The application takes <span className="text-white font-bold">5 minutes</span> and is reviewed on a rolling basis. Early applicants are contacted first.
                </p>
                <p className="text-slate-500 text-sm mb-8">
                  We'll reach out to accepted mentors before the deadline to confirm your profile and get you matched with your first student.
                </p>
                <a
                  href={MENTOR_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-lg shadow-xl shadow-brand-500/30 hover:-translate-y-1 transition-all"
                >
                  Apply Now — Google Form
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-slate-500 text-xs mt-3 text-center">
                  Opens in a new tab · Free · No prior teaching experience needed
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
