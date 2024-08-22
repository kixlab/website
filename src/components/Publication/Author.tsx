import { Member } from '@/data/members'
import styled from '@emotion/styled'
import { Color } from '@/app/theme'

const AuthorList = styled.span`
  overflow-wrap: break-word;
  & > *:not(:last-child)::after {
    content: ', ';
  }
`

const LabMember = styled.span``

const NotLabMember = styled.span`
  color: ${Color.gray500};
`

export const Author = ({ authors }: { authors: (Member | string)[] }) => {
  return (
    <AuthorList>
      {authors.map(author =>
        typeof author === 'string' ? (
          <NotLabMember key={author}>{author}</NotLabMember>
        ) : (
          <LabMember key={author.email}>
            {author.firstName} {author.lastName}
          </LabMember>
        )
      )}
    </AuthorList>
  )
}
