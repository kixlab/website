import { Member } from '@/data/members'
import styled from '@emotion/styled'
import { Color } from '@/app/theme'

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

const Name = (author: Member | string, asterisks: string) => {
  return typeof author === 'string' ? (
    <NotLabMember key={author}>
      {author}
      {asterisks}
    </NotLabMember>
  ) : (
    <LabMember key={author.email}>{`${author.firstName} ${author.lastName}${asterisks}`}</LabMember>
  )
}

const printAuthors = (authors: (Member | string | (string | Member)[])[]) => {
  return authors.flatMap((entry, index) =>
    Array.isArray(entry) ? entry.map(a => Name(a, '*'.repeat(index + 1))) : Name(entry, '')
  )
}

export const Author = ({ authors }: { authors: (Member | string | (string | Member)[])[] }) => {
  return <AuthorList>{printAuthors(authors)}</AuthorList>
}
