import { motion } from 'framer-motion'
import { FileText, Globe, LinkedinIcon, BookOpen, Award, Mic } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { MENTOR_FORM_URL } from '../../config'

const planned = [
  { icon: FileText,     title: 'CV & Resume Guides',         desc: 'Practical templates and walkthroughs for writing a CV that works for international job applications and scholarship programs.' },
  { icon: Globe,        title: 'Portfolio Building',          desc: 'Step-by-step guidance on creating an online presence — GitHub profiles, personal websites, and project showcases.' },
  { icon: LinkedinIcon, title: 'LinkedIn & Networking',       desc: 'How to build a professional LinkedIn profile, reach out to people in your field, and grow a network that opens doors.' },
  { icon: BookOpen,     title: 'Scholarships & Fellowships',  desc: 'Guides to finding, applying for, and winning scholarships and fully-funded programs available to Sudanese students.' },
  { icon: Award,        title: 'Interview Preparation',       desc: 'Frameworks and practice materials for technical and behavioral interviews at universities and companies worldwide.' },
  { icon: Mic,          title: 'Career Path Stories',         desc: 'First-person accounts from Sudanese professionals about how they got to where they are — the real path, not the polished version.' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Resources() {
  return (
    <section id="resources" className="bg-slate-50 py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 15% 85%, rgba(16,185,129,0.07) 0%, transparent 50%), radial-gradient(circle at 85% 15%, rgba(99,102,241,0.07) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Resources"
          title={<>What we're<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-teal-600">building together</span></>}
          subtitle="We're developing free, practical resources covering the things that matter most for Sudanese students — built with input from our mentors and published here as they're ready."
          light
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {planned.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 group hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center mb-4 group-hover:bg-brand-50 transition-colors">
                <Icon className="w-5 h-5 text-slate-400 group-hover:text-brand-500 transition-colors" />
              </div>
              <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 mb-3">
                Coming soon
              </span>
              <h3 className="text-slate-900 font-bold text-base mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block px-8 py-5 rounded-2xl bg-gradient-to-r from-brand-50 to-teal-50 border border-brand-100 max-w-2xl">
            <p className="text-slate-700 font-medium mb-4">
              All resources will be free and open to every Sudanese student. Want to help shape them?
            </p>
            <a
              href={MENTOR_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-semibold shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 transition-all text-sm"
            >
              Apply as a Mentor — Help Us Build This
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
