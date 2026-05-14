import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { MENTOR_FORM_URL } from '../../config'

// Placeholder profiles — replace with real mentor data as applications come in
const mentors = [
  { seed: 'Layla',   name: 'Layla A.',   title: 'Software Engineer',       location: 'Toronto, Canada',    field: 'Technology',      color: '#059669' },
  { seed: 'Karim',   name: 'Karim H.',   title: 'Medical Doctor',          location: 'London, UK',         field: 'Medicine',        color: '#2563eb' },
  { seed: 'Fatima',  name: 'Fatima O.',  title: 'Data Scientist',          location: 'Berlin, Germany',    field: 'Data & AI',       color: '#7c3aed' },
  { seed: 'Tariq',   name: 'Tariq M.',   title: 'Finance Analyst',         location: 'Dubai, UAE',         field: 'Finance',         color: '#d97706' },
  { seed: 'Salma',   name: 'Salma K.',   title: 'UX / Product Designer',   location: 'Amsterdam, NL',      field: 'Design',          color: '#db2777' },
  { seed: 'Bashir',  name: 'Bashir F.',  title: 'Civil Engineer',          location: 'Sydney, Australia',  field: 'Engineering',     color: '#0d9488' },
  { seed: 'Nour',    name: 'Nour S.',    title: 'PhD Researcher',          location: 'Edinburgh, UK',      field: 'Academia',        color: '#4338ca' },
  { seed: 'Ziad',    name: 'Ziad R.',    title: 'Entrepreneur',            location: 'Stockholm, Sweden',  field: 'Business',        color: '#e11d48' },
]

function Avatar({ seed, name, color }) {
  return (
    <img
      src={`https://api.dicebear.com/9.x/thumbs/svg?seed=${seed}&backgroundColor=${color.replace('#', '')}&shapeColor=ffffff`}
      alt={name}
      className="w-16 h-16 rounded-full ring-2 ring-white/10 group-hover:ring-brand-500/50 transition-all"
    />
  )
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function MentorPlaceholders() {
  return (
    <section id="our-mentors" className="bg-night-900 py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Our Mentors"
          title={<>Meet the<br /><span className="text-gradient">founding cohort</span></>}
          subtitle="These spots are filling up. Apply before June 16 to be featured here alongside our first mentors."
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
              key={m.seed}
              variants={card}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 border border-white/8 hover:border-white/16 hover:bg-white/5 transition-all duration-300 text-center group"
            >
              <div className="flex justify-center mb-4">
                <Avatar seed={m.seed} name={m.name} color={m.color} />
              </div>
              <p className="text-white font-semibold text-sm leading-tight mb-0.5">{m.name}</p>
              <p className="text-slate-400 text-xs mb-1">{m.title}</p>
              <p className="text-slate-500 text-xs mb-2">{m.location}</p>
              <span
                className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold border"
                style={{ backgroundColor: `${m.color}18`, color: m.color, borderColor: `${m.color}33` }}
              >
                {m.field}
              </span>
            </motion.div>
          ))}

          {/* "Be next" card */}
          <motion.a
            variants={card}
            href={MENTOR_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-5 border border-dashed border-brand-500/30 hover:border-brand-500/60 hover:bg-brand-500/5 transition-all duration-300 text-center group flex flex-col items-center justify-center min-h-[172px]"
          >
            <div className="w-16 h-16 rounded-full bg-brand-500/10 border-2 border-dashed border-brand-500/40 flex items-center justify-center mb-3 group-hover:border-brand-500/70 transition-all">
              <span className="text-brand-400 text-2xl">+</span>
            </div>
            <p className="text-brand-400 font-semibold text-sm">Could be you</p>
            <p className="text-slate-500 text-xs mt-1">Apply by June 16</p>
          </motion.a>
        </motion.div>

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
