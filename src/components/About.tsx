import { motion } from 'framer-motion'
import { personal, languages } from '../data'

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: 'easeOut' as const } },
} as const)

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-[#0a0a12]">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Stats bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {personal.stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp()}
              className="relative rounded-2xl border border-slate-800/60 bg-[#0f0f1a] p-6 text-center group hover:border-violet-500/30 transition-colors overflow-hidden"
              whileHover={{ y: -4, boxShadow: '0 10px 40px rgba(139,92,246,0.15)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-4xl font-black gradient-text mb-1">{stat.value}</p>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* About content + Languages */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Summary text */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp(0)}
          >
            <div>
              <span className="text-xs font-mono text-violet-400 uppercase tracking-widest border border-violet-500/25 rounded-full px-3 py-1 bg-violet-500/5">
                About Me
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-white">20+ Years Building</span>{' '}
              <span className="gradient-text">Enterprise Software</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">{personal.summary}</p>
            <p className="text-slate-400 leading-relaxed">
              Currently at{' '}
              <span className="text-white font-semibold">UKG (Ultimate Kronos Group)</span>, I build
              HR software used by <span className="text-violet-400">Microsoft, Google, and Tesla</span>,
              while pioneering AI-assisted engineering workflows — from MCP integrations to autonomous
              agentic pipelines.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="mailto:celsoleao@gmail.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                {personal.email}
              </a>
              <span className="text-slate-700">·</span>
              <span className="inline-flex items-center gap-2 text-sm text-slate-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                {personal.location}
              </span>
            </div>
          </motion.div>

          {/* Languages + side info */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp(0.2)}
          >
            <div className="rounded-2xl border border-slate-800/60 bg-[#0f0f1a] p-6 space-y-5">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Languages</h3>
              {languages.map((lang) => (
                <div key={lang.language} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300 font-medium">{lang.language}</span>
                    <span className="text-slate-500">{lang.level}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
                      style={{ width: `${lang.pct}%` }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-slate-800/60 bg-[#0f0f1a] p-6 space-y-4">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">Certifications</h3>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="text-sm font-semibold text-slate-200">MCTS – .NET Framework 3.5</p>
                  <p className="text-xs text-slate-500 mt-0.5">Microsoft · 2011 – Present</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
