import { motion } from 'framer-motion'
import { ArrowRight, Users, GraduationCap, Building2, Sparkles } from 'lucide-react'
import { MENTOR_FORM_URL, STUDENT_FORM_URL, CONTACT_EMAIL } from '../../config'

const paths = [
  {
    icon: GraduationCap,
    title: 'I\'m a Student',
    description: 'Ready to connect with a Sudanese professional who gets where you\'re from and knows where you\'re going?',
    cta: 'Find My Mentor',
    href: STUDENT_FORM_URL,
    color: 'brand',
    gradient: 'from-brand-500 to-teal-500',
    glow: 'shadow-brand-500/40',
  },
  {
    icon: Users,
    title: 'I\'m a Professional',
    description: 'Your journey — from Sudan to where you are now — is exactly the story a student needs to hear. Give 2 hours a month.',
    cta: 'Volunteer as Mentor',
    href: MENTOR_FORM_URL,
    color: 'gold',
    gradient: 'from-gold-500 to-amber-400',
    glow: 'shadow-gold-500/40',
  },
  {
    icon: Building2,
    title: 'We\'re an Organization',
    description: 'Partner with us to sponsor programs, host events, or integrate SudanBridge into your CSR or academic initiatives.',
    cta: 'Explore Partnership',
    href: `mailto:${CONTACT_EMAIL}`,
    color: 'violet',
    gradient: 'from-violet-500 to-purple-500',
    glow: 'shadow-violet-500/40',
  },
]

export default function CallToAction() {
  return (
    <section id="join" className="bg-night-950 py-24 lg:py-32 relative overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(16,185,129,0.12) 0%, transparent 60%)',
        }}
      />
      <div className="absolute inset-0 grid-overlay opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-600/10 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            The future starts with one conversation
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-8">
            <span className="text-white">The next</span>
            <br />
            <span className="text-gradient">Sudanese leader</span>
            <br />
            <span className="text-white">is waiting</span>
            <br />
            <span className="text-gradient-gold">for you.</span>
          </h2>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Whether you're a student reaching for a dream or a professional ready to give back — there's a role for you in this community.
          </p>
        </motion.div>

        {/* Three paths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {paths.map(({ icon: Icon, title, description, cta, href, gradient, glow }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg ${glow}`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8 flex-1">{description}</p>
              <a
                href={href}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r ${gradient} text-white font-semibold shadow-lg ${glow} hover:-translate-y-0.5 transition-all duration-200`}
              >
                {cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Final emotional close */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <div
            className="inline-block rounded-3xl px-10 py-10 border border-brand-500/20 max-w-3xl"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(5,150,105,0.03))' }}
          >
            <p className="text-3xl md:text-4xl font-bold text-white leading-snug mb-6">
              "The distance between Sudan and the world{' '}
              <span className="text-gradient">shrinks</span>{' '}
              one mentorship at a time."
            </p>
            <p className="text-brand-400 font-semibold mb-8">— SudanBridge</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={STUDENT_FORM_URL}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-lg shadow-xl shadow-brand-500/30 hover:-translate-y-1 transition-all"
              >
                Join the Community
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-lg border border-white/20 hover:border-white/40 hover:-translate-y-1 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
