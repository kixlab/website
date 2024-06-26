// Sidebar.js
import React from 'react'
import { uniq } from 'lodash'
import styled from '@emotion/styled'
import { Color, FontVariant } from '@/app/theme'
import { NAV_BAR_HEIGHT } from './NavBar'

const SideBarContainer = styled.div`
  position: sticky;
  // TODO: make this more modular by having top take a prop
  top: ${NAV_BAR_HEIGHT + 40}px;
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
        // TODO: Make this more modular by having href take a prop instead of hardcoded value
        href="#preprints"
        className={activeSection === 'preprints' ? 'active' : ''}
        onClick={() => handleLinkClick('preprints')}
      >
        Preprints
      </SidebarLink>
      {/* TODO: Make this more modular by replacing publicationList with a prop */}
      {uniq(publicationList)
        .sort()
        .reverse()
        .map(year => (
          <SidebarLink
            key={year}
            // TODO: Replace hardcoded values
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
