import { motion } from 'framer-motion'
import { Code2, Brain, Stethoscope, Lightbulb, BarChart3, Palette, GraduationCap, Database, Layers, Shield } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const areas = [
  { icon: Code2,          label: 'Software Engineering',  desc: 'Web, mobile, backend, frontend, systems', color: 'from-blue-500 to-cyan-500',    bg: 'bg-blue-500/10',    border: 'border-blue-500/20',    text: 'text-blue-400' },
  { icon: Brain,          label: 'AI & Machine Learning', desc: 'Deep learning, NLP, computer vision',     color: 'from-violet-500 to-purple-500', bg: 'bg-violet-500/10',  border: 'border-violet-500/20',  text: 'text-violet-400' },
  { icon: Stethoscope,    label: 'Medicine & Healthcare', desc: 'Clinical, research, global health',       color: 'from-rose-500 to-pink-500',     bg: 'bg-rose-500/10',    border: 'border-rose-500/20',    text: 'text-rose-400' },
  { icon: Lightbulb,      label: 'Entrepreneurship',      desc: 'Startups, venture, product building',    color: 'from-gold-500 to-amber-400',   bg: 'bg-gold-500/10',    border: 'border-gold-500/20',    text: 'text-gold-400' },
  { icon: BarChart3,      label: 'Finance & Investing',   desc: 'Investment banking, fintech, trading',   color: 'from-brand-500 to-teal-400',   bg: 'bg-brand-500/10',   border: 'border-brand-500/20',   text: 'text-brand-400' },
  { icon: Palette,        label: 'Design & UX',           desc: 'Product design, branding, interaction',  color: 'from-pink-500 to-rose-400',    bg: 'bg-pink-500/10',    border: 'border-pink-500/20',    text: 'text-pink-400' },
  { icon: GraduationCap,  label: 'Academia & Research',   desc: 'PhDs, fellowships, academic careers',    color: 'from-indigo-500 to-blue-500',  bg: 'bg-indigo-500/10',  border: 'border-indigo-500/20',  text: 'text-indigo-400' },
  { icon: Database,       label: 'Data Science',          desc: 'Analytics, BI, statistical modeling',    color: 'from-teal-500 to-cyan-400',    bg: 'bg-teal-500/10',    border: 'border-teal-500/20',    text: 'text-teal-400' },
  { icon: Layers,         label: 'Product Management',    desc: 'Strategy, roadmap, user research',       color: 'from-orange-500 to-amber-400', bg: 'bg-orange-500/10',  border: 'border-orange-500/20',  text: 'text-orange-400' },
  { icon: Shield,         label: 'Cybersecurity',         desc: 'InfoSec, ethical hacking, cloud security', color: 'from-red-500 to-rose-400',  bg: 'bg-red-500/10',     border: 'border-red-500/20',     text: 'text-red-400' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const card = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function MentorshipAreas() {
  return (
    <section id="areas" className="bg-night-900 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Mentorship Areas"
          title={<>Find your<br /><span className="text-gradient">career path</span></>}
          subtitle="Whether you're drawn to code, medicine, art, or business — there's a Sudanese professional abroad who's walked that path and wants to guide you."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {areas.map(({ icon: Icon, label, desc, color, bg, border, text }) => (
            <motion.div
              key={label}
              variants={card}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`group glass rounded-2xl p-6 border ${border} hover:bg-white/8 transition-all duration-300 cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl ${bg} border ${border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-5 h-5 ${text}`} />
              </div>
              <h3 className="text-white font-semibold text-sm leading-snug mb-2">{label}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              <div className={`mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${color} rounded-full transition-all duration-500`} />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-slate-500 mt-10 text-sm"
        >
          Don't see your field?{' '}
          <a href="mailto:hello@sudanbridge.org" className="text-brand-400 hover:text-brand-300 transition-colors font-medium">
            Request it →
          </a>
        </motion.p>
      </div>
    </section>
  )
}
