import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useReducedMotion } from '../hooks/useReducedMotion'

const nav = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'league', label: 'League' },
  { id: 'best-videos', label: 'Best Videos' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'fan-zone', label: 'Fan Zone' },
  { id: 'couple', label: 'Couple' },
]

function scrollToSection(id: string, reducedMotion: boolean) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
}

export function Header() {
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 120], [0.35, 0.92])
  const borderAlpha = useTransform(scrollY, [0, 80], [0, 0.15])
  const backgroundColor = useTransform(headerOpacity, (o) => `rgba(7, 7, 9, ${o})`)
  const borderBottom = useTransform(borderAlpha, (a) => `1px solid rgba(255,255,255,${a})`)

  return (
    <motion.header
      className="fixed top-0 z-50 w-full backdrop-blur-md"
      style={
        reduced
          ? {
              backgroundColor: 'rgba(7, 7, 9, 0.92)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }
          : { backgroundColor, borderBottom }
      }
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span
              className="text-xl tracking-wide text-[var(--color-text)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              ЛИГА МАСЛЕННИКОВА
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
              Неофициальный фан-сайт
            </span>
          </div>
        </Link>
        <nav aria-label="Основная навигация" className="flex flex-wrap justify-end gap-x-4 gap-y-2 text-sm">
          {nav.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id, reduced)}
              className="border-none bg-transparent p-0 text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
