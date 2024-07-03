interface VideoProps {
  url: string
  title: string
  id: string
  date: Date
}

interface Video extends VideoProps {}
class Video {
  constructor(attrs: VideoProps) {
    Object.assign(this, attrs)
  }

  get formattedDate() {
    return this.date.toLocaleDateString('en-us', { year: 'numeric', month: '2-digit', day: '2-digit' })
  }
}

const VIDEOS = [
  new Video({
    url: 'https://www.youtube.com/embed/j0v1Cr74kN8?si=tp_blkpKqN4FP9te',
    id: 'j0v1Cr74kN8',
    title: 'What is Interaction-centric AI?',
    date: new Date('2022-10-28'),
  }),
  new Video({
    url: 'https://www.youtube.com/embed/pkhTuiYvvw4?si=hUee7IqJ-m95L1k2',
    id: 'pkhTuiYvvw4',
    title: 'KIXLAB Introduction',
    date: new Date('2021-02-12'),
  }),
  new Video({
    url: 'https://www.youtube.com/embed/GgvkmXXPFPI?si=YWMLcLMhac5kRYzJ',
    id: 'GgvkmXXPFPI',
    title: 'Open KAIST',
    date: new Date('2022-01-10'),
  }),
] as const

export default VIDEOS
