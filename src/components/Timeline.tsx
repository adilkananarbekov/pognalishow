import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import type { TimelineEvent } from '../types/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

type Props = { events: TimelineEvent[] }

export function Timeline({ events }: Props) {
  const reduced = useReducedMotion()
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reduced || !rootRef.current) return
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.55,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
    }, rootRef)
    return () => ctx.revert()
  }, [reduced, events])

  return (
    <section
      id="timeline"
      ref={rootRef}
      className="scroll-mt-24 border-t border-white/5 bg-[var(--color-bg-section)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl tracking-wide text-[var(--color-text)] sm:text-5xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          TIMELINE
        </h2>
        <p className="mt-4 text-[var(--color-text-muted)]">
          Ключевые вехи канала. Анимация появления при скролле (GSAP ScrollTrigger); при
          prefers-reduced-motion элементы статичны.
        </p>
        <ol className="relative mt-14 border-l border-white/15 pl-8">
          {events.map((ev) => (
            <li
              key={ev.id}
              className={`timeline-item mb-12 last:mb-0 ${reduced ? 'opacity-100' : 'opacity-0'}`}
            >
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-bg-section)]" />
              <time className="text-sm font-medium text-[var(--color-accent)]">{ev.date}</time>
              <h3 className="mt-1 text-lg font-semibold text-[var(--color-text)]">{ev.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">{ev.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
