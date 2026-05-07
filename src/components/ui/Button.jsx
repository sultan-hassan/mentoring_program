import { motion } from 'framer-motion'

export default function Button({ children, variant = 'primary', size = 'md', className = '', onClick, href, ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none'

  const variants = {
    primary:   'bg-brand-500 hover:bg-brand-400 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-400/40 hover:-translate-y-0.5',
    secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 hover:-translate-y-0.5',
    outline:   'bg-transparent border-2 border-brand-500 text-brand-400 hover:bg-brand-500 hover:text-white hover:-translate-y-0.5',
    gold:      'bg-gold-500 hover:bg-gold-400 text-night-950 font-bold shadow-lg shadow-gold-500/30 hover:shadow-gold-400/40 hover:-translate-y-0.5',
    ghost:     'text-slate-400 hover:text-white hover:bg-white/5',
  }

  const sizes = {
    sm:  'px-4 py-2 text-sm',
    md:  'px-6 py-3 text-base',
    lg:  'px-8 py-4 text-lg',
    xl:  'px-10 py-5 text-xl',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
