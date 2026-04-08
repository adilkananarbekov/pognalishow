import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

const placeholders = [
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1633167606207-d840b5070bc2?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=400&h=400&fit=crop',
]

export function FanZone() {
  const reduced = useReducedMotion()

  return (
    <section
      id="fan-zone"
      className="scroll-mt-24 border-t border-white/5 bg-[var(--color-bg-section)] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl tracking-wide text-[var(--color-text)] sm:text-5xl"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          FAN ZONE
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
          Галерея фан-арта (заглушки). Координатор загрузит реальные работы и отзывы.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <button
            type="button"
            title="Функция появится после подключения бэкенда"
            className="rounded-md border border-white/20 px-5 py-2.5 text-sm font-medium text-[var(--color-text)] transition hover:bg-white/5"
          >
            Загрузить арт
          </button>
          <button
            type="button"
            title="Форма отзывов будет добавлена позже"
            className="rounded-md border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/10 px-5 py-2.5 text-sm font-medium text-[var(--color-text)] transition hover:bg-[var(--color-accent)]/20"
          >
            Оставить отзыв
          </button>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {placeholders.map((src, i) => (
            <motion.div
              key={src}
              initial={reduced ? false : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: reduced ? 0 : 0.35, delay: reduced ? 0 : i * 0.05 }}
              className="aspect-square overflow-hidden rounded-lg border border-white/10 bg-[var(--color-bg-card)]"
            >
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover opacity-80" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
