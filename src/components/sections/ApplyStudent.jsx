import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, MapPin, BookOpen, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { FORMSPREE_STUDENT_ID } from '../../config'

const ENDPOINT = `https://formspree.io/f/${FORMSPREE_STUDENT_ID}`

const levels = ['High school student', 'Undergraduate student', 'Postgraduate student', 'Recent graduate', 'Other']

function Field({ label, required, icon: Icon, children, hint }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {hint && <p className="text-xs text-slate-400 mb-2">{hint}</p>}
      <div className={`relative ${Icon ? '' : ''}`}>
        {Icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <Icon className="w-4 h-4" />
          </span>
        )}
        <div className={Icon ? '[&>*]:pl-10' : ''}>{children}</div>
      </div>
    </div>
  )
}

const inputClass = "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
const textareaClass = `${inputClass} resize-none min-h-[100px]`

export default function ApplyStudent() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    const data = new FormData(e.target)
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="apply-student" className="bg-night-950 py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-30" />
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 100%, rgba(245,158,11,0.08) 0%, transparent 50%)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Student Interest"
          title={<>Register your<br /><span className="text-gradient-gold">interest as a student</span></>}
          subtitle="Tell us about yourself. We'll reach out when we match you with a mentor in your field."
        />

        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-3xl p-10 border border-gold-500/30 text-center"
          >
            <CheckCircle className="w-14 h-14 text-gold-400 mx-auto mb-5" />
            <h3 className="text-2xl font-bold text-white mb-3">You're on the list!</h3>
            <p className="text-slate-400 leading-relaxed max-w-sm mx-auto">
              Thank you for registering. As soon as we have a mentor who matches your field and goals, we'll reach out.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8 md:p-10 border border-white/10 space-y-6"
          >
            <input type="hidden" name="_subject" value="New Student Interest — SudanBridge" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="text" name="_honey" className="hidden" aria-hidden="true" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Full Name" required icon={User}>
                <input name="full_name" type="text" required placeholder="Your full name" className={inputClass} />
              </Field>
              <Field label="Email Address" required icon={Mail}>
                <input name="email" type="email" required placeholder="you@example.com" className={inputClass} />
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Country" required icon={MapPin}>
                <input name="country" type="text" required placeholder="e.g. Sudan" className={inputClass} />
              </Field>
              <Field label="Education Level" required>
                <select name="education_level" required className={inputClass}>
                  <option value="">Select…</option>
                  {levels.map(l => <option key={l} value={l}>{l}</option>)}
                </select>
              </Field>
            </div>

            <Field
              label="Field of Interest"
              required
              icon={BookOpen}
              hint="What career or subject area are you hoping to explore?"
            >
              <input
                name="field_of_interest"
                type="text"
                required
                placeholder="e.g. Computer Science, Medicine, Business, Law…"
                className={inputClass}
              />
            </Field>

            <Field
              label="What are you hoping to get from a mentor?"
              required
              hint="Be honest — career advice, CV help, scholarship guidance, or just someone to talk to."
            >
              <textarea
                name="goals"
                required
                placeholder="I'm finishing high school and want to understand what a career in engineering looks like…"
                className={textareaClass}
              />
            </Field>

            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                Preferred language <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                {['Arabic', 'English', 'Both'].map(lang => (
                  <label key={lang} className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="language" value={lang} required className="accent-gold-500 w-4 h-4" />
                    <span className="text-slate-300 text-sm">{lang}</span>
                  </label>
                ))}
              </div>
            </div>

            {status === 'error' && (
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-4 rounded-xl bg-gold-500 hover:bg-gold-400 disabled:bg-slate-600 disabled:cursor-not-allowed text-night-950 font-bold text-lg shadow-lg shadow-gold-500/25 hover:-translate-y-0.5 disabled:transform-none transition-all flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting…
                </>
              ) : (
                'Register Student Interest'
              )}
            </button>

            <p className="text-center text-xs text-slate-500">
              Your information will only be used to connect you with a mentor. We will never share it with third parties.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  )
}
