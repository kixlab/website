import { MEMBERS } from '@/data/members'

export default function Page() {
  return (
    <main>
      {MEMBERS.map(({ fullName }, i) => (
        <div key={i}>{fullName}</div>
      ))}
    </main>
  )
}
