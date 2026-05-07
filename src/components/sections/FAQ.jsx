import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const faqs = [
  {
    question: 'Is SudanBridge free for students?',
    answer: 'Yes — completely free. All mentorship sessions, resources, workshops, and events are available at no cost to students. We believe financial barriers should never prevent access to knowledge and guidance.',
  },
  {
    question: 'Who can become a mentor?',
    answer: 'Any Sudanese professional living abroad who wants to give back. Whether you have 5 years of experience or 25, your knowledge is valuable. We welcome engineers, doctors, entrepreneurs, academics, designers, and more.',
  },
  {
    question: 'How many hours does mentorship require per month?',
    answer: 'As little as 2–4 hours per month. You set your own availability, choose how many students you work with, and decide the format — video calls, async messaging, or a mix of both.',
  },
  {
    question: 'How does the matching process work?',
    answer: 'Students fill out a profile with their goals, interests, and the type of guidance they need. We then suggest compatible mentors based on field alignment, availability, language preference, and mentoring style.',
  },
  {
    question: 'Does my Sudanese student need internet access?',
    answer: 'Mentorship sessions are conducted over video call or chat — a stable internet connection is helpful. We\'re actively working to ensure our platform works well even on slower connections.',
  },
  {
    question: 'Are sessions in Arabic or English?',
    answer: 'Both! Mentors and students choose their preferred language. Many sessions are conducted in Arabic, some in English, and some in a mix. We fully support both languages across the platform.',
  },
  {
    question: 'Can organizations or universities partner with SudanBridge?',
    answer: 'Absolutely. We welcome partnerships with universities, NGOs, embassies, and companies who want to support Sudanese youth. Reach out to us at hello@sudanbridge.org to discuss how we can collaborate.',
  },
  {
    question: 'What if I am not Sudanese but want to help?',
    answer: 'We appreciate your support. While our mentor pool focuses on Sudanese diaspora professionals (to preserve cultural connection and relatability), we welcome allies as sponsors, event speakers, and organizational partners.',
  },
]

function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open ? 'border-brand-200 bg-brand-50/50' : 'border-slate-200 bg-white hover:border-slate-300'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
        aria-expanded={open}
      >
        <span className={`font-semibold text-base leading-snug transition-colors ${
          open ? 'text-brand-700' : 'text-slate-900 group-hover:text-slate-700'
        }`}>
          {question}
        </span>
        <span className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
          open ? 'bg-brand-500 text-white rotate-0' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
        }`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="px-6 pb-5 text-slate-600 leading-relaxed text-sm md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-slate-50 py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(16,185,129,0.06) 0%, transparent 50%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title={<>Questions we<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-teal-600">always get asked</span></>}
          subtitle="Everything you need to know about SudanBridge — for students, mentors, and partners."
          light
        />

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.question} {...faq} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-500">
            Still have questions?{' '}
            <a href="mailto:hello@sudanbridge.org" className="text-brand-600 hover:text-brand-700 font-semibold transition-colors">
              Email us at hello@sudanbridge.org →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
