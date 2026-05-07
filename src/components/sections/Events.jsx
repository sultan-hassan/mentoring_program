import { motion } from 'framer-motion'
import { Calendar, Clock, Users, ArrowRight, Video, Mic2, PenLine } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

const events = [
  {
    icon: Video,
    type: 'Virtual Talk',
    title: 'Breaking Into Big Tech: A Sudanese Engineer\'s Journey',
    date: 'June 14, 2025',
    time: '7:00 PM EAT',
    speaker: 'Ahmed Mustafa',
    speakerRole: 'Staff Engineer at Meta, London',
    spots: 48,
    spotsLeft: 12,
    color: 'from-brand-500 to-teal-500',
    badge: 'bg-brand-500/15 text-brand-400 border-brand-500/30',
  },
  {
    icon: PenLine,
    type: 'Workshop',
    title: 'CV & LinkedIn Masterclass: Get Noticed by Global Recruiters',
    date: 'June 21, 2025',
    time: '5:00 PM EAT',
    speaker: 'Hana Al-Nour',
    speakerRole: 'Talent Lead at Spotify, Stockholm',
    spots: 30,
    spotsLeft: 7,
    color: 'from-gold-500 to-amber-400',
    badge: 'bg-gold-500/15 text-gold-400 border-gold-500/30',
  },
  {
    icon: Mic2,
    type: 'Panel',
    title: 'Paths to Medicine Abroad: Scholarships, Residencies & Research',
    date: 'July 3, 2025',
    time: '6:30 PM EAT',
    speaker: 'Dr. Sara Fadlalla + 3 panelists',
    speakerRole: 'Cardiologist, NHS London',
    spots: 80,
    spotsLeft: 34,
    color: 'from-violet-500 to-purple-500',
    badge: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
  },
]

export default function Events() {
  return (
    <section id="events" className="bg-white py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(circle at 10% 50%, rgba(16,185,129,0.06) 0%, transparent 40%), radial-gradient(circle at 90% 50%, rgba(245,158,11,0.06) 0%, transparent 40%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Events & Workshops"
          title={<>Learn from the<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-teal-600">best in the world</span></>}
          subtitle="Free virtual events featuring Sudanese professionals sharing their stories, expertise, and guidance. Live Q&As, workshops, and networking."
          light
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {events.map(({ icon: Icon, type, title, date, time, speaker, speakerRole, spots, spotsLeft, color, badge }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${color}`} />

              <div className="p-6">
                {/* Type badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badge}`}>
                    <Icon className="w-3 h-3" />
                    {type}
                  </span>
                  <span className="text-xs font-semibold text-rose-500 bg-rose-50 px-2 py-1 rounded-full">
                    {spotsLeft} spots left
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-slate-900 font-bold text-lg leading-snug mb-4 group-hover:text-brand-600 transition-colors">
                  {title}
                </h3>

                {/* Meta */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    {date}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    {time}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Users className="w-4 h-4 flex-shrink-0" />
                    {spots} attendees max
                  </div>
                </div>

                {/* Speaker */}
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-slate-900 font-semibold text-sm">{speaker}</p>
                  <p className="text-slate-500 text-xs">{speakerRole}</p>
                </div>

                {/* Spots bar */}
                <div className="mt-4">
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${((spots - spotsLeft) / spots) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className={`h-full bg-gradient-to-r ${color} rounded-full`}
                    />
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {spots - spotsLeft} / {spots} registered
                  </p>
                </div>

                {/* CTA */}
                <button className="mt-5 w-full py-2.5 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-brand-500 hover:text-brand-600 hover:bg-brand-50 transition-all duration-200 flex items-center justify-center gap-2 group/btn">
                  Register Free
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" href="#events">
            View All Events
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
