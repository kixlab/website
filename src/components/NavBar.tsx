'use client'

import React from 'react'
import styled from '@emotion/styled'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface NavItemProps {
  children: string
  href: string
  selected: boolean
}

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 12px 96px 16px 96px;
  align-items: end;
  border-bottom: 1px solid ${props => props.theme.color.gray300};
`

export const Logo = styled.a`
  text-decoration: none;
  ${props => props.theme.fontVariant.title_sm}
  color: ${props => props.theme.color.gray900};
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
  color: ${props => (props.selected ? props.theme.color.orange900 : props.theme.color.gray600)};
  box-shadow: ${props => (props.selected ? `0px 1px 0px 0px ${props.theme.color.orange900}` : null)};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.color.orange900};
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
