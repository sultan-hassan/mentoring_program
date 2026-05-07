import { motion } from 'framer-motion'
import { UserPlus, HandHeart, Users, TrendingUp } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Students Join',
    description: 'Sudanese high school and university students sign up, share their goals, interests, and the guidance they\'re seeking.',
    color: 'from-brand-500 to-teal-500',
    glow: 'shadow-brand-500/30',
  },
  {
    number: '02',
    icon: HandHeart,
    title: 'Professionals Volunteer',
    description: 'Sudanese professionals abroad register as mentors — sharing their expertise, experience, and a few hours a month.',
    color: 'from-gold-500 to-amber-400',
    glow: 'shadow-gold-500/30',
  },
  {
    number: '03',
    icon: Users,
    title: 'Smart Matching',
    description: 'We connect students with the most relevant mentors based on field, goals, language, and availability.',
    color: 'from-violet-500 to-purple-500',
    glow: 'shadow-violet-500/30',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Growth & Impact',
    description: 'Students build real skills, portfolios, and networks. Mentors give back. The Sudanese community grows stronger.',
    color: 'from-rose-500 to-pink-500',
    glow: 'shadow-rose-500/30',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 lg:py-32 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(16,185,129,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(245,158,11,0.05) 0%, transparent 50%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="How It Works"
          title={<>Four steps to<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-teal-600">change a life</span></>}
          subtitle="A simple, structured process that creates real mentorship relationships — from first connection to lasting impact."
          light
        />

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map(({ number, icon: Icon, title, description, color, glow }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step number circle */}
                <div className="relative mb-6 z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg ${glow} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center ring-2 ring-white">
                    {index + 1}
                  </div>
                </div>

                {/* Step number (large bg) */}
                <span className="absolute top-0 left-1/2 -translate-x-1/2 text-7xl font-black text-slate-100 leading-none select-none pointer-events-none -z-0">
                  {number}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mb-3 mt-2 relative z-10">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-8 py-5 rounded-2xl bg-gradient-to-r from-brand-50 to-teal-50 border border-brand-100">
            <p className="text-slate-700 text-lg font-medium italic">
              "One hour of guidance can redirect an entire career."
            </p>
            <p className="text-brand-600 text-sm font-semibold mt-2">— The SudanBridge Promise</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
