export type SocialKey =
  | 'youtube'
  | 'telegram'
  | 'twitch'
  | 'instagram'
  | 'vk'
  | 'x'

export type Member = {
  id: string
  name: string
  role: string
  description: string
  status: string
  image: string
  links: Partial<Record<SocialKey, string>>
  stats?: { label: string; value: string }[]
}

export type Project = {
  id: string
  title: string
  description: string
  cover: string
  youtubeUrl: string
}

export type BestVideo = {
  id: string
  title: string
  duration: string
  cover: string
  youtubeId: string
}

export type TimelineEvent = {
  id: string
  date: string
  title: string
  description: string
}

export type CoupleMilestone = {
  id: string
  date: string
  title: string
  description: string
}
