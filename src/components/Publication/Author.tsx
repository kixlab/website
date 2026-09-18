import { Member } from '@/data/members'
import { PublicationAuthorEntry } from '@/data/publications'
import styled from '@emotion/styled'
import { Color } from '@/app/theme'

interface AuthorProps {
  author: Member | string
  asterisks: string
}

const Name = ({ author, asterisks }: AuthorProps) => {
  return typeof author === 'string' ? (
    <NotLabMember key={author}>
      {author}
      {asterisks}
    </NotLabMember>
  ) : (
    <LabMember key={author.email}>{`${author.firstName} ${author.lastName}${asterisks}`}</LabMember>
  )
}

export const Author = ({ authors }: { authors: PublicationAuthorEntry[] }) => {
  // Each group of equal-contribution authors gets one more asterisk than the group before it.
  let groupCount = 0
  const asterisks = authors.map(entry => (Array.isArray(entry) ? '*'.repeat(++groupCount) : ''))

  return (
    <AuthorList>
      {authors.flatMap((entry, i) =>
        Array.isArray(entry) ? (
          entry.map((a, j) => <Name key={`${i}-${j}`} author={a} asterisks={asterisks[i]} />)
        ) : (
          <Name key={i} author={entry} asterisks={asterisks[i]} />
        )
      )}
    </AuthorList>
  )
}

const AuthorList = styled.span`
  overflow-wrap: break-word;
  & > *:not(:last-child)::after {
    content: ', ';
  }
`

const LabMember = styled.span`
  color: ${Color.gray800};
`

const NotLabMember = styled.span`
  color: ${Color.gray500};
`
