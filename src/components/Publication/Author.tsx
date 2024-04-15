import Member from '@/data/members'
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

export default function Author({ authors }: { authors: (Member | string)[] }) {
  return (
    <AuthorList>
      {authors.map((author) =>
        author instanceof Member ? (
          <LabMember key={author.fullName}>{author.fullName}</LabMember>
        ) : (
          <NotLabMember key={author}>{author}</NotLabMember>
        )
      )}
    </AuthorList>
  )
}
