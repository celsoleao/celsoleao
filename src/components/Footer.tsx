import { motion } from 'framer-motion'
import { personal } from '../data'

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/60 bg-[#08080f]">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xs">
            CL
          </div>
          <span className="text-sm text-slate-500">
            <span className="text-slate-300 font-medium">{personal.name}</span> · {personal.title}
          </span>
        </motion.div>

        <motion.p
          className="text-xs text-slate-600 font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Built with React + Framer Motion + Tailwind CSS
        </motion.p>
      </div>
    </footer>
  )
}
