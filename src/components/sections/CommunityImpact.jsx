import { motion } from 'framer-motion'
import { Globe2, Users, BookOpen, CalendarCheck } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import AnimatedCounter from '../ui/AnimatedCounter'

const stats = [
  { icon: Users,          end: 150,  suffix: '+',  label: 'Active Mentors',       detail: 'Professionals giving back',  color: 'text-brand-400',  bg: 'bg-brand-500/10',   border: 'border-brand-500/20' },
  { icon: BookOpen,       end: 500,  suffix: '+',  label: 'Students Guided',      detail: 'And growing every month',    color: 'text-gold-400',   bg: 'bg-gold-500/10',    border: 'border-gold-500/20' },
  { icon: CalendarCheck,  end: 1200, suffix: '+',  label: 'Sessions Completed',   detail: 'Hours of shared knowledge',  color: 'text-violet-400', bg: 'bg-violet-500/10',  border: 'border-violet-500/20' },
  { icon: Globe2,         end: 32,   suffix: '',   label: 'Countries Represented', detail: 'A truly global community',  color: 'text-blue-400',   bg: 'bg-blue-500/10',    border: 'border-blue-500/20' },
]

const diasporaNodes = [
  { x: '18%', y: '28%',  size: 10, delay: 0.2,  label: 'USA',       opacity: 0.8 },
  { x: '22%', y: '22%',  size: 7,  delay: 0.4,  label: 'Canada',    opacity: 0.7 },
  { x: '43%', y: '22%',  size: 8,  delay: 0.6,  label: 'UK',        opacity: 0.75 },
  { x: '48%', y: '18%',  size: 6,  delay: 0.3,  label: 'Germany',   opacity: 0.65 },
  { x: '52%', y: '48%',  size: 12, delay: 0,    label: 'Sudan',     opacity: 1,   isHome: true },
  { x: '64%', y: '35%',  size: 8,  delay: 0.5,  label: 'UAE',       opacity: 0.75 },
  { x: '67%', y: '30%',  size: 6,  delay: 0.7,  label: 'Saudi',     opacity: 0.65 },
  { x: '75%', y: '55%',  size: 7,  delay: 0.9,  label: 'Singapore', opacity: 0.7 },
  { x: '80%', y: '68%',  size: 6,  delay: 1.1,  label: 'Australia', opacity: 0.6 },
  { x: '30%', y: '60%',  size: 5,  delay: 0.8,  label: 'Brazil',    opacity: 0.55 },
  { x: '55%', y: '38%',  size: 6,  delay: 0.25, label: 'Egypt',     opacity: 0.65 },
]

export default function CommunityImpact() {
  return (
    <section id="impact" className="bg-night-900 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* World-map inspired dotted background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {diasporaNodes.map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: node.opacity, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: node.delay, duration: 0.6 }}
            className="absolute"
            style={{ left: node.x, top: node.y }}
          >
            <div className="relative">
              {node.isHome ? (
                <>
                  <motion.div
                    animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
                    className="absolute inset-0 rounded-full bg-brand-500"
                    style={{ width: node.size * 2, height: node.size * 2, margin: -(node.size / 2) }}
                  />
                  <div
                    className="rounded-full bg-brand-400 shadow-lg shadow-brand-500/50"
                    style={{ width: node.size * 2, height: node.size * 2 }}
                  />
                </>
              ) : (
                <div
                  className="rounded-full bg-gold-400/60"
                  style={{ width: node.size, height: node.size }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Community Impact"
          title={<>A network that<br /><span className="text-gradient">spans the globe</span></>}
          subtitle="From Khartoum to Silicon Valley, from Omdurman to Dubai — our community is alive, active, and growing."
        />

        {/* Big counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map(({ icon: Icon, end, suffix, label, detail, color, bg, border }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className={`glass rounded-2xl p-6 md:p-8 border ${border} text-center group hover:bg-white/5 transition-all`}
            >
              <div className={`w-12 h-12 rounded-xl ${bg} border ${border} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <p className={`text-4xl md:text-5xl font-black mb-2 ${color}`}>
                <AnimatedCounter end={end} suffix={suffix} />
              </p>
              <p className="text-white font-semibold text-sm mb-1">{label}</p>
              <p className="text-slate-500 text-xs">{detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-8 md:p-12 border border-brand-500/20 text-center max-w-4xl mx-auto"
          style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.07) 0%, rgba(5,150,105,0.03) 100%)' }}
        >
          <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-4">
            "Sudanese talent exists{' '}
            <span className="text-gradient">everywhere</span> — and the next generation should not grow{' '}
            <span className="text-gradient-gold">alone</span>."
          </p>
          <p className="text-brand-400 font-semibold">— The SudanBridge Mission</p>
        </motion.div>
      </div>
    </section>
  )
}
