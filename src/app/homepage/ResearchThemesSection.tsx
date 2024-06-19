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
  border: thin solid;
  border-radius: 15px;
  &:hover {
    box-shadow: 0px 0px 10px 0px ${Color.orange300};
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

const GatherMembersByResearchTopic = () => {
  // TODO: Somehow avoid having to define the keys explicitly. Typescript doesn't allow empty definition
  const membersByResearchTopic: Record<ResearchTopicType, any[]> = {
    datamining: [],
    crowdsourcing: [],
    learning: [],
    civics: [],
    visualization: [],
    social: [],
    'human-ai-interaction': [],
  }
  ResearchTopics.forEach(topic => {
    const filteredPublications = PUBLICATIONS.filter(publication => publication.topics.includes(topic))
    const authors = filteredPublications.sort((a, b) => b.year - a.year).flatMap(publication => publication.authors)
    const filteredMembers = Object.values(MEMBERS)
    const authorMembers = filteredMembers.filter(member => authors.includes(`${member.firstName} ${member.lastName}`))
    membersByResearchTopic[topic] = authorMembers
  })
  return membersByResearchTopic
}

export const ResearchThemesSection = () => {
  const [membersByResearchTopic, numVisible] = useMemo(() => {
    // TODO: Specify the type of membersByResearchTopic
    const membersByResearchTopic: Record<string, any[]> = GatherMembersByResearchTopic()
    return [membersByResearchTopic, 6]
  }, [])

  return (
    <Section id="research-section">
      <SectionHeader title="Research Themes" subtitle="Discover the research happening at KIXLAB" />
      <ResearchTopicsArea>
        {Object.entries(membersByResearchTopic).map(([topic, filteredMembers]) => {
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
                <Text style={{ color: 'gray', paddingBottom: '12px' }}>
                  One or two line description of this project
                </Text>
                <ResearchTopicMembersArea>
                  {filteredMembers.slice(0, numVisible).map(member => (
                    <ResearchTopicsMemberAvatar
                      width={36}
                      height={36}
                      src={`/images/members/${member.img}`}
                      alt={`${member.firstName} ${member.lastName}`}
                      key={member.email}
                    />
                  ))}

                  {/* Conditional rendering optimized */}
                  {filteredMembers.length - numVisible > 0 && (
                    <span style={{ width: '36px', textAlign: 'center' }}>+{filteredMembers.length - numVisible}</span>
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
