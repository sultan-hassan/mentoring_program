import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import Button from '../ui/Button'
import { MENTOR_FORM_URL, STUDENT_FORM_URL } from '../../config'

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Areas',        href: '#areas' },
  { label: 'Impact',       href: '#impact' },
  { label: 'Resources',    href: '#resources' },
  { label: 'Events',       href: '#events' },
  { label: 'FAQ',          href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-night-950/95 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center shadow-lg shadow-brand-500/40 group-hover:shadow-brand-400/60 transition-shadow">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Sudan<span className="text-brand-400">Bridge</span>
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="secondary" size="sm" href={MENTOR_FORM_URL}>
                Become a Mentor
              </Button>
              <Button variant="primary" size="sm" href={STUDENT_FORM_URL}>
                Find a Mentor
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-night-950/98 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-all font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
                <Button variant="secondary" href={MENTOR_FORM_URL} className="w-full justify-center">
                  Become a Mentor
                </Button>
                <Button variant="primary" href={STUDENT_FORM_URL} className="w-full justify-center">
                  Find a Mentor
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
