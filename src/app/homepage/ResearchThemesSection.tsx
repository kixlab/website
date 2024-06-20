import Image from 'next/image'
import { Color, FontVariant, ScreenSize } from '@/app/theme'
import styled from '@emotion/styled'
import { MEMBERS } from '@/data/members'
import { ResearchTopics } from '@/data/publications'
import { SectionHeader } from '@/components/Section'
import { useMemo } from 'react'
import { Section, Text } from './Styles'

const ResearchTopicsArea = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 45%), 1fr));
`

const ResearchTopicItem = styled.div`
  padding: 26px;
  border: thin solid;
  border-radius: 15px;
  &:hover {
    box-shadow: 3px 3px 10px 0px ${Color.orange300};
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
  gap: 8px;
`

const ResearchTopicsMemberAvatar = styled(Image)`
  border-radius: 50%;
  max-width: 36px;
  max-height: 36px;
  width: auto;
  height: auto;
`

export const ResearchThemesSection = () => {
  const [membersByResearchTopic, numVisible] = useMemo(() => {
    // TODO: Specify the type of membersByResearchTopic
    const membersByResearchTopic: Record<string, any[]> = {}
    ResearchTopics.forEach(topic => {
      membersByResearchTopic[topic] = MEMBERS.filter(
        member => member.researchTopics && member.researchTopics.includes(topic)
      )
    })
    return [membersByResearchTopic, 4]
  }, [])

  return (
    <Section id="research-section">
      <SectionHeader title="Research Themes" subtitle="Discover the research happening at KIXLAB" />
      <ResearchTopicsArea>
        {Object.entries(membersByResearchTopic).map(([topic, filteredMembers]) => {
          return (
            <ResearchTopicItem key={topic}>
              <ResearchTopicItemTitle style={{ textTransform: 'capitalize' }}>
                🤖<br></br>
                {topic}
              </ResearchTopicItemTitle>
              <Text style={{ color: 'gray', paddingBottom: '12px' }}>One or two line description of this project</Text>
              <ResearchTopicMembersArea>
                {filteredMembers.slice(0, numVisible).map((member, j) => (
                  <ResearchTopicsMemberAvatar
                    width={36}
                    height={36}
                    src={member.imgPath}
                    alt={member.fullName}
                    key={member.email}
                  />
                ))}

                {/* Conditional rendering optimized */}
                {filteredMembers.length - numVisible > 0 && (
                  <span style={{ width: '36px', textAlign: 'center' }}>+{filteredMembers.length - numVisible}</span>
                )}
              </ResearchTopicMembersArea>
            </ResearchTopicItem>
          )
        })}
      </ResearchTopicsArea>
    </Section>
  )
}
