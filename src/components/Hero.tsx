import { motion } from 'framer-motion'
import { personal } from '../data'

const socialLinks = [
  {
    label: 'Email',
    href: `mailto:${personal.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: `https://${personal.linkedin}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: `https://${personal.github}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
]

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
} as const

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
} as const

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-1 absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-violet-700/15 blur-[100px]" />
        <div className="blob-2 absolute bottom-[-15%] right-[-5%] w-[700px] h-[700px] rounded-full bg-cyan-600/10 blur-[120px]" />
        <div className="blob-3 absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full bg-indigo-700/10 blur-[80px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          className="flex flex-col items-start gap-6"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-xs font-mono text-violet-400 border border-violet-500/30 rounded-full px-4 py-1.5 bg-violet-500/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight"
          >
            <span className="text-white">Celso</span>{' '}
            <span className="gradient-text">Leao</span>
          </motion.h1>

          <motion.div variants={fadeUp} className="flex flex-col gap-1">
            <p className="text-xl md:text-2xl font-semibold text-slate-200">
              Senior Software Engineer
            </p>
            <p className="text-base text-slate-400 font-mono">
              Full Stack · AI Integration Specialist
            </p>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-lg leading-relaxed max-w-xl"
          >
            {personal.summary}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
            <motion.a
              href="#experience"
              className="px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              View Experience
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-slate-600 hover:border-violet-500 text-slate-300 hover:text-white font-semibold text-sm transition-all hover:bg-violet-500/10"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-4 pt-1">
            {socialLinks.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-slate-700/60 text-slate-400 hover:text-violet-400 hover:border-violet-500/50 transition-all hover:bg-violet-500/10"
                aria-label={s.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {s.icon}
              </motion.a>
            ))}
            <span className="text-slate-600 text-sm ml-1 font-mono">
              {personal.location}
            </span>
          </motion.div>
        </motion.div>

        {/* Right: Visual */}
        <motion.div
          className="flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Outer orbit ring */}
          <motion.div
            className="absolute w-80 h-80 rounded-full border border-violet-500/15"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
          </motion.div>

          {/* Middle orbit ring */}
          <motion.div
            className="absolute w-56 h-56 rounded-full border border-cyan-500/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
          </motion.div>

          {/* Inner orbit ring */}
          <motion.div
            className="absolute w-36 h-36 rounded-full border border-indigo-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
          </motion.div>

          {/* Center avatar */}
          <motion.div
            className="relative z-10 w-36 h-36 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-[0_0_60px_rgba(139,92,246,0.5)]"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-4xl font-black text-white tracking-tight">CL</span>
          </motion.div>

          {/* Floating tech badges */}
          {[
            { label: 'C# .NET', x: 140, y: -60 },
            { label: 'React', x: -150, y: -40 },
            { label: 'Claude AI', x: 120, y: 80 },
            { label: 'SQL Server', x: -130, y: 90 },
            { label: 'MCP', x: 0, y: -130 },
          ].map((badge, i) => (
            <motion.div
              key={badge.label}
              className="absolute px-3 py-1.5 rounded-full text-xs font-mono font-medium border border-slate-700/60 bg-[#0f0f1a]/80 text-slate-300 backdrop-blur-sm whitespace-nowrap"
              style={{ x: badge.x, y: badge.y }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.5, ease: 'backOut' }}
              whileHover={{ scale: 1.1, borderColor: 'rgba(139,92,246,0.6)' }}
            >
              {badge.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-slate-500 font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-violet-500/60 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
