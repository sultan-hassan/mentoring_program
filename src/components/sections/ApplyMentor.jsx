import { motion } from 'framer-motion'
import { ArrowRight, Clock, LinkedinIcon, FileText, ImageIcon, CheckCircle } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { MENTOR_FORM_URL, DEADLINE } from '../../config'

const requirements = [
  { icon: LinkedinIcon, label: 'LinkedIn profile URL',              note: 'Public or connection-level visibility' },
  { icon: FileText,     label: 'CV / Resume',                       note: 'PDF uploaded to Google Drive — shareable link' },
  { icon: ImageIcon,    label: 'Profile photo',                     note: 'Headshot uploaded to Google Drive — shareable link' },
  { icon: CheckCircle,  label: 'Commitment: 1 hour per month',      note: 'On your schedule, in your timezone' },
]

const steps = [
  { n: '1', text: 'Fill out the application form — takes about 5 minutes.' },
  { n: '2', text: 'Upload your CV and photo to Google Drive and include the shareable links.' },
  { n: '3', text: 'We review applications on a rolling basis and reach out to accepted mentors.' },
  { n: '4', text: 'Accepted mentors are featured on the SudanBridge website and matched with students.' },
]

export default function ApplyMentor() {
  return (
    <section id="apply-mentor" className="bg-slate-50 py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 50%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Mentor Application"
          title={<>Apply to be a<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-teal-600">founding mentor</span></>}
          subtitle="Open to any Sudanese professional, in any field, anywhere in the world. Just 1 hour per month."
          light
        />

        {/* Deadline banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-amber-50 border border-amber-200 mb-8"
        >
          <span className="text-xl flex-shrink-0">⏰</span>
          <div>
            <p className="text-amber-900 font-semibold text-sm">
              Application deadline: {DEADLINE}
            </p>
            <p className="text-amber-700 text-xs mt-0.5">
              We review on a rolling basis — early applicants are contacted first.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* What you'll need */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm"
          >
            <h3 className="text-slate-900 font-bold text-lg mb-5">What you'll need to apply</h3>
            <ul className="space-y-4">
              {requirements.map(({ icon: Icon, label, note }) => (
                <li key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-brand-600" />
                  </div>
                  <div>
                    <p className="text-slate-800 font-semibold text-sm">{label}</p>
                    <p className="text-slate-500 text-xs">{note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* How it works */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm"
          >
            <h3 className="text-slate-900 font-bold text-lg mb-5">How the process works</h3>
            <ol className="space-y-4">
              {steps.map(({ n, text }) => (
                <li key={n} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-brand-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {n}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* Commitment highlight */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-brand-50 border border-brand-100 mb-8"
        >
          <Clock className="w-8 h-8 text-brand-500 flex-shrink-0" />
          <div>
            <p className="text-brand-800 font-bold">Just 1 hour per month.</p>
            <p className="text-brand-600 text-sm">
              One session with one student — on your schedule, in your timezone, in Arabic or English.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center bg-white rounded-2xl p-8 border border-slate-200 shadow-sm"
        >
          <p className="text-slate-600 mb-6 text-base">
            Ready? The application takes about <strong>5 minutes</strong> to complete.
          </p>
          <a
            href={MENTOR_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-lg shadow-xl shadow-brand-500/25 hover:-translate-y-1 transition-all"
          >
            Apply to Mentor — Google Form
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-slate-400 text-xs mt-4">
            Opens in a new tab · Deadline: {DEADLINE} · Responses saved securely
          </p>
        </motion.div>
      </div>
    </section>
  )
}
