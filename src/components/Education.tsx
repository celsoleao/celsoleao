import { motion } from 'framer-motion'
import { education, certifications } from '../data'

export default function Education() {
  return (
    <section id="education" className="section-pad relative bg-[#08080f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-sky-400 uppercase tracking-widest border border-sky-500/25 rounded-full px-3 py-1 bg-sky-500/5 inline-block mb-4">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Education &</span>{' '}
            <span className="text-white">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              className="rounded-2xl border border-slate-800/60 bg-[#0f0f1a] p-6 group hover:border-sky-500/30 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, boxShadow: '0 12px 40px rgba(14,165,233,0.12)' }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{edu.emoji}</span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-base mb-1">{edu.degree}</h3>
                  <p className="text-sky-400 font-semibold text-sm">{edu.institution}</p>
                  <div className="flex flex-wrap gap-x-3 mt-1.5 text-xs text-slate-500">
                    <span>{edu.location}</span>
                    <span>·</span>
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            Certifications
          </h3>
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              className="rounded-2xl border border-yellow-500/20 bg-gradient-to-r from-yellow-900/10 to-transparent p-5 flex items-center gap-4 hover:border-yellow-500/35 transition-all"
              whileHover={{ x: 4 }}
            >
              <span className="text-3xl">{cert.emoji}</span>
              <div>
                <p className="font-bold text-white text-sm">{cert.name}</p>
                <p className="text-yellow-400/80 text-xs mt-0.5">{cert.detail}</p>
                <p className="text-slate-500 text-xs mt-0.5">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
