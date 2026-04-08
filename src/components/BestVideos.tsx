import { motion } from 'framer-motion'
import { useState } from 'react'
import type { BestVideo } from '../types/content'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { VideoModal } from './VideoModal'

type Props = { videos: BestVideo[] }

export function BestVideos({ videos }: Props) {
  const reduced = useReducedMotion()
  const [active, setActive] = useState<BestVideo | null>(null)

  return (
    <section
      id="best-videos"
      className="scroll-mt-24 border-t border-white/5 bg-[#070709] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl tracking-wide text-[var(--color-text)] sm:text-5xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          BEST VIDEOS
        </h2>
        <p className="mt-4 text-[var(--color-text-muted)]">
          Нажмите на карточку — откроется модальное окно с плеером (rel=0, modestbranding=1).
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((v, i) => (
            <motion.button
              key={v.id}
              type="button"
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduced ? 0 : 0.4, delay: reduced ? 0 : i * 0.05 }}
              onClick={() => setActive(v)}
              className="group w-full overflow-hidden rounded-lg border border-white/10 bg-[var(--color-bg-card)] text-left transition hover:border-white/20"
            >
              <div className="relative aspect-video">
                <img
                  src={v.cover}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-0.5 text-xs text-white">
                  {v.duration}
                </span>
              </div>
              <div className="p-4">
                <p className="line-clamp-2 text-sm font-medium text-[var(--color-text)]">{v.title}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
      <VideoModal
        open={!!active}
        youtubeId={active?.youtubeId ?? ''}
        title={active?.title ?? ''}
        onClose={() => setActive(null)}
      />
    </section>
  )
}
