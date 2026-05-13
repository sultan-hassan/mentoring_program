import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, MapPin, Briefcase, LinkedinIcon, FileText, ImageIcon, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import SectionHeader from '../ui/SectionHeader'
import { FORMSPREE_MENTOR_ID, DEADLINE } from '../../config'

const ENDPOINT = `https://formspree.io/f/${FORMSPREE_MENTOR_ID}`

const languages = ['Arabic', 'English', 'French', 'Other']

function Field({ label, required, icon: Icon, children, hint }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {hint && <p className="text-xs text-slate-400 mb-2">{hint}</p>}
      <div className="relative">
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

const inputClass = "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
const textareaClass = `${inputClass} resize-none min-h-[110px]`

export default function ApplyMentor() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [agreed, setAgreed] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!agreed) return
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
        setAgreed(false)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="apply-mentor" className="bg-slate-50 py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 50%)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Mentor Application"
          title={<>Apply to be a<br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-teal-600">founding mentor</span></>}
          subtitle="Open to any Sudanese professional, in any field. Just 1 hour per month."
          light
        />

        {/* Deadline banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-amber-50 border border-amber-200 mb-8"
        >
          <span className="text-xl flex-shrink-0">⏰</span>
          <div>
            <p className="text-amber-900 font-semibold text-sm">Application deadline: {DEADLINE}</p>
            <p className="text-amber-700 text-xs mt-0.5">We review applications on a rolling basis. Early applicants will be contacted first.</p>
          </div>
        </motion.div>

        {/* Success state */}
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-10 border border-brand-200 text-center shadow-sm"
          >
            <CheckCircle className="w-14 h-14 text-brand-500 mx-auto mb-5" />
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Application received!</h3>
            <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">
              Thank you for applying. We'll review your application and reach out within a few days. Welcome to the SudanBridge community.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm space-y-6"
          >
            {/* Hidden Formspree config */}
            <input type="hidden" name="_subject" value="New Mentor Application — SudanBridge" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="text" name="_honey" className="hidden" aria-hidden="true" />

            {/* Personal info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Full Name" required icon={User}>
                <input
                  name="full_name"
                  type="text"
                  required
                  placeholder="Your full name"
                  className={inputClass}
                />
              </Field>
              <Field label="Email Address" required icon={Mail}>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </Field>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Country of Residence" required icon={MapPin}>
                <input
                  name="country"
                  type="text"
                  required
                  placeholder="e.g. United Kingdom"
                  className={inputClass}
                />
              </Field>
              <Field label="Current Job Title" required icon={Briefcase}>
                <input
                  name="job_title"
                  type="text"
                  required
                  placeholder="e.g. Software Engineer"
                  className={inputClass}
                />
              </Field>
            </div>

            <Field label="Field / Discipline" required hint="Be as specific or general as you like — any field is welcome.">
              <input
                name="field"
                type="text"
                required
                placeholder="e.g. Medicine, Electrical Engineering, Finance, Architecture..."
                className={inputClass}
              />
            </Field>

            {/* Professional links */}
            <Field label="LinkedIn Profile URL" required icon={LinkedinIcon}>
              <input
                name="linkedin_url"
                type="url"
                required
                placeholder="https://linkedin.com/in/yourname"
                className={inputClass}
              />
            </Field>

            <Field
              label="CV / Resume (Google Drive link)"
              required
              icon={FileText}
              hint="Upload your CV to Google Drive and paste the shareable link here. Set sharing to 'Anyone with the link can view'."
            >
              <input
                name="cv_link"
                type="url"
                required
                placeholder="https://drive.google.com/file/d/..."
                className={inputClass}
              />
            </Field>

            <Field
              label="Profile Photo (Google Drive link)"
              required
              icon={ImageIcon}
              hint="Upload a professional headshot to Google Drive and paste the link here. This will be used on the SudanBridge website."
            >
              <input
                name="photo_link"
                type="url"
                required
                placeholder="https://drive.google.com/file/d/..."
                className={inputClass}
              />
            </Field>

            {/* Bio */}
            <Field
              label="Tell us about yourself"
              required
              hint="2–4 sentences: who you are, what you do, and your connection to Sudan."
            >
              <textarea
                name="bio"
                required
                placeholder="I'm a Sudanese cardiologist based in London. I grew up in Khartoum and moved to the UK for my residency..."
                className={textareaClass}
              />
            </Field>

            <Field
              label="Why do you want to mentor?"
              required
              hint="What motivates you to give your time? There's no wrong answer."
            >
              <textarea
                name="motivation"
                required
                placeholder="I want to give back to the community that shaped me..."
                className={textareaClass}
              />
            </Field>

            {/* Languages */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Languages you can mentor in <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <label key={lang} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="languages"
                      value={lang}
                      className="w-4 h-4 rounded accent-brand-500 cursor-pointer"
                    />
                    <span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">{lang}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Availability <span className="text-red-500">*</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer p-4 rounded-xl border border-slate-200 hover:border-brand-300 hover:bg-brand-50/50 transition-all group">
                <input
                  type="checkbox"
                  name="availability_confirmed"
                  value="yes"
                  required
                  className="mt-0.5 w-4 h-4 rounded accent-brand-500 cursor-pointer flex-shrink-0"
                />
                <span className="text-sm text-slate-700 group-hover:text-slate-900">
                  <span className="font-semibold text-brand-600">I can commit at least 1 hour per month</span> to mentoring a Sudanese student — on my schedule and in a format that works for me.
                </span>
              </label>
            </div>

            {/* Profile consent */}
            <label className="flex items-start gap-3 cursor-pointer p-4 rounded-xl border border-slate-200 hover:border-brand-300 hover:bg-brand-50/50 transition-all group">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded accent-brand-500 cursor-pointer flex-shrink-0"
                required
              />
              <span className="text-sm text-slate-700 group-hover:text-slate-900">
                I agree to have my <span className="font-semibold">name, photo, bio, field, and LinkedIn profile</span> featured on the SudanBridge website as part of the mentor directory.
              </span>
            </label>

            {/* Error message */}
            {status === 'error' && (
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <button
              type="submit"
              disabled={!agreed || status === 'submitting'}
              className="w-full py-4 rounded-xl bg-brand-500 hover:bg-brand-400 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-bold text-lg shadow-lg shadow-brand-500/25 hover:-translate-y-0.5 disabled:transform-none transition-all flex items-center justify-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting…
                </>
              ) : (
                <>
                  Submit Mentor Application
                  <Clock className="w-5 h-5" />
                </>
              )}
            </button>

            <p className="text-center text-xs text-slate-400">
              Deadline: {DEADLINE} · Your data is kept private and used only for SudanBridge mentorship matching.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  )
}
