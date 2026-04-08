import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

type Props = {
  open: boolean
  youtubeId: string
  title: string
  onClose: () => void
}

export function VideoModal({ open, youtubeId, title, onClose }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const src = `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="presentation"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
            className="relative w-full max-w-4xl overflow-hidden rounded-lg border border-white/10 bg-[var(--color-bg-card)] shadow-2xl"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3">
              <h2 id="video-modal-title" className="truncate text-sm font-medium text-[var(--color-text)]">
                {title}
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="rounded-md px-3 py-1.5 text-sm text-[var(--color-text-muted)] transition hover:bg-white/10 hover:text-[var(--color-text)]"
              >
                Закрыть
              </button>
            </div>
            <div className="aspect-video w-full bg-black">
              <iframe
                className="h-full w-full"
                src={src}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
