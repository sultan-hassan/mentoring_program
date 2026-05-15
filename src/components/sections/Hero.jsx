import { motion } from 'framer-motion'
import { ArrowRight, Users, Sparkles } from 'lucide-react'
import Button from '../ui/Button'
import { MENTOR_FORM_URL, STUDENT_FORM_URL, DEADLINE } from '../../config'

const SUDAN = { x: 265, y: 235 }

const CITIES = [
  { x: 115, y: 108, name: 'London',    flag: '🇬🇧', delay: 0.2 },
  { x: 55,  y: 158, name: 'New York',  flag: '🇺🇸', delay: 0.5 },
  { x: 70,  y: 128, name: 'Toronto',   flag: '🇨🇦', delay: 0.7 },
  { x: 160, y: 95,  name: 'Berlin',    flag: '🇩🇪', delay: 0.9 },
  { x: 375, y: 128, name: 'Dubai',     flag: '🇦🇪', delay: 0.3 },
  { x: 415, y: 218, name: 'Singapore', flag: '🇸🇬', delay: 1.0 },
  { x: 255, y: 148, name: 'Cairo',     flag: '🇪🇬', delay: 0.1 },
  { x: 405, y: 335, name: 'Sydney',    flag: '🇦🇺', delay: 1.2 },
  { x: 88,  y: 315, name: 'São Paulo', flag: '🇧🇷', delay: 0.85 },
  { x: 338, y: 158, name: 'Riyadh',   flag: '🇸🇦', delay: 0.4 },
]

function GlobeVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative w-full max-w-[500px] mx-auto lg:mx-0"
    >
      <svg viewBox="0 0 500 480" className="w-full h-auto drop-shadow-2xl" aria-hidden="true">
        {/* Outer glow circle */}
        <defs>
          <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#059669" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#020817" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="sudanGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#10b981" stopOpacity="1" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background glow */}
        <circle cx="240" cy="230" r="200" fill="url(#globeGrad)" />

        {/* Globe outline */}
        <circle cx="240" cy="230" r="175" fill="none" stroke="#10b981" strokeWidth="0.5" strokeOpacity="0.2" />

        {/* Latitude rings */}
        {[55, 80, 105, 130, 155, 180, 205].map((offset, i) => (
          <ellipse
            key={i}
            cx="240"
            cy={230 - 175 + offset + 17}
            rx={Math.sqrt(Math.max(0, 175 * 175 - Math.pow(175 - offset - 17, 2)))}
            ry="12"
            fill="none"
            stroke="#10b981"
            strokeWidth="0.4"
            strokeOpacity="0.15"
          />
        ))}

        {/* Longitude arcs */}
        {[-90, -45, 0, 45, 90].map((angle, i) => (
          <ellipse
            key={i}
            cx="240"
            cy="230"
            rx={Math.abs(Math.cos((angle * Math.PI) / 180) * 40)}
            ry="175"
            fill="none"
            stroke="#10b981"
            strokeWidth="0.4"
            strokeOpacity="0.12"
          />
        ))}

        {/* Connection lines from Sudan to each city */}
        {CITIES.map((city) => (
          <motion.path
            key={city.name}
            d={`M ${SUDAN.x} ${SUDAN.y} Q ${(SUDAN.x + city.x) / 2 + (Math.random() > 0.5 ? 30 : -30)} ${(SUDAN.y + city.y) / 2 - 40} ${city.x} ${city.y}`}
            stroke="#10b981"
            strokeWidth="1"
            fill="none"
            strokeOpacity="0"
            initial={{ pathLength: 0, strokeOpacity: 0 }}
            animate={{ pathLength: 1, strokeOpacity: 0.45 }}
            transition={{ duration: 1.8, delay: city.delay + 0.5, ease: 'easeOut' }}
          />
        ))}

        {/* City dots with pulsing rings */}
        {CITIES.map((city) => (
          <motion.g
            key={city.name + '-dot'}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: city.delay + 1.2 }}
          >
            {/* Pulse ring */}
            <motion.circle
              cx={city.x}
              cy={city.y}
              r="6"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1"
              animate={{ r: [6, 14], opacity: [0.6, 0] }}
              transition={{ duration: 2, delay: city.delay + 1.5, repeat: Infinity, repeatDelay: 1.5 }}
            />
            <circle cx={city.x} cy={city.y} r="3.5" fill="#f59e0b" filter="url(#glow)" />
            <circle cx={city.x} cy={city.y} r="2" fill="#fcd34d" />
          </motion.g>
        ))}

        {/* Sudan (home) dot — larger, emerald, glowing */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.circle
            cx={SUDAN.x}
            cy={SUDAN.y}
            r="10"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.5"
            animate={{ r: [10, 22], opacity: [0.7, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
          />
          <motion.circle
            cx={SUDAN.x}
            cy={SUDAN.y}
            r="16"
            fill="none"
            stroke="#10b981"
            strokeWidth="0.8"
            strokeOpacity="0.3"
            animate={{ r: [16, 28], opacity: [0.3, 0] }}
            transition={{ duration: 2.5, delay: 0.4, repeat: Infinity, repeatDelay: 0.5 }}
          />
          <circle cx={SUDAN.x} cy={SUDAN.y} r="7" fill="#059669" filter="url(#glow)" />
          <circle cx={SUDAN.x} cy={SUDAN.y} r="4.5" fill="#10b981" />
          <circle cx={SUDAN.x} cy={SUDAN.y} r="2" fill="#6ee7b7" />
        </motion.g>

        {/* City flag labels */}
        {CITIES.map((city) => (
          <motion.text
            key={city.name + '-label'}
            x={city.x}
            y={city.y - 10}
            textAnchor="middle"
            className="text-xs"
            style={{ fontSize: '11px', fill: '#94a3b8' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: city.delay + 1.5, duration: 0.4 }}
          >
            {city.flag}
          </motion.text>
        ))}

        {/* Sudan label */}
        <motion.text
          x={SUDAN.x}
          y={SUDAN.y + 22}
          textAnchor="middle"
          style={{ fontSize: '11px', fill: '#10b981', fontWeight: '600' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          🇸🇩 Sudan
        </motion.text>
      </svg>

      {/* Launch status badge */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
        className="absolute top-8 left-0 glass rounded-2xl px-4 py-3 text-sm animate-float"
        style={{ animationDelay: '0s' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span className="text-white font-semibold">Now Launching</span>
        </div>
        <p className="text-slate-400 text-xs mt-0.5">Mentors & volunteers welcome</p>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-night-950">
      {/* Background: animated gradient + grid */}
      <div className="absolute inset-0 animated-gradient-bg" />
      <div className="absolute inset-0 grid-overlay" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-600/15 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-950/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8"
            >
              <Sparkles className="w-3.5 h-3.5" />
              A Global Community Initiative
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight mb-8"
            >
              <span className="text-white">Connecting</span>
              <br />
              <span className="text-gradient">Sudanese Youth</span>
              <br />
              <span className="text-white">With Global</span>
              <br />
              <span className="text-gradient-gold">Talent</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl"
            >
              Sudanese professionals living abroad share their knowledge with the next generation at home. Mentorship, career guidance, and community — all in one place.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <div className="flex flex-col items-center sm:items-start gap-1">
                <Button variant="primary" size="lg" href={STUDENT_FORM_URL}>
                  Find a Mentor
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <span className="text-slate-500 text-xs">Applications open {DEADLINE}</span>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-1">
                <Button variant="secondary" size="lg" href={MENTOR_FORM_URL}>
                  <Users className="w-5 h-5" />
                  Become a Mentor
                </Button>
                <span className="text-slate-500 text-xs">Deadline: {DEADLINE}</span>
              </div>
            </motion.div>

            {/* Launch call */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-10 flex items-start gap-3 px-5 py-4 rounded-2xl bg-brand-500/8 border border-brand-500/20"
            >
              <div className="w-2 h-2 rounded-full bg-brand-400 mt-1.5 animate-pulse flex-shrink-0" />
              <p className="text-slate-300 text-sm leading-relaxed">
                <span className="text-brand-400 font-semibold">We're just getting started.</span>{' '}
                If you're a Sudanese professional anywhere in the world and can spare just{' '}
                <span className="text-white font-semibold">1 hour per month</span>, we want you.
              </p>
            </motion.div>
          </div>

          {/* Right: globe */}
          <div className="flex items-center justify-center lg:justify-end">
            <GlobeVisual />
          </div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-500 text-xs uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-brand-500/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
