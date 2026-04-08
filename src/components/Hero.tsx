import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

const HERO_PLAYLIST = 'https://www.youtube.com/@maslennikov/playlists'

function scrollToAbout(reduced: boolean) {
  document.getElementById('about')?.scrollIntoView({
    behavior: reduced ? 'auto' : 'smooth',
    block: 'start',
  })
}

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#070709] pb-16 pt-28 sm:pb-24 sm:pt-32"
      aria-label="Главный экран"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&q=80)',
        }}
      />
      {!reduced && (
        <>
          <motion.div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/70 to-transparent"
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute -left-1/4 top-0 h-[120%] w-[150%] bg-gradient-to-r from-white/[0.04] via-transparent to-white/[0.03]"
            animate={{ x: [0, 24, 0], opacity: [0.15, 0.28, 0.15] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          />
          <motion.div
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-2/5 bg-[radial-gradient(ellipse_at_bottom,_rgba(225,29,46,0.12),_transparent_60%)]"
            animate={{ opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden
          />
        </>
      )}
      {reduced && (
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/80 to-[#070709]/40"
          aria-hidden
        />
      )}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-2 text-sm uppercase tracking-[0.35em] text-[var(--color-text-muted)]">
          Maslennikov universe
        </p>
        <h1
          className="max-w-4xl text-5xl leading-[0.95] tracking-wide text-[var(--color-text)] sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          EXPEDITIONS INTO THE UNKNOWN
        </h1>
        <p className="mt-6 max-w-xl text-[var(--color-text-muted)]">
          Экспедиции, заброшки и мистика — неофициальный визуальный портал в атмосфере канала.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={HERO_PLAYLIST}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[var(--color-accent-deep)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            Смотреть сейчас
          </a>
          <button
            type="button"
            onClick={() => scrollToAbout(reduced)}
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-8 py-3 text-sm font-medium text-[var(--color-text)] transition hover:border-white/40 hover:bg-white/5"
          >
            О проекте
          </button>
        </div>
      </div>
    </section>
  )
}
