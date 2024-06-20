import Image from 'next/image'
import { Color, FontVariant, ScreenSize } from '@/app/theme'
import styled from '@emotion/styled'
import { MEMBERS, IMember } from '@/data/members'
import { ResearchTopics, PUBLICATIONS, type ResearchTopicType } from '@/data/publications'
import { SectionHeader } from '@/components/Section'
import { useMemo } from 'react'
import { Section, Text } from './Styles'
import Link from 'next/link'

const ResearchTopicsArea = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 45%), 1fr));
`

const ResearchTopicItem = styled.div`
  padding: 24px 36px;
  border: thin solid ${Color.gray500};
  border-radius: 15px;
  &:hover {
    box-shadow: 0px 0px 10px 0px ${Color.orange700};
    border: thin solid ${Color.orange700};
  }
  transition: box-shadow 0.3s ease-in-out;
`

const ResearchTopicItemTitle = styled.h3`
  ${FontVariant.title_md}
`

const ResearchTopicMembersArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 8px;
`

const ResearchTopicsMemberAvatar = styled(Image)`
  border-radius: 50%;
  max-width: 36px;
  max-height: 36px;
  width: auto;
  height: auto;
`

const GatherStatsByResearchTopic = () => {
  // TODO: Somehow avoid having to define the keys explicitly. Typescript doesn't allow empty definition
  const statsByResearchTopic: Record<ResearchTopicType, { numPublications: number; authors: IMember[] }> = {} as any
  ResearchTopics.forEach(topic => {
    const filteredPublications = PUBLICATIONS.filter(publication => publication.topics.includes(topic))
    const numPublications = filteredPublications.length
    const topicAuthors = filteredPublications
      .sort((a, b) => b.year - a.year)
      .flatMap(publication => publication.authors)
    const filteredAuthors = Object.values(MEMBERS).filter(member =>
      topicAuthors.includes(`${member.firstName} ${member.lastName}`)
    )
    statsByResearchTopic[topic] = { numPublications, authors: filteredAuthors }
  })
  return statsByResearchTopic
}

export const ResearchThemesSection = () => {
  const [statsByResearchTopic, numVisible] = useMemo(() => {
    // TODO: Specify the type of membersByResearchTopic
    const statsByResearchTopic: Record<string, any> = GatherStatsByResearchTopic()
    return [statsByResearchTopic, 6]
  }, [])

  return (
    <Section id="research-section">
      <SectionHeader title="Research Themes" subtitle="Discover the research happening at KIXLAB" />
      <ResearchTopicsArea>
        {Object.entries(statsByResearchTopic).map(([topic, stats]) => {
          return (
            <Link
              href={`/publications/?researchTopic=${topic}`}
              key={topic}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <ResearchTopicItem key={topic}>
                <ResearchTopicItemTitle style={{ textTransform: 'capitalize' }}>
                  🤖<br></br>
                  {topic}
                </ResearchTopicItemTitle>
                <Text style={{ color: 'gray', paddingBottom: '12px' }}>{stats.numPublications} publications</Text>
                <ResearchTopicMembersArea>
                  {stats.authors.slice(0, numVisible).map((member: IMember) => (
                    <ResearchTopicsMemberAvatar
                      width={36}
                      height={36}
                      src={`/images/members/${member.img}`}
                      alt={`${member.firstName} ${member.lastName}`}
                      key={member.email}
                    />
                  ))}

                  {/* Conditional rendering optimized */}
                  {stats.authors.length - numVisible > 0 && (
                    <span style={{ width: '36px', textAlign: 'center' }}>+{stats.authors.length - numVisible}</span>
                  )}
                </ResearchTopicMembersArea>
              </ResearchTopicItem>
            </Link>
          )
        })}
      </ResearchTopicsArea>
    </Section>
  )
}
