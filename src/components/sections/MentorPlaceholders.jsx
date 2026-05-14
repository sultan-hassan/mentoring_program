import { motion } from 'framer-motion'
import { LinkedinIcon, ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { MENTOR_FORM_URL } from '../../config'

// Placeholder mentor profiles — replace with real mentors as they apply
const mentors = [
  { id: 1,  name: 'Ahmed Al-Amin',     title: 'Software Engineer',          company: 'London, UK',         field: 'Technology',      img: 'https://i.pravatar.cc/150?img=11' },
  { id: 2,  name: 'Sara Osman',        title: 'Medical Doctor',             company: 'Toronto, Canada',    field: 'Medicine',        img: 'https://i.pravatar.cc/150?img=47' },
  { id: 3,  name: 'Khalid Ibrahim',    title: 'Data Scientist',             company: 'Berlin, Germany',    field: 'Data & AI',       img: 'https://i.pravatar.cc/150?img=15' },
  { id: 4,  name: 'Nadia Hassan',      title: 'Entrepreneur & CEO',         company: 'Dubai, UAE',         field: 'Business',        img: 'https://i.pravatar.cc/150?img=49' },
  { id: 5,  name: 'Yusuf Salim',       title: 'Finance Analyst',            company: 'New York, USA',      field: 'Finance',         img: 'https://i.pravatar.cc/150?img=13' },
  { id: 6,  name: 'Amira Mohammed',    title: 'UX Designer',                company: 'Amsterdam, NL',      field: 'Design',          img: 'https://i.pravatar.cc/150?img=48' },
  { id: 7,  name: 'Omar Al-Rashid',    title: 'PhD Researcher',             company: 'Edinburgh, UK',      field: 'Academia',        img: 'https://i.pravatar.cc/150?img=17' },
  { id: 8,  name: 'Hana Al-Nour',      title: 'Product Manager',            company: 'Stockholm, Sweden',  field: 'Product',         img: 'https://i.pravatar.cc/150?img=44' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function MentorPlaceholders() {
  return (
    <section id="our-mentors" className="bg-night-900 py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Mentors"
          title={<>Meet the<br /><span className="text-gradient">founding cohort</span></>}
          subtitle="These are the Sudanese professionals who step up first. Apply to join them."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-12"
        >
          {mentors.map((m) => (
            <motion.div
              key={m.id}
              variants={card}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 border border-white/8 hover:border-white/16 hover:bg-white/5 transition-all duration-300 text-center group"
            >
              <div className="relative w-16 h-16 mx-auto mb-4">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-brand-500/30 group-hover:ring-brand-500/60 transition-all"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-brand-500 ring-2 ring-night-900 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>
              </div>
              <p className="text-white font-semibold text-sm leading-tight mb-0.5">{m.name}</p>
              <p className="text-slate-400 text-xs mb-1">{m.title}</p>
              <p className="text-slate-500 text-xs">{m.company}</p>
              <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[10px] font-semibold">
                {m.field}
              </span>
            </motion.div>
          ))}

          {/* "Be next" placeholder card */}
          <motion.a
            variants={card}
            href={MENTOR_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-5 border border-dashed border-brand-500/30 hover:border-brand-500/60 hover:bg-brand-500/5 transition-all duration-300 text-center group flex flex-col items-center justify-center min-h-[160px]"
          >
            <div className="w-16 h-16 rounded-full bg-brand-500/10 border-2 border-dashed border-brand-500/40 flex items-center justify-center mx-auto mb-3 group-hover:border-brand-500/70 transition-all">
              <span className="text-brand-400 text-2xl font-light">+</span>
            </div>
            <p className="text-brand-400 font-semibold text-sm">Could be you</p>
            <p className="text-slate-500 text-xs mt-1">Apply before {' '}<br/>June 16</p>
          </motion.a>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={MENTOR_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 transition-all"
          >
            Join the founding cohort
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-slate-500 text-xs mt-3">Deadline: June 16, 2026</p>
        </motion.div>
      </div>
    </section>
  )
}
