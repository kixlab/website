import Member, { MEMBER } from './members'

export const PublicationTypes = ['conference', 'poster', 'workshop', 'journal', 'preprint'] as const
export type PublicationType = (typeof PublicationTypes)[number]

export const ResearchTopics = [
  'datamining',
  'crowdsourcing',
  'learning',
  'civics',
  'visualization',
  'social',
  'human-ai-interaction',
] as const
export type ResearchTopic = (typeof ResearchTopics)[number]

export enum PublicationLinkType {
  PDF = 'PDF',
  ACM = 'ACM DL',
  WEB = 'Website',
  VID = 'Video',
  ARX = 'arXiv',
}

export interface Publication {
  title: string
  authors: (Member | string)[]
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
    authors: [MEMBER.hyoungwookjin, MEMBER.juhokim, 'John Doe'],
    venue: 'CSCW 2024',
    year: 2024,
    topics: ['learning', 'social'],
    type: 'journal',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/chi2023-workshop-customer-paper.pdf',
        type: PublicationLinkType.PDF,
      },
      { url: 'https://dl.acm.org', type: PublicationLinkType.ACM },
    ],
  },
  {
    title: 'example1: name of paper',
    authors: [MEMBER.juhokim],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['civics', 'visualization'],
    type: 'conference',
    links: [
      {
        url: 'https://kixlab.github.io/website-files/2023/uist2023-llmobjects-paper.pdf',
        type: PublicationLinkType.PDF,
      },
      { url: 'https://kixlab.org', type: PublicationLinkType.WEB },
      { url: 'https://youtube.com', type: PublicationLinkType.VID },
      { url: 'https://arxiv.org', type: PublicationLinkType.ARX },
    ],
    award: 'Best Example Award',
  },
  {
    title: 'example2: this is preprint',
    authors: [MEMBER.juhokim],
    venue: 'CHI 2018',
    year: 2024,
    topics: ['datamining'],
    type: 'preprint',
    links: [],
    award: 'Best Example Award',
  },
  {
    title: 'example3: name of paper',
    authors: [MEMBER.juhokim],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['crowdsourcing'],
    type: 'poster',
  },
  {
    title: 'example4: this is workshop',
    authors: [MEMBER.juhokim],
    venue: 'CHI 2018',
    year: 2023,
    topics: ['civics', 'visualization'],
    type: 'conference',
  },
  {
    title: 'example5',
    authors: [MEMBER.juhokim],
    venue: 'CHI 2018',
    year: 2019,
    topics: ['human-ai-interaction'],
    type: 'conference',
    award: 'Special Award',
  },
  {
    title: 'example6',
    authors: [MEMBER.juhokim],
    venue: 'CHI 2018',
    year: 2018,
    topics: ['visualization'],
    type: 'conference',
  },
  {
    title: 'example7',
    authors: [MEMBER.juhokim],
    venue: 'CHI 2018',
    year: 2019,
    topics: ['human-ai-interaction', 'civics'],
    type: 'conference',
    award: 'Special Award',
  },
] as const
