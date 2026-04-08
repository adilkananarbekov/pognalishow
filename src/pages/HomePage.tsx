import { Suspense, lazy } from 'react'
import membersData from '../data/members.json'
import projectsData from '../data/projects.json'
import bestVideosData from '../data/bestVideos.json'
import timelineData from '../data/timeline.json'
import coupleMilestonesData from '../data/coupleMilestones.json'
import type { BestVideo, Member, Project, TimelineEvent, CoupleMilestone } from '../types/content'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Projects } from '../components/Projects'
import { BestVideos } from '../components/BestVideos'
import { Couple } from '../components/Couple'
import { Footer } from '../components/Footer'

const League = lazy(async () => {
  const m = await import('../components/League')
  return { default: m.League }
})
const Timeline = lazy(async () => {
  const m = await import('../components/Timeline')
  return { default: m.Timeline }
})
const FanZone = lazy(async () => {
  const m = await import('../components/FanZone')
  return { default: m.FanZone }
})

const members = membersData as Member[]
const projects = projectsData as Project[]
const bestVideos = bestVideosData as BestVideo[]
const timeline = timelineData as TimelineEvent[]
const coupleMilestones = coupleMilestonesData as CoupleMilestone[]

function SectionFallback() {
  return (
    <div className="flex min-h-[200px] items-center justify-center bg-[var(--color-bg-section)] text-sm text-[var(--color-text-muted)]">
      Загрузка секции…
    </div>
  )
}

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects projects={projects} />
        <Suspense fallback={<SectionFallback />}>
          <League members={members} />
        </Suspense>
        <BestVideos videos={bestVideos} />
        <Suspense fallback={<SectionFallback />}>
          <Timeline events={timeline} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FanZone />
        </Suspense>
        <Couple milestones={coupleMilestones} />
      </main>
      <Footer />
    </>
  )
}
