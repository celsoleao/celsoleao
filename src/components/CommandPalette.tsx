import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personal, sections } from '../data'

type Command = {
  id: string
  label: string
  group: 'Navigate' | 'Actions' | 'Links'
  hint?: string
  run: () => void
}

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const [toast, setToast] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands = useMemo<Command[]>(
    () => [
      { id: 'top', label: 'Back to top', group: 'Navigate', run: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
      ...sections.map((s) => ({
        id: s.href,
        label: `Go to ${s.label}`,
        group: 'Navigate' as const,
        run: () => scrollTo(s.href),
      })),
      {
        id: 'copy-email',
        label: 'Copy email address',
        group: 'Actions',
        hint: personal.email,
        run: () => {
          navigator.clipboard
            ?.writeText(personal.email)
            .then(() => setToast('Email copied to clipboard'))
            .catch(() => setToast(personal.email))
        },
      },
      {
        id: 'send-email',
        label: 'Send an email',
        group: 'Actions',
        run: () => (window.location.href = `mailto:${personal.email}`),
      },
      {
        id: 'linkedin',
        label: 'Open LinkedIn',
        group: 'Links',
        run: () => window.open(`https://${personal.linkedin}`, '_blank', 'noopener'),
      },
      {
        id: 'github',
        label: 'Open GitHub',
        group: 'Links',
        run: () => window.open(`https://${personal.github}`, '_blank', 'noopener'),
      },
    ],
    [],
  )

  const reset = () => {
    setQuery('')
    setSelected(0)
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((c) => `${c.label} ${c.group} ${c.hint ?? ''}`.toLowerCase().includes(q))
  }, [commands, query])

  // Global shortcuts: Ctrl/Cmd+K toggles, "/" opens (when not typing), plus a custom event from the navbar
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      const typing = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((o) => {
          if (!o) reset()
          return !o
        })
      } else if (e.key === '/' && !typing) {
        e.preventDefault()
        reset()
        setOpen(true)
      }
    }
    const onOpen = () => {
      reset()
      setOpen(true)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('open-command-palette', onOpen)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-command-palette', onOpen)
    }
  }, [])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 2000)
    return () => clearTimeout(t)
  }, [toast])

  const execute = (cmd: Command | undefined) => {
    if (!cmd) return
    setOpen(false)
    cmd.run()
  }

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelected((s) => (filtered.length ? (s + 1) % filtered.length : 0))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelected((s) => (filtered.length ? (s - 1 + filtered.length) % filtered.length : 0))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      execute(filtered[selected])
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  let lastGroup = ''

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
              className="relative w-full max-w-lg rounded-2xl border border-violet-500/25 bg-[#0f0f1a] shadow-[0_30px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(139,92,246,0.15)] overflow-hidden"
              initial={{ scale: 0.96, y: -10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              <div className="flex items-center gap-3 px-4 border-b border-slate-800/60">
                <span className="font-mono text-violet-400 text-sm">&gt;</span>
                <input
                  ref={inputRef}
                  autoFocus
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value)
                    setSelected(0)
                  }}
                  onKeyDown={onInputKey}
                  placeholder="Type a command or search…"
                  className="flex-1 bg-transparent py-4 text-sm text-white placeholder:text-slate-500 outline-none font-mono"
                />
                <kbd className="text-[10px] font-mono text-slate-500 border border-slate-700 rounded px-1.5 py-0.5">ESC</kbd>
              </div>

              <div className="max-h-80 overflow-y-auto py-2">
                {filtered.length === 0 && (
                  <p className="px-4 py-6 text-center text-sm text-slate-500">No results for “{query}”</p>
                )}
                {filtered.map((cmd, i) => {
                  const header = cmd.group !== lastGroup ? cmd.group : null
                  lastGroup = cmd.group
                  return (
                    <div key={cmd.id}>
                      {header && (
                        <p className="px-4 pt-2 pb-1 text-[10px] uppercase tracking-widest text-slate-600 font-mono">
                          {header}
                        </p>
                      )}
                      <button
                        onMouseEnter={() => setSelected(i)}
                        onClick={() => execute(cmd)}
                        className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                          i === selected ? 'bg-violet-500/15 text-white' : 'text-slate-400'
                        }`}
                      >
                        <span>{cmd.label}</span>
                        {cmd.hint && <span className="text-xs text-slate-500 font-mono truncate">{cmd.hint}</span>}
                      </button>
                    </div>
                  )
                })}
              </div>

              <div className="flex items-center gap-4 px-4 py-2.5 border-t border-slate-800/60 text-[11px] text-slate-600 font-mono">
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span className="ml-auto">celsoleao.com</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {toast && (
          <motion.div
            className="fixed bottom-6 left-1/2 z-[110] -translate-x-1/2 px-4 py-2.5 rounded-xl border border-emerald-500/30 bg-[#0f0f1a] text-sm text-emerald-300 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
