import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { Member, SocialKey } from '../types/content'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { socialLabel } from '../lib/social'
import { SocialIcon } from './SocialIcons'

type Props = { members: Member[] }

const linkOrder: SocialKey[] = ['youtube', 'telegram', 'twitch', 'instagram', 'vk', 'x']

export function League({ members }: Props) {
  const reduced = useReducedMotion()
  const [selected, setSelected] = useState<Member | null>(null)

  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected])

  return (
    <section
      id="league"
      className="scroll-mt-24 border-t border-white/5 bg-[var(--color-bg-section)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl tracking-wide text-[var(--color-text)] sm:text-5xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          LEAGUE
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
          Карточки в стиле досье. TODO: контент-менеджер заменит фото и реальные ссылки там, где стоят
          заглушки.
        </p>
        <div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          style={{ perspective: reduced ? undefined : '1200px' }}
        >
          {members.map((m, i) => (
            <motion.article
              key={m.id}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : i * 0.04 }}
              className="group relative overflow-hidden rounded border border-white/10 bg-[var(--color-bg-card)] p-4 shadow-lg"
              style={
                reduced
                  ? undefined
                  : {
                      transformStyle: 'preserve-3d',
                    }
              }
              whileHover={
                reduced
                  ? undefined
                  : {
                      rotateX: -4,
                      rotateY: 3,
                      scale: 1.02,
                      transition: { duration: 0.25 },
                    }
              }
            >
              <div className="absolute right-3 top-3 rounded bg-black/50 px-2 py-0.5 text-[10px] uppercase tracking-wider text-[var(--color-text-muted)]">
                {m.status}
              </div>
              <div className="flex gap-4">
                <img
                  src={m.image}
                  alt=""
                  loading="lazy"
                  className="h-28 w-24 shrink-0 rounded object-cover grayscale-[20%]"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-semibold text-[var(--color-text)]">{m.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wide text-[var(--color-accent)]">
                    {m.role}
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm text-[var(--color-text-muted)]">
                    {m.description}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelected(m)}
                className="mt-4 w-full rounded border border-white/15 py-2 text-sm font-medium text-[var(--color-text)] opacity-100 transition group-hover:border-[var(--color-accent)]/50 group-hover:text-[var(--color-text)]"
              >
                Подробнее
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            role="presentation"
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="league-modal-title"
              className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg border border-white/15 bg-[#15181d] p-6 shadow-2xl"
              initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex gap-4">
                <img
                  src={selected.image}
                  alt=""
                  className="h-36 w-28 shrink-0 rounded object-cover"
                />
                <div>
                  <h2 id="league-modal-title" className="text-xl font-bold text-[var(--color-text)]">
                    {selected.name}
                  </h2>
                  <p className="text-sm text-[var(--color-accent)]">{selected.role}</p>
                  <p className="mt-1 text-xs text-[var(--color-text-muted)]">Статус: {selected.status}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
                {selected.description}
              </p>
              {selected.stats && selected.stats.length > 0 && (
                <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  {selected.stats.map((s) => (
                    <div key={s.label} className="rounded border border-white/10 p-3">
                      <dt className="text-[var(--color-text-muted)]">{s.label}</dt>
                      <dd className="font-semibold text-[var(--color-text)]">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <div className="mt-6">
                <p className="text-xs uppercase tracking-wider text-[var(--color-text-muted)]">
                  Соцсети
                </p>
                <ul className="mt-3 flex flex-col gap-2">
                  {linkOrder.map((key) => {
                    const url = selected.links[key]
                    if (!url) return null
                    return (
                      <li key={key}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-[var(--color-text)] hover:text-[var(--color-accent)]"
                        >
                          <SocialIcon type={key} />
                          <span>{socialLabel(key)}</span>
                          <span className="truncate text-xs text-[var(--color-text-muted)]">({url})</span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="mt-6 w-full rounded-md bg-white/10 py-2 text-sm font-medium text-[var(--color-text)] hover:bg-white/15"
              >
                Закрыть
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
