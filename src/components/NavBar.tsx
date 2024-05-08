'use client'

import React from 'react'
import styled from '@emotion/styled'

import { FontVariant, Color } from '@/app/theme'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface NavItemProps {
  children: string
  href: string
  selected: boolean
}

export const NAV_BAR_HEIGHT = 56

export const Nav = styled.nav`
  position: sticky;
  top: 0px;

  display: flex;

  border-bottom: 1px solid ${Color.gray300};
  box-sizing: border-box;
  height: ${NAV_BAR_HEIGHT}px;
  padding: 12px 96px 16px 96px;

  background-color: ${Color.white};
  justify-content: space-between;
  align-items: end;
  z-index: 1;
`

export const Logo = styled.a`
  text-decoration: none;
  ${FontVariant.title_sm}
  color: ${Color.gray900};
  display: flex;
  align-items: end;
  gap: 8px;
  min-width: 272px;
`

export const NavUl = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 36px;
  margin: 0px;
`

const Anchor = styled(Link)<{ selected: boolean }>`
  text-decoration: none;
  color: ${props => (props.selected ? Color.orange900 : Color.gray600)};
  box-shadow: ${props => (props.selected ? `0px 1px 0px 0px ${Color.orange900}` : null)};
  &:hover {
    cursor: pointer;
    color: ${Color.orange900};
  }
`

export const NavItem: React.FC<NavItemProps> = ({ children, href, selected }) => (
  <Anchor href={href} selected={selected}>
    {children}
  </Anchor>
)

export default function NavBar() {
  const NavList = [
    { navItem: 'Home', path: '/' },
    { navItem: 'People', path: '/people' },
    { navItem: 'Publications', path: '/publications' },
    { navItem: 'Courses', path: '/courses' },
    { navItem: 'News', path: '/news' },
  ]

  const pathname = usePathname()

  return (
    <Nav>
      <Logo href="/">
        <Image src="/images/logo.png" width={100} height={26} alt="KIXLAB Logo" />
        <span>KAIST Interaction Lab</span>
      </Logo>

      <NavUl>
        {NavList.map((item, i) => (
          <li key={item.path}>
            <NavItem href={item.path} selected={pathname == item.path}>
              {item.navItem}
            </NavItem>
          </li>
        ))}
      </NavUl>
    </Nav>
  )
}
