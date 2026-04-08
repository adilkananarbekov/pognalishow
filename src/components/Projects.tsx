import { motion } from 'framer-motion'
import type { Project } from '../types/content'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { SocialIcon } from './SocialIcons'

type Props = { projects: Project[] }

export function Projects({ projects }: Props) {
  const reduced = useReducedMotion()

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-white/5 bg-[#070709] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl tracking-wide text-[var(--color-text)] sm:text-5xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          PROJECTS
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
          Карточки проектов с обложкой и ссылкой на выпуск (placeholder URL — заменить контент-командой).
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: reduced ? 0 : 0.45, delay: reduced ? 0 : i * 0.05 }}
              className="group overflow-hidden rounded-lg border border-white/10 bg-[var(--color-bg-card)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={p.cover}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--color-text)]">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{p.description}</p>
                <a
                  href={p.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:text-[#ff4d5c]"
                >
                  <SocialIcon type="youtube" />
                  Смотреть выпуск
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
