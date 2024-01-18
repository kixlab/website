import { COURSES } from '@/data/courses'

export default function Page() {
  return (
    <main>
      {COURSES.map(({ title }, i) => (
        <div key={i}>{title}</div>
      ))}
    </main>
  )
}
