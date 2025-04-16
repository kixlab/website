import { Member } from '@/data/members'
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

export const Author = ({ authors }: { authors: (Member | string | (string | Member)[])[] }) => {
  return (
    <AuthorList>
      {authors.flatMap((entry, i) =>
        Array.isArray(entry) ? (
          entry.map((a, j) => <Name key={j} author={a} asterisks={'*'.repeat(i + 1)} />)
        ) : (
          <Name key={i} author={entry} asterisks="" />
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
