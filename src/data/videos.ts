export interface IVideo {
  url: string
  title: string
  date: Date
}

export const VIDEOS: IVideo[] = [
  {
    url: 'https://www.youtube.com/embed/j0v1Cr74kN8?si=tp_blkpKqN4FP9te',
    title: 'What is Interaction-centric AI?',
    date: new Date('2022-10-28'),
  },
  {
    url: 'https://www.youtube.com/embed/pkhTuiYvvw4?si=hUee7IqJ-m95L1k2',
    title: 'KIXLAB Introduction',
    date: new Date('2021-02-12'),
  },
  {
    url: 'https://www.youtube.com/embed/GgvkmXXPFPI?si=YWMLcLMhac5kRYzJ',
    title: 'Open KAIST',
    date: new Date('2022-01-10'),
  },
] as const satisfies IVideo[]
