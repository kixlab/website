interface Props {
  title: string
  date: Date
  categories: string[]
  summary: string
  content?: string // Add path to markdown file if exists
  endsAt?: Date // Add if the post has a deadline
}

interface Post extends Props {}
class Post {
  constructor(attrs: Props) {
    Object.assign(this, attrs)
  }
}

export const POST = {
  ms2024: new Post({
    title: 'KIXLAB has positions for MS students',
    date: new Date('2023-10-13'),
    categories: ['position'],
    summary:
      'KIXLAB has one or two open positions for MS students in SoC KAIST for Spring 2024. If interested, please follow the instructions in the [MS Student Selection Process](https://juhokim.com/students.html#ms_process). Application deadline: Oct. 20th, 2023.',
    endsAt: new Date('2024-10-20'),
  }),
  winterInternship2024: new Post({
    title: 'Winter 2024 Undergraduate Research Internship',
    date: new Date('2023-10-21'),
    categories: ['position'],
    summary:
      "We are looking for a few undergraduate research interns to join KIXLAB this winter. You can find more information on [Prof. Juho Kim's website](https://juhokim.com/2024-winter-internship-call.html).",
    endsAt: new Date('2023-10-31'),
  }),
  uistsic2023award: new Post({
    title: 'Jeongeon and DaEun received an Honorable Mention in the UIST 2023 Student Innovation Contest (SIC)',
    date: new Date('2023-11-01'),
    categories: ['award'],
    summary:
      'Jeongeon and DaEun received an Honorable Mention in the UIST 2023 Student Innovation Contest (SIC) for their project, ["AudiLens: Configurable LLM-Generated Audiences for Public Speech Practice"](https://dl.acm.org/doi/10.1145/3586182.3625114). Congratulations!',
  }),
  iui2024: new Post({
    title: 'Four papers accepted to IUI 2024',
    date: new Date('2023-12-18'),
    categories: ['publication'],
    summary: 'Four papers from KIXLAB have been accepted to [IUI 2024](https://iui.acm.org/2024/).',
    content: '2023-12-18-iui2024.md',
  }),
  thesis2024Award: new Post({
    title: 'DaEun won the department’s Outstanding Thesis Award',
    date: new Date('2023-12-21'),
    categories: ['award'],
    summary: 'DaEun won an Outstanding MS Thesis Award from the School of Computing. Congratulations!',
  }),
  chi2024: new Post({
    title: 'Eight papers conditionally accepted to CHI 2024',
    date: new Date('2024-01-19'),
    categories: ['publication'],
    summary: 'Eight papers from KIXLAB have been conditionally accepted to [CHI 2024](https://chi2024.acm.org/).',
    content: '2024-01-19-chi.md',
  }),
  hcikorea2024Award: new Post({
    title: 'Yoonjoo received Outstanding Presentation Award at HCI Korea 2024',
    date: new Date('2024-01-25'),
    categories: ['award'],
    summary:
      'Yoonjoo Lee received the Outstanding Presentation Award at HCI Korea 2024 for her talk on [DAPIE: Interactive Step-by-Step Explanatory Dialogues to Answer Children’s Why and How Questions](https://dapie.kixlab.org/). Congratulations!',
    content: '2024-hcikorea-yoonjoo.md',
  }),
} as const

export const POSTS = Object.values(POST)
export default Post
