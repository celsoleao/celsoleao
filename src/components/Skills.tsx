import { motion } from 'framer-motion'
import { skills } from '../data'

const colorMap: Record<string, { text: string; border: string; bg: string }> = {
  violet: { text: 'text-violet-300', border: 'border-violet-500/30', bg: 'bg-violet-500/10' },
  cyan: { text: 'text-cyan-300', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10' },
  purple: { text: 'text-purple-300', border: 'border-purple-500/30', bg: 'bg-purple-500/10' },
  blue: { text: 'text-blue-300', border: 'border-blue-500/30', bg: 'bg-blue-500/10' },
  sky: { text: 'text-sky-300', border: 'border-sky-500/30', bg: 'bg-sky-500/10' },
  orange: { text: 'text-orange-300', border: 'border-orange-500/30', bg: 'bg-orange-500/10' },
  emerald: { text: 'text-emerald-300', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10' },
  rose: { text: 'text-rose-300', border: 'border-rose-500/30', bg: 'bg-rose-500/10' },
}

const categoryIcons: Record<string, string> = {
  'Backend & APIs': '⚙️',
  'Frontend': '🎨',
  'AI & Automation': '🤖',
  'Databases': '🗄️',
  'Cloud & DevOps': '☁️',
  'Observability': '📊',
  'Architecture': '🏗️',
  'Tools': '🛠️',
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
} as const

const badgeVariant = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'backOut' as const } },
} as const

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative bg-[#08080f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest border border-cyan-500/25 rounded-full px-3 py-1 bg-cyan-500/5 inline-block mb-4">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            20+ years of expertise across the full stack — from database design to AI-assisted engineering.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skills.map((group) => {
            const c = colorMap[group.color] ?? colorMap.violet
            return (
              <motion.div
                key={group.category}
                variants={cardVariant}
                className="rounded-2xl border border-slate-800/70 bg-[#0f0f1a] p-5 group hover:border-slate-700 transition-all"
                whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(0,0,0,0.4)' }}
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-xl">{categoryIcons[group.category]}</span>
                  <h3 className={`text-sm font-semibold ${c.text}`}>{group.category}</h3>
                </div>
                <motion.div
                  className="flex flex-wrap gap-1.5"
                  variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
                >
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      variants={badgeVariant}
                      className={`skill-badge text-xs px-2.5 py-1 rounded-lg border font-mono cursor-default ${c.border} ${c.bg} ${c.text}`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
