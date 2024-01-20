import { MEMBERS } from '@/data/members'

export default function Page() {
  return (
    <main>
      {MEMBERS.map(({ name, lastName }, i) => (
        <div key={i}>
          {name} {lastName}
        </div>
      ))}
    </main>
  )
}
