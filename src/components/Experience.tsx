import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { experience } from '../data'

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <section id="experience" className="section-pad relative bg-[#0a0a12]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-violet-400 uppercase tracking-widest border border-violet-500/25 rounded-full px-3 py-1 bg-violet-500/5 inline-block mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-slate-500 mt-3">
            20+ years building enterprise software across multiple industries.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-6">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex gap-6 md:gap-8">
                  {/* Dot */}
                  <div className="flex-shrink-0 relative z-10 mt-5">
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                        job.current
                          ? 'border-violet-400 bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.8)]'
                          : 'border-slate-600 bg-[#0a0a12] group-hover:border-violet-500'
                      }`}
                    >
                      {job.current && (
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-white"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 pb-2">
                    <motion.div
                      className={`rounded-2xl border bg-[#0f0f1a] overflow-hidden cursor-pointer transition-all ${
                        expanded === i
                          ? 'border-violet-500/30 shadow-[0_0_30px_rgba(139,92,246,0.1)]'
                          : 'border-slate-800/60 hover:border-slate-700'
                      }`}
                      whileHover={{ boxShadow: expanded !== i ? '0 4px 20px rgba(0,0,0,0.3)' : undefined }}
                      onClick={() => setExpanded(expanded === i ? null : i)}
                    >
                      <div className="p-5 md:p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <h3 className="text-base md:text-lg font-bold text-white">{job.role}</h3>
                              {job.current && (
                                <span className="text-xs px-2.5 py-0.5 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/25 font-medium">
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-violet-400 font-semibold text-sm">{job.company}</p>
                            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1.5 text-xs text-slate-500">
                              <span className="flex items-center gap-1">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                {job.location}
                              </span>
                              <span className="flex items-center gap-1">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                </svg>
                                {job.period}
                              </span>
                            </div>
                          </div>
                          <motion.div
                            className="flex-shrink-0 text-slate-500 mt-1"
                            animate={{ rotate: expanded === i ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                          </motion.div>
                        </div>
                        <p className="text-slate-400 text-sm mt-2 leading-relaxed">{job.description}</p>
                      </div>

                      <AnimatePresence>
                        {expanded === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-slate-800/60 px-5 md:px-6 py-5 space-y-4">
                              <ul className="space-y-2">
                                {job.bullets.map((b, bi) => (
                                  <motion.li
                                    key={bi}
                                    className="flex items-start gap-2.5 text-sm text-slate-400"
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: bi * 0.06 }}
                                  >
                                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5" />
                                    {b}
                                  </motion.li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                {job.tech.map((t) => (
                                  <span
                                    key={t}
                                    className="text-xs px-2.5 py-1 rounded-lg border border-slate-700/60 bg-slate-800/40 text-slate-400 font-mono"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
