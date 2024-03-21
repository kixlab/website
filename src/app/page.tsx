'use client'

// import { Section, SectionTitle, SectionContent } from '@/components/Section'
import Image from 'next/image'
import { Color, FontVariant } from '@/app/theme'
import styled from '@emotion/styled'
import heroImg from '../../public/images/hero-image.png'
import { POSTS } from '@/data/posts'
import { MEMBERS } from '@/data/members'

import { ResearchTopics } from '@/data/publications'

const Section = styled.section<{ altBackground?: boolean }>`
  background-color: ${props => (props.altBackground ? '#F6F6F6' : 'white')};
  // gap: 0;
  margin: 0 auto;
  width: 100%;
  padding: 96px;
  // max-width: 1000px;
`
const SectionTitle = styled.h2`
  ${FontVariant.title_md}
  text-align: center;
  // margin-top: 48px;
  margin-bottom: 48px;

  &:after {
    content: '';
    // position: absolute;
    left: 0;
    bottom: -5px;
    width: 50px;
    height: 2px;
    background-color: black;
  }
`

const Grid = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: 1fr 1fr 1fr;
`

const GridItem = styled.div`
  padding: 26px;
  border: thin solid;
  border-radius: 15px;
`

const Flex = styled.div`
  display: flex;
  // height: 100%;
  align-items: center;
  max-width: 100vw;
  justify-content: space-between;
`
const FlexItem = styled.div`
  // flex-basis: 100%;
  flex: 1;
  // max-width: 100vw;
`

const Title = styled.h1`
  ${FontVariant.title_xl}
  letter-spacing: 0.5px;
  text-transform: uppercase;
`

const CardTitle = styled.h3`
  ${FontVariant.title_md}
`
const CardAvatar = styled(Image)`
  border-radius: 50%;
  max-width: 36px;
  max-height: 36px;
  width: auto;
  height: auto;
`
const Text = styled.p`
  ${FontVariant.body_md}
  color: ${Color.gray700}
`
const Label = styled.div`
  ${FontVariant.body_md}
  width: fit-content;
  background-color: #7d7d7d;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  text-transform: capitalize;
`

export default function Page() {
  let filteredMembers = []
  return (
    <main style={{ padding: '0px', gap: '0px', maxWidth: '100vw' }}>
      <Section id="hero-section" style={{ padding: '0' }}>
        <Flex>
          <FlexItem>
            <Flex
              id="hero-text-area"
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'start',
                padding: '0 96px 0 96px',
              }}
            >
              <Title>
                Welcome to <span style={{ color: `${Color.orange900}`, padding: '0 7px 0 0' }}>Kixlab</span>!
              </Title>
              <br />
              <CardTitle style={{ lineHeight: '1.7em', marginBottom: '10px' }}>
                Research of <br /> <strong>Human-Computer Interaction</strong> at Scale
              </CardTitle>
              <Text style={{ textAlign: 'justify', color: '#565656' }}>
                The KAIST Interaction Lab (KIXLAB) is a human-computer interaction research group in the School of
                Computing at KAIST. Our mission is to improve ways people learn, collaborate, discuss, make decisions,
                and take action online by designing new interactive systems that leverage and support interaction at
                scale.
              </Text>
            </Flex>
          </FlexItem>
          <FlexItem style={{ flexShrink: '2' }}>
            <Image
              src={heroImg}
              alt="Kixlab group picture"
              layout="responsive"
              priority
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </FlexItem>
        </Flex>
      </Section>

      <Section id="news-section" altBackground={true} style={{ paddingBottom: '48px' }}>
        <SectionTitle>Latest News</SectionTitle>
        <Flex style={{ alignItems: 'stretch', columnGap: '72px' }}>
          {POSTS.sort((a, b) => b.date.getTime() - a.date.getTime())
            .slice(0, 4)
            .map(post => (
              <FlexItem>
                <Grid>
                  {post.categories.map(category => (
                    <Label>
                      {/* <span style={{ fontColor: 'white' }}>{category}</span> */}
                      {category}
                    </Label>
                  ))}
                </Grid>
                <CardTitle>{post.title}</CardTitle>
                <Text style={{ fontColor: `${Color.gray700}` }}>{post.date.toDateString()}</Text>
                <Text>{post.summary}</Text>
              </FlexItem>
            ))}
        </Flex>
      </Section>

      <Section id="research-section">
        <SectionTitle>Research Themes</SectionTitle>
        <Grid>
          {ResearchTopics.map(topic => (
            <GridItem>
              <CardTitle style={{ textTransform: 'capitalize' }}>
                🤖<br></br>
                {topic}
              </CardTitle>
              <Text style={{ color: 'gray', paddingBottom: '12px' }}>One or two line description of this project</Text>
              <Flex style={{ flexDirection: 'row', justifyContent: 'start', gap: '8px' }}>
                {
                  (filteredMembers = MEMBERS.filter(
                    member => Array.isArray(member.researchTopics) && member.researchTopics.includes(topic)
                  )
                    .slice(0, 6)
                    .map(member => (
                      <CardAvatar
                        width={36}
                        height={36}
                        src={member.imgPath}
                        alt={member.fullName}
                        style={{ borderRadius: '50%' }}
                      ></CardAvatar>
                    )))
                }

                {
                  /* Add +{number} in case of overfill */
                  filteredMembers.slice(6).length > 0 && (
                    <span style={{ width: '36px', textAlign: 'center' }}>+{filteredMembers.slice(6).length}</span>
                  )
                }
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Section>

      <Section id="media-section" altBackground={true}>
        <SectionTitle>KIXLAB on Media</SectionTitle>
        <Flex>
          <FlexItem></FlexItem>
        </Flex>
      </Section>
    </main>
  )
}
