import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { CONTACT_EMAIL, DEADLINE } from '../../config'

const faqs = [
  {
    q: 'Who can apply as a mentor?',
    a: 'Any Sudanese professional — living abroad or returned home — in any field. Whether you\'re an engineer, doctor, teacher, entrepreneur, designer, lawyer, or anything else, your experience is valuable. No prior teaching experience needed.',
  },
  {
    q: 'How much time does it take?',
    a: 'Just 1 hour per month. One session with one student, on your schedule, in your timezone. The format is flexible — video call, voice call, or async chat — whatever works for you.',
  },
  {
    q: 'What is the application deadline?',
    a: `The deadline to apply for our founding cohort is ${DEADLINE}. We review applications on a rolling basis, so earlier applicants are contacted first. Once accepted, your profile will be featured on the SudanBridge website.`,
  },
  {
    q: 'What happens after I apply?',
    a: 'We\'ll review your application and reach out to confirm your profile. Accepted mentors are featured on the website with their photo, bio, field, and LinkedIn, and matched with a student in their area.',
  },
  {
    q: 'Is this free for students?',
    a: 'Yes — completely free, always. Every mentorship session, resource, and event on SudanBridge is available at no cost to students.',
  },
  {
    q: 'Can sessions be in Arabic?',
    a: 'Absolutely. Mentors and students choose their preferred language. Sessions can be fully in Arabic, fully in English, or a mix — whatever works best for both.',
  },
]

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open ? 'border-brand-200 bg-brand-50/50' : 'border-slate-200 bg-white hover:border-slate-300'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
      >
        <span className={`font-semibold text-sm leading-snug transition-colors ${open ? 'text-brand-700' : 'text-slate-900'}`}>
          {q}
        </span>
        <span className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center transition-all ${
          open ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
        }`}>
          {open ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 py-20 lg:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(16,185,129,0.05) 0%, transparent 50%)' }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title={<>Common <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-teal-600">questions</span></>}
          light
        />
        <div className="space-y-3 mb-10">
          {faqs.map((faq, i) => <FAQItem key={faq.q} {...faq} index={i} />)}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm"
        >
          More questions?{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-600 hover:text-brand-700 font-semibold transition-colors">
            Email us →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
