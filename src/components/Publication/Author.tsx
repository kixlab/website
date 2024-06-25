import { IMember } from '@/data/members'
import styled from '@emotion/styled'
import { Color } from '@/app/theme'

const AuthorList = styled.div`
  & > *:not(:last-child)::after {
    content: ', ';
  }
`

const LabMember = styled.span``

const NotLabMember = styled.span`
  color: ${Color.gray500};
`

export default function Author({ authors }: { authors: (IMember | string)[] }) {
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
