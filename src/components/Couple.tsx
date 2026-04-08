import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import type { CoupleMilestone } from '../types/content'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { VideoModal } from './VideoModal'

// TODO(content): заменить на реальный ID совместного интервью «Мы женимся!»
const INTERVIEW_VIDEO_ID = 'jNQXAC9IVRw'
const NEWS_PLACEHOLDER =
  'https://www.google.com/search?q=Klava+Koka+Dima+Maslennikov+engagement+April+2026'

type Props = { milestones: CoupleMilestone[] }

const stripImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1465495976277-438e216afb1e?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1520854221050-0f4caff4492c?w=400&h=300&fit=crop',
]

export function Couple({ milestones }: Props) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -18])
  const y2 = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 12])
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section
      id="couple"
      ref={ref}
      className="scroll-mt-24 border-t border-white/5 bg-[#070709] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl tracking-wide text-[var(--color-text)] sm:text-5xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          COUPLE — MASLENNIKOV × KLAVA
        </h2>
        <p className="mt-4 max-w-3xl text-[var(--color-text-muted)]">
          Романтичный блок в рамках общей эстетики: дружба около десяти лет, открытые чувства и помолвка.
          По данным СМИ, пара объявила о помолвке{' '}
          <strong className="text-[var(--color-text)]">3 апреля 2026 года</strong>. Клава написала: «Мы не
          встречаемся, мы женимся».
        </p>

        <div className="mt-14 grid min-h-[420px] gap-6 lg:grid-cols-2">
          <motion.div
            style={{ y: y1 }}
            className="relative overflow-hidden rounded-lg border border-[var(--color-accent)]/25 bg-[var(--color-bg-card)]"
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
              alt=""
              className="h-full min-h-[280px] w-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-medium text-white">Дмитрий Масленников</p>
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="relative overflow-hidden rounded-lg border border-[var(--color-accent)]/25 bg-[var(--color-bg-card)]"
          >
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=800&fit=crop"
              alt=""
              className="h-full min-h-[280px] w-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <p className="absolute bottom-4 left-4 text-sm font-medium text-white">Клава Кока</p>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[var(--color-accent-deep)]"
          >
            Смотреть видео
          </button>
          <a
            href={NEWS_PLACEHOLDER}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-text-muted)] underline decoration-white/20 underline-offset-4 hover:text-[var(--color-text)]"
          >
            Справка по публикациям о помолвке (поиск, placeholder)
          </a>
        </div>

        <div
          className="mt-12 overflow-x-auto pb-2"
          role="region"
          aria-label="Совместные кадры, placeholder"
        >
          <div className="flex gap-3" style={{ width: 'max-content' }}>
            {stripImages.map((src) => (
              <img
                key={src}
                src={src}
                alt=""
                loading="lazy"
                className="h-28 w-40 shrink-0 rounded object-cover sm:h-32 sm:w-48"
                width={192}
                height={128}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-lg border border-white/10 bg-[var(--color-bg-section)] p-8">
          <h3
            className="text-2xl tracking-wide text-[var(--color-text)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ИСТОРИЯ ЛЮБВИ
          </h3>
          <ol className="mt-8 space-y-8 border-l border-white/15 pl-8">
            {milestones.map((m, i) => (
              <motion.li
                key={m.id}
                initial={reduced ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : i * 0.06 }}
                className="relative"
              >
                <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-bg-section)]" />
                <time className="text-xs uppercase tracking-wider text-[var(--color-accent)]">
                  {m.date}
                </time>
                <h4 className="mt-1 text-lg font-semibold text-[var(--color-text)]">{m.title}</h4>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{m.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        <p className="mt-8 text-center text-xs text-[var(--color-text-muted)]">
          Placeholder: обручальное кольцо / интервью — заменить ассетами контент-команды.
        </p>
      </div>

      <VideoModal
        open={videoOpen}
        youtubeId={INTERVIEW_VIDEO_ID}
        title="Совместное интервью (placeholder)"
        onClose={() => setVideoOpen(false)}
      />
    </section>
  )
}
