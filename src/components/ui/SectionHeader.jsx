import { motion } from 'framer-motion'

export default function SectionHeader({ badge, title, subtitle, light = false, center = true, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`mb-16 ${center ? 'text-center' : ''} ${className}`}
    >
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-5 ${
          light
            ? 'bg-brand-100 text-brand-700'
            : 'bg-brand-500/10 text-brand-400 border border-brand-500/20'
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${
        light ? 'text-slate-900' : 'text-white'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl leading-relaxed max-w-3xl ${center ? 'mx-auto' : ''} ${
          light ? 'text-slate-600' : 'text-slate-400'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
