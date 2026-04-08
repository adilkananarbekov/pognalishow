import type { SocialKey } from '../types/content'

export function SocialIcon({ type }: { type: SocialKey }) {
  const common = 'h-4 w-4 shrink-0'
  switch (type) {
    case 'youtube':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1 31.5 31.5 0 0 0 .5-5.8 31.5 31.5 0 0 0-.5-5.8zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
        </svg>
      )
    case 'telegram':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M21.95 3.33a1.5 1.5 0 0 0-1.54-.14L2.5 10.28c-1.12.5-1.11 1.06-.2 1.33l4.75 1.48 11-6.93c.52-.32 1 0 .6.2l-8.9 8.1-.33 4.7c.48 0 .69-.22.96-.48l2.3-2.23 4.78 3.53c.88.49 1.5.24 1.72-.83l3.1-14.6c.32-1.28-.48-1.97-1.33-1.59z" />
        </svg>
      )
    case 'twitch':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M4 2L2 6v15h5v3h3l3-3h5l5-5V2H4zm16 13l-3 3h-6l-3 3v-3H6V4h14v11zM14 6h2v6h-2V6zm-4 0h2v6h-2V6z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM17.5 6.3a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2z" />
        </svg>
      )
    case 'vk':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm2.76 14.43h-1.65c-.62 0-.81-.5-1.93-1.63-1.01-.95-1.46-1.08-1.71-1.08-.35 0-.45.1-.45.58v1.48c0 .42-.13.67-1.22.67-1.8 0-3.8-1.09-5.21-3.12-2.12-3.08-2.7-5.4-2.7-5.88 0-.26.1-.5.58-.5h1.65c.43 0 .59.2.76.67.82 2.35 2.2 4.41 2.77 4.41.21 0 .31-.1.31-.67V9.26c-.06-1.18-.68-1.28-.68-1.7 0-.21.17-.42.45-.42h2.59c.36 0 .49.19.49.61v3.05c0 .36.16.49.26.49.21 0 .39-.13.78-.52 1.2-1.35 2.06-3.42 2.06-3.42.11-.26.3-.49.73-.49h1.65c.52 0 .63.27.52.64-.22 1.03-2.35 4.05-2.35 4.05-.18.3-.25.44 0 .79.18.24.78.76 1.18 1.22.72.82 1.27 1.5 1.42 1.97.15.47-.08.71-.55.71z" />
        </svg>
      )
    case 'x':
      return (
        <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    default:
      return null
  }
}
