import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export function About() {
  const reduced = useReducedMotion()

  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-white/5 bg-[var(--color-bg-section)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: reduced ? 0 : 0.5 }}
        >
          <h2
            className="text-4xl tracking-wide text-[var(--color-text)] sm:text-5xl"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ABOUT
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-[var(--color-text-muted)]">
            Дмитрий Масленников — автор YouTube-канала об экспедициях в заброшенные места, городских
            легендах и мистических историях. Формат сочетает кинематографичную съёмку, команду «Лиги» и
            ощущение живого расследования.
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { t: 'Экспедиции', d: 'Ночные выезды и детальная работа с локациями.' },
              { t: 'Команда', d: 'Постоянные герои выпусков и гостевые коллаборации.' },
              { t: 'Атмосфера', d: 'Тёмный визуальный язык без лишнего шума.' },
            ].map((item) => (
              <li
                key={item.t}
                className="rounded-lg border border-white/10 bg-[var(--color-bg-card)] p-6"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text)]">{item.t}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{item.d}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
