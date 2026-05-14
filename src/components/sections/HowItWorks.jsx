import { motion } from 'framer-motion'
import { UserPlus, HandHeart, Users, TrendingUp } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'

const steps = [
  { n: '01', icon: UserPlus,   title: 'Mentors apply',       desc: 'Sudanese professionals from any field sign up and share their experience.',             color: 'from-brand-500 to-teal-500' },
  { n: '02', icon: HandHeart,  title: 'Students register',   desc: 'Students share their goals and what kind of guidance they\'re looking for.',            color: 'from-gold-500 to-amber-400' },
  { n: '03', icon: Users,      title: 'We match them',       desc: 'We connect each student with the most relevant mentor based on field and goals.',       color: 'from-violet-500 to-purple-500' },
  { n: '04', icon: TrendingUp, title: 'Growth happens',      desc: '1 hour a month. Real conversations. Real career progress.',                             color: 'from-rose-500 to-pink-500' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 lg:py-28 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(16,185,129,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(245,158,11,0.05) 0%, transparent 50%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="How It Works"
          title={<>Simple by <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-teal-600">design</span></>}
          subtitle="Four steps from first connection to lasting impact."
          light
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ n, icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.13 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">
                  {i + 1}
                </div>
              </div>
              <h3 className="text-slate-900 font-bold text-base mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
