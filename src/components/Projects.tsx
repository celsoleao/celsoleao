import { motion } from 'framer-motion'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative bg-[#0a0a12]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest border border-emerald-500/25 rounded-full px-3 py-1 bg-emerald-500/5 inline-block mb-4">
            Personal Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text-green">Side Projects</span>
          </h2>
          <p className="text-slate-500 mt-3">
            Engineering passion projects built with production-grade rigor.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="rounded-2xl border border-slate-800/60 bg-[#0f0f1a] overflow-hidden group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(52,211,153,0.15)' }}
            >
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-500" />

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Left: icon + title */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">{project.emoji}</span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl font-bold text-white">{project.title}</h3>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                            {project.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 leading-relaxed mb-5">{project.description}</p>
                    <ul className="space-y-2 mb-6">
                      {project.bullets.map((b, bi) => (
                        <motion.li
                          key={bi}
                          className="flex items-start gap-2.5 text-sm text-slate-400"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 + bi * 0.08 }}
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5" />
                          {b}
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 text-emerald-300 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: decorative stats */}
                  <div className="md:w-48 flex-shrink-0 grid grid-cols-2 md:grid-cols-1 gap-3">
                    {[
                      { label: 'Uptime', value: '24/7', icon: '⚡' },
                      { label: 'Operation', value: 'Autonomous', icon: '🤖' },
                      { label: 'Data', value: 'Real-Time', icon: '📡' },
                      { label: 'Strategy', value: 'Configurable', icon: '⚙️' },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-slate-800/60 bg-[#13131f] p-3 text-center"
                      >
                        <div className="text-lg mb-0.5">{stat.icon}</div>
                        <div className="text-xs font-bold text-emerald-400">{stat.value}</div>
                        <div className="text-xs text-slate-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
