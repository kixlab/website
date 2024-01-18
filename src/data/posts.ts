interface Props {
  title: string
  date: Date
  categories: string[]
  img: string
}

interface Post extends Props {}
class Post {
  constructor(attrs: Props) {
    Object.assign(this, attrs)
  }
}

export const POST = {
  kixlabopen: new Post({
    title: 'KIXLAB Open!',
    date: new Date('2016-07-01'),
    categories: ['news'],
    img: 'Kixlab_open.png',
  }),
} as const

export const POSTS = Object.values(POST)
export default Post
