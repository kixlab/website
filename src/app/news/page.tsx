import { POSTS } from '@/data/posts'
import { formatDistance } from 'date-fns'

export default function Page() {
  return (
    <main>
      {POSTS.map(({ title, date }, i) => (
        <div key={i}>
          <div>{title}</div>
          <span>{formatDistance(date, new Date(), { addSuffix: true })}</span>
        </div>
      ))}
    </main>
  )
}
