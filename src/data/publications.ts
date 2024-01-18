import Member, { MEMBER } from './members'

export const PublicationTypes = ['conference', 'poster', 'workshop', 'journal', 'preprint'] as const
export type PublicationType = (typeof PublicationTypes)[number]

export const ResearchTopic = [
  'datamining',
  'crowdsourcing',
  'learning',
  'civics',
  'visualization',
  'social',
  'human-ai-interaction',
] as const
export type ResearchTopic = (typeof ResearchTopic)[number]

interface Props {
  title: string
  authors: Member[]
  year: number
  venue: string
  topics: ResearchTopic[]
  type: PublicationType
  award: string
  link: string
}

interface Publication extends Props {}
class Publication {
  constructor(attrs: Props) {
    Object.assign(this, attrs)
  }
}

export const PUBLICATION = {
  codetree: new Publication({
    title: 'CodeTree: A System for Learnersourcing Subgoal Hierarchies in Code Examples',
    authors: [MEMBER.hyoungwookjin, MEMBER.juhokim],
    venue: 'CSCW 2024',
    year: 2024,
    topics: ['crowdsourcing', 'learning'],
    type: 'conference',
    award: '',
    link: '',
  }),
} as const

export const PUBLICATIONS = Object.values(PUBLICATION).sort((a, b) => a.year - b.year)
export default PUBLICATIONS
