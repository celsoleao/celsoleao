import { motion } from 'framer-motion'
import { aiMCP } from '../data'

const aiTools = [
  { name: 'Claude', org: 'Anthropic', color: '#d97706', emoji: '🧠' },
  { name: 'GitHub Copilot', org: 'Microsoft', color: '#6d28d9', emoji: '🤖' },
  { name: 'Windsurf', org: 'Codeium', color: '#0891b2', emoji: '🏄' },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' as const } },
} as const

export default function AIExpertise() {
  return (
    <section id="ai" className="section-pad relative overflow-hidden bg-[#08080f]">
      {/* Background gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-violet-700/8 blur-[120px] rounded-full" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-violet-400 uppercase tracking-widest border border-violet-500/25 rounded-full px-3 py-1 bg-violet-500/5 inline-block mb-4">
            AI Integration & MCP
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Pioneering AI-Assisted</span>{' '}
            <span className="text-white">Engineering</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Daily use of cutting-edge AI coding tools combined with deep MCP (Model Context Protocol)
            integrations — connecting AI models to real-world tools for autonomous, intelligent workflows.
          </p>
        </motion.div>

        {/* Daily AI Tools */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {aiTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              className="flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-700/50 bg-[#0f0f1a] hover:border-slate-600 transition-all"
              whileHover={{ scale: 1.04, y: -3 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4, ease: 'backOut' }}
            >
              <span className="text-2xl">{tool.emoji}</span>
              <div>
                <p className="text-sm font-semibold text-white">{tool.name}</p>
                <p className="text-xs text-slate-500">{tool.org}</p>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" title="Daily use" />
            </motion.div>
          ))}
          <motion.div
            className="flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-700/50 bg-[#0f0f1a] text-sm text-slate-400"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.4, ease: 'backOut' }}
          >
            <span className="text-xl">✨</span>
            <span>Prompt Engineering</span>
          </motion.div>
        </motion.div>

        {/* MCP Cards */}
        <div className="mb-8">
          <motion.h3
            className="text-center text-lg font-semibold text-slate-300 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            MCP Server Integrations
            <span className="ml-2 text-xs font-mono text-slate-500">Model Context Protocol</span>
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {aiMCP.map((mcp) => (
              <motion.div
                key={mcp.tool}
                variants={card}
                className="relative rounded-2xl border border-slate-800/60 bg-[#0f0f1a] overflow-hidden group cursor-default"
                whileHover={{
                  y: -8,
                  borderColor: `${mcp.accent}50`,
                  boxShadow: `0 20px 60px ${mcp.glow}`,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient top strip */}
                <div className={`h-1 w-full bg-gradient-to-r ${mcp.gradient}`} />

                <div className="p-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{mcp.emoji}</span>
                    <h4 className="font-bold text-white text-sm">{mcp.tool}</h4>
                  </div>

                  <p className="text-slate-400 text-xs leading-relaxed">{mcp.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {mcp.actions.map((action) => (
                      <span
                        key={action}
                        className="text-xs px-2 py-0.5 rounded-md border border-slate-700/50 text-slate-400 font-mono"
                      >
                        {action}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 100%, ${mcp.glow} 0%, transparent 70%)` }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Agentic workflows callout */}
        <motion.div
          className="mt-12 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-900/15 to-transparent p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto">
            <span className="text-violet-300 font-semibold">Designing and building autonomous AI agents</span>{' '}
            capable of executing multi-step development and operations tasks — automating code review,
            testing, deployment pipelines, and incident response with minimal human intervention.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
