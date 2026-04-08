import type { SocialKey } from '../types/content'

const labels: Record<SocialKey, string> = {
  youtube: 'YouTube',
  telegram: 'Telegram',
  twitch: 'Twitch',
  instagram: 'Instagram',
  vk: 'ВКонтакте',
  x: 'X',
}

export function socialLabel(key: SocialKey): string {
  return labels[key]
}
