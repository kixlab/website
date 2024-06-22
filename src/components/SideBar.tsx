// Sidebar.js
import React from 'react'
import { uniq } from 'lodash'
import styled from '@emotion/styled'
import { Color, FontVariant } from '@/app/theme'

const SideBarContainer = styled.div`
  width: 15%;
  position: sticky;
  padding: 96px;
  padding-left: 0px;
  top: 0;
  height: 100vh;
`

const SidebarLink = styled.a`
  display: block;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  padding-left: 10px;
  padding-bottom: 5px;
  color: ${Color.gray700};
  ${FontVariant.body_md}

  &.active {
    color: ${Color.orange900};
  }

  &:hover {
    color: ${Color.orange900};
    text-decoration: underline;
  }
`

interface Props {
  activeSection: string | null
  handleLinkClick: (sectionId: string) => void
  publicationList: number[]
}

const Sidebar = ({ activeSection, handleLinkClick, publicationList }: Props) => {
  return (
    <SideBarContainer>
      <SidebarLink
        href="#preprints"
        className={activeSection === 'preprints' ? 'active' : ''}
        onClick={() => handleLinkClick('preprints')}
      >
        Preprints
      </SidebarLink>
      {uniq(publicationList)
        .sort()
        .reverse()
        .map(year => (
          <SidebarLink
            key={year}
            href={`#year-${year}`}
            className={activeSection === `year-${year}` ? 'active' : ''}
            onClick={() => handleLinkClick(`year-${year}`)}
          >
            {year}
          </SidebarLink>
        ))}
    </SideBarContainer>
  )
}

export default Sidebar
