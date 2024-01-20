import { PUBLICATIONS } from '@/data/publications'

export default function Page() {
  return (
    <main>
      {PUBLICATIONS.map(({ title, authors }, i) => (
        <div key={i}>
          <div>{title}</div>
          {authors.map(({ name, lastName }, i) => (
            <span key={i}>
              {name} {lastName}
            </span>
          ))}
        </div>
      ))}
    </main>
  )
}
