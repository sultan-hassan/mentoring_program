import { motion } from 'framer-motion'
import { FileText, Globe, LinkedinIcon, BookOpen, Award, Mic } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

const resources = [
  {
    icon: FileText,
    title: 'CV & Resume Templates',
    description: 'Professional, ATS-optimized CV templates tailored for international job markets — with step-by-step guides.',
    tag: 'Free Download',
    color: 'from-brand-500 to-teal-500',
    tagColor: 'bg-brand-100 text-brand-700',
  },
  {
    icon: Globe,
    title: 'Portfolio Building Guide',
    description: 'Create a personal website that showcases your work. Includes GitHub setup, project documentation, and design tips.',
    tag: 'Workshop',
    color: 'from-violet-500 to-purple-500',
    tagColor: 'bg-violet-100 text-violet-700',
  },
  {
    icon: LinkedinIcon,
    title: 'LinkedIn Optimization',
    description: 'A step-by-step guide to building a LinkedIn profile that attracts recruiters, mentors, and opportunities globally.',
    tag: 'Guide',
    color: 'from-blue-500 to-cyan-500',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    icon: BookOpen,
    title: 'Scholarship Database',
    description: 'Curated list of scholarships, fellowships, and fully-funded programs open to Sudanese students worldwide.',
    tag: 'Regularly Updated',
    color: 'from-gold-500 to-amber-400',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    icon: Award,
    title: 'Interview Preparation',
    description: 'Mock interview guides, common technical and behavioral questions, and practice frameworks for top-tier companies.',
    tag: 'Practice Sessions',
    color: 'from-rose-500 to-pink-500',
    tagColor: 'bg-rose-100 text-rose-700',
  },
  {
    icon: Mic,
    title: 'Networking Masterclass',
    description: 'Learn how to reach out to professionals, write cold emails, attend conferences, and build a lasting professional network.',
    tag: 'Video Series',
    color: 'from-indigo-500 to-blue-400',
    tagColor: 'bg-indigo-100 text-indigo-700',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
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
          badge="Free Resources"
          title={<>Everything you need to<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-teal-600">launch your career</span></>}
          subtitle="Practical, real-world resources created by professionals who've been through the process — and want to make it easier for you."
          light
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {resources.map(({ icon: Icon, title, description, tag, color, tagColor }) => (
            <motion.div
              key={title}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-5 h-5 text-white" />
              </div>

              {/* Tag */}
              <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${tagColor}`}>
                {tag}
              </span>

              <h3 className="text-slate-900 font-bold text-lg mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{description}</p>

              <div className="mt-5 flex items-center text-brand-600 text-sm font-semibold group-hover:gap-2 gap-1 transition-all duration-200">
                <span>Access resource</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
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
          <Button variant="primary" size="lg" href="#join">
            Access All Resources Free
          </Button>
          <p className="text-slate-500 text-sm mt-3">No cost, no strings — just knowledge.</p>
        </motion.div>
      </div>
    </section>
  )
}
