'use client'

import React from 'react'
import styled from '@emotion/styled'

import { FontVariant, Color, ScreenSize } from '@/app/theme'
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
  background-color: ${Color.white};
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  padding: 12px 24px 16px 96px;
  padding-left: clamp(
    48px,
    calc(48px + 0.23 * (100vw - ${ScreenSize.md})),
    96px
  ); // Prevent the Kixlab logo from suddenly jumping to the left when shrinking the window
  @media (max-width: ${ScreenSize.sm}) {
    padding-right: 48px; // Make the padding on the sides equivalent when the hamburger button appears
  }
`

export const Logo = styled.a`
  text-decoration: none;
  ${FontVariant.title_sm}
  color: ${Color.gray900};
  display: flex;
  align-items: end;
  gap: 8px;
`

const NavRow = styled.div`
  display: block;
  @media (max-width: ${ScreenSize.sm}) {
    display: none;
  }
`

export const NavUl = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 2vw;
  margin: 0px;
  padding: 0px;
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

const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 1rem;
  width: 300px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  transition: height 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  padding: 12px 24px 0px 96px;
  @media (min-width: 784px) {
    display: none;
  }
  @media (max-width: ${ScreenSize.sm}) {
    padding: 12px 48px 0px 48px;
  }
`
const HamburgerButton = styled.button`
  display: none;
  width: 30px;
  @media (max-width: ${ScreenSize.sm}) {
    display: block;
  }
`

const ResponsiveSpan = styled.span`
  @media (max-width: ${ScreenSize.md}) {
    display: none;
  }
`

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const NavList = [
    { navItem: 'Home', path: '/' },
    { navItem: 'People', path: '/people' },
    { navItem: 'Publications', path: '/publications' },
    { navItem: 'Courses', path: '/courses' },
    { navItem: 'News', path: '/news' },
  ]

  const pathname = usePathname()

  return (
    <>
      <Nav>
        <Logo href="/">
          <Image src="/images/logo.png" width={100} height={26} alt="KIXLAB Logo" />
          <ResponsiveSpan>KAIST Interaction Lab</ResponsiveSpan>
        </Logo>

        <NavRow>
          <NavUl>
            {NavList.map((item, i) => (
              <li key={item.path}>
                <NavItem href={item.path} selected={pathname == item.path}>
                  {item.navItem}
                </NavItem>
              </li>
            ))}
          </NavUl>
        </NavRow>

        <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
          <Image src="/images/hamburger-icon.svg" width={32} height={24} alt="Menu" />
        </HamburgerButton>
      </Nav>
      {isOpen && (
        <DropDownMenu>
          <NavUl>
            {NavList.map((item, i) => (
              <li key={item.path}>
                <NavItem href={item.path} selected={pathname == item.path}>
                  {item.navItem}
                </NavItem>
              </li>
            ))}
          </NavUl>
        </DropDownMenu>
      )}
    </>
  )
}
