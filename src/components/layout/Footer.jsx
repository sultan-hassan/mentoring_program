import { motion } from 'framer-motion'
import { Globe, Twitter, Linkedin, Github, Mail, Heart } from 'lucide-react'
import { MENTOR_FORM_URL, STUDENT_FORM_URL, CONTACT_EMAIL } from '../../config'

const footerLinks = {
  Platform: [
    { label: 'Find a Mentor',    href: STUDENT_FORM_URL },
    { label: 'Become a Mentor',  href: MENTOR_FORM_URL },
    { label: 'Mentorship Areas', href: '#areas' },
    { label: 'Success Stories',  href: '#testimonials' },
  ],
  Resources: [
    { label: 'CV Templates',      href: '#resources' },
    { label: 'Portfolio Guides',  href: '#resources' },
    { label: 'LinkedIn Tips',     href: '#resources' },
    { label: 'Scholarship Guide', href: '#resources' },
  ],
  Community: [
    { label: 'Events & Workshops', href: '#events' },
    { label: 'Community Impact',   href: '#impact' },
    { label: 'FAQ',                href: '#faq' },
    { label: 'Contact Us',         href: `mailto:${CONTACT_EMAIL}` },
  ],
}

const socials = [
  { Icon: Twitter,  href: '#', label: 'Twitter' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Github,   href: 'https://github.com/sudanbridge', label: 'GitHub' },
  { Icon: Mail,     href: `mailto:${CONTACT_EMAIL}`, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="bg-night-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-6 w-fit group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center shadow-lg shadow-brand-500/30">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                Sudan<span className="text-brand-400">Bridge</span>
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Connecting Sudanese youth with global Sudanese professionals — building the next generation of Sudanese talent, one mentorship at a time.
            </p>
            <p className="text-sm text-slate-500 italic mb-6">
              "Sudanese talent exists everywhere — and the next generation should not grow alone."
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-500/20 hover:border-brand-500/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-slate-400 hover:text-brand-400 transition-colors text-sm"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 SudanBridge. A nonprofit community initiative.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-brand-400 fill-brand-400" /> for the Sudanese community
          </p>
        </div>
      </div>
    </footer>
  )
}
