import { motion } from 'framer-motion'

const pipeline = [
  { label: 'Transactions', detail: 'Banking activity ingested', icon: '💳' },
  { label: 'Detection Rules', detail: 'Configurable risk checks', icon: '🧠' },
  { label: 'Alerts', detail: 'Scored & prioritized', icon: '🚨' },
  { label: 'Analyst Triage', detail: 'Review in MudBlazor UI', icon: '🕵️' },
  { label: 'Case Resolution', detail: 'Tracked & auditable', icon: '✅' },
]

const highlights = [
  {
    title: 'Alert Engine',
    text: 'Rules evaluate activity and raise prioritized alerts so analysts see the riskiest items first.',
    accent: 'text-rose-400 border-rose-500/25 bg-rose-500/5',
  },
  {
    title: 'Analyst Workflow',
    text: 'Component-driven MudBlazor screens for triage, investigation notes, and case management.',
    accent: 'text-violet-400 border-violet-500/25 bg-violet-500/5',
  },
  {
    title: 'Auditable Data',
    text: 'Azure SQL data model built for traceability — every alert and decision has a history.',
    accent: 'text-cyan-400 border-cyan-500/25 bg-cyan-500/5',
  },
]

// Illustrative mockup only — not real bank data.
const mockAlerts = [
  { id: 'ALR-1042', reason: 'Unusual wire amount', severity: 'High', status: 'New' },
  { id: 'ALR-1041', reason: 'Velocity: rapid transfers', severity: 'High', status: 'In review' },
  { id: 'ALR-1039', reason: 'New device + new payee', severity: 'Medium', status: 'In review' },
  { id: 'ALR-1036', reason: 'Geo mismatch on login', severity: 'Low', status: 'Closed' },
]

const severityStyle: Record<string, string> = {
  High: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
  Medium: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
  Low: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
}

const tech = ['C# .NET', 'Blazor', 'MudBlazor', 'Azure SQL', 'Azure']

export default function FeaturedWork() {
  return (
    <section id="featured" className="section-pad relative overflow-hidden bg-[#08080f]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/25 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-[-10%] w-[500px] h-[500px] rounded-full bg-rose-600/5 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono text-rose-400 uppercase tracking-widest border border-rose-500/25 rounded-full px-3 py-1 bg-rose-500/5 inline-block mb-4">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Fraud Management</span>{' '}
            <span className="gradient-text-warm">System</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">
            Valley Bank · 2026 – Present. A new alert platform that helps the bank detect suspicious
            activity and gives fraud analysts the tools to act on it.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="relative mb-14">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4">
            {pipeline.map((step, i) => (
              <motion.div
                key={step.label}
                className="relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <div className="h-full rounded-2xl border border-slate-800/60 bg-[#0f0f1a] p-4 text-center hover:border-rose-500/30 transition-colors">
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <p className="text-sm font-semibold text-white">{step.label}</p>
                  <p className="text-xs text-slate-500 mt-1">{step.detail}</p>
                </div>

                {/* Connector with travelling pulse */}
                {i < pipeline.length - 1 && (
                  <>
                    <div className="hidden md:block absolute top-1/2 -right-4 w-4 h-px bg-slate-700 overflow-visible">
                      <motion.span
                        className="absolute -top-[3px] w-1.5 h-1.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.9)]"
                        animate={{ x: [0, 14], opacity: [0, 1, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
                      />
                    </div>
                    <div className="md:hidden mx-auto w-px h-3 bg-slate-700" />
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 items-start">
          {/* Highlights */}
          <div className="lg:col-span-2 space-y-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                className="rounded-2xl border border-slate-800/60 bg-[#0f0f1a] p-5"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className={`inline-block text-xs font-mono px-2.5 py-1 rounded-lg border mb-2 ${h.accent}`}>
                  {h.title}
                </span>
                <p className="text-sm text-slate-400 leading-relaxed">{h.text}</p>
              </motion.div>
            ))}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-lg border border-slate-700/60 bg-slate-800/40 text-slate-400 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Mock alert queue */}
          <motion.div
            className="lg:col-span-3 rounded-2xl border border-slate-800/60 bg-[#0f0f1a] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800/60 bg-[#13131f]">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-3 text-xs font-mono text-slate-500">alert-queue</span>
              <span className="ml-auto flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                live
              </span>
            </div>

            <div className="divide-y divide-slate-800/60">
              {mockAlerts.map((a, i) => (
                <motion.div
                  key={a.id}
                  className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-white/[0.02] transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <span className="font-mono text-xs text-slate-500 w-16 sm:w-20 flex-shrink-0">{a.id}</span>
                  <span className="flex-1 min-w-0 truncate text-slate-300">{a.reason}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 ${severityStyle[a.severity]}`}>
                    {a.severity}
                  </span>
                  <span className="hidden sm:block text-xs text-slate-500 w-20 text-right flex-shrink-0">{a.status}</span>
                </motion.div>
              ))}
            </div>

            <p className="px-4 py-2.5 text-[11px] text-slate-600 border-t border-slate-800/60 font-mono">
              Illustrative mockup · no real data
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
