// Sidebar.js
import React from 'react'
import { uniq } from 'lodash'
import styled from '@emotion/styled'
import { Color, FontVariant } from '@/app/theme'
import { NAV_BAR_HEIGHT } from './NavBar'

const SideBarContainer = styled.div`
  position: sticky;
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
  sidebarList: string[]
}

const capitalizeWords = (s: string) => {
  return (
    s
      // Insert a space between words in a camelcase string and capitalize the first letter of each word
      // Note: This is a bandaid fix for the People page. Will probably need to refactor Sidebar further in the future
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
  )
}

const Sidebar = ({ activeSection, handleLinkClick, sidebarList }: Props) => {
  return (
    <SideBarContainer>
      {sidebarList.map(section => (
        <SidebarLink
          key={section}
          href={`#${section}`}
          className={activeSection === section ? 'active' : ''}
          onClick={() => handleLinkClick(section)}
        >
          {capitalizeWords(section)}
        </SidebarLink>
      ))}
    </SideBarContainer>
  )
}

export default Sidebar
