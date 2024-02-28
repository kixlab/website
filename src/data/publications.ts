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

export enum PublicationLinkType {
  ACM = 'ACM DL',
  WEB = 'Website',
  VID = 'Video',
  ARX = 'arXiv',
}

export interface Publication {
  title: string
  authors: Member[]
  year: number
  venue: string
  topics: ResearchTopic[]
  type: PublicationType
  award?: string
  links?: { url: string; type: PublicationLinkType }[]
}

export const PUBLICATIONS: Publication[] = [
  {
    title: 'CodeTree: A System for Learnersourcing Subgoal Hierarchies in Code Examples',
    authors: [MEMBER.hyoungwookjin, MEMBER.juhokim],
    venue: 'CSCW 2024',
    year: 2024,
    topics: ['crowdsourcing', 'learning'],
    type: 'conference',
  },
  {
    title: 'example1: name of paper',
    authors: [MEMBER.juhokim],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['civics', 'visualization'],
    type: 'conference',
    links: [
      { url: 'https://dl.acm.org', type: PublicationLinkType.ACM },
      { url: 'https://kixlab.org', type: PublicationLinkType.WEB },
      { url: 'https://youtube.com', type: PublicationLinkType.VID },
      { url: 'https://arxiv.org', type: PublicationLinkType.ARX },
    ],
  },
  {
    title: 'example: this is preprint',
    authors: [MEMBER.juhokim],
    venue: 'CHI 2018',
    year: 2024,
    topics: ['civics', 'visualization'],
    type: 'preprint',
    award: 'best example award',
    links: [],
  },
  {
    title: 'example1: name of paper',
    authors: [MEMBER.juhokim],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['civics', 'visualization'],
    type: 'conference',
    award: '',
  },
  {
    title: 'example: this is preprint',
    authors: [MEMBER.juhokim],
    venue: 'CHI 2018',
    year: 2024,
    topics: ['civics', 'visualization'],
    type: 'conference',
    award: 'best example award',
  },
] as const
