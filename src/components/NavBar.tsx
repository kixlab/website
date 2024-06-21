'use client'
import React from 'react'
import styled from '@emotion/styled'

import { FontVariant, Color, ScreenSize, linearlyScaleSize } from '@/app/theme'
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
  display: flex;
  box-sizing: border-box;
  height: ${NAV_BAR_HEIGHT}px;
  background-color: ${Color.white};
  justify-content: space-between;
  align-items: center;

  // Prevent the Kixlab logo from suddenly jumping to the left when shrinking the window
  padding: 12px 24px 16px
    ${linearlyScaleSize({
      minSizePx: 48,
      maxSizePx: 96,
      minScreenSizePx: parseInt(ScreenSize.md),
      maxScreenSizePx: parseInt(ScreenSize.lg),
    })};
  @media (max-width: ${ScreenSize.sm}) {
    padding-right: 48px; // Make the padding on the sides equivalent when the hamburger button appears
  }
  @media (min-width: ${ScreenSize.max}) {
    width: ${ScreenSize.max};
    margin: 0 auto;
  }
`

const NavContainer = styled.div`
  position: 'sticky';
  top: 0;
  z-index: 2;
  border-bottom: 1px solid ${Color.gray300};
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
  @media (max-width: ${ScreenSize.sm}) {
    flex-direction: column;
    align-items: center;
    gap: 0px;

    & > li {
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;

      &:last-child {
        border-bottom: 1px solid ${Color.gray300};
      }
    }
  }
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
  position: fixed;
  top: ${NAV_BAR_HEIGHT}px;
  background-color: ${Color.white};
  width: 100vw;
  z-index: 1;
  /* Animation */
  transition: transform 0.2s;
  &.open {
    transform: translateY(0px);
  }
  &.closed {
    transform: translateY(-100%);
  }
  @media (min-width: ${ScreenSize.sm}) {
    display: none;
  }
  @media (max-width: ${ScreenSize.sm}) {
    // TODO: Decide whether to keep centered menu items vs left-aligned menu items
    // padding: 12px 48px;
  }
`

const HamburgerButton = styled.button`
  display: none;
  width: 30px;
  background-color: white;
  border: none;
  cursor: pointer;
  @media (max-width: ${ScreenSize.sm}) {
    display: block;
  }
`

const ResponsiveSpan = styled.span`
  @media (max-width: ${ScreenSize.md}) {
    display: none;
  }
`

// Close the dropdown menu whenever the user clicks outside of the dropdown menu area
const NavList = [
  { navItem: 'Home', path: '/' },
  { navItem: 'People', path: '/people' },
  { navItem: 'Publications', path: '/publications' },
  { navItem: 'Courses', path: '/courses' },
  { navItem: 'News', path: '/news' },
]

export default function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const hamburgerRef = React.useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  // Close the dropdown menu whenever the user clicks outside of the dropdown menu area
  React.useEffect(() => {
    const handleClickOutsideDropDownMenu = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutsideDropDownMenu)
    return () => document.removeEventListener('mousedown', handleClickOutsideDropDownMenu)
  }, [dropdownRef])

  return (
    <>
      <NavContainer>
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
          <HamburgerButton ref={hamburgerRef} onClick={() => setIsOpen(!isOpen)}>
            <Image src="/images/hamburger-icon.png" width={32} height={18} alt="Navigation Menu" />
          </HamburgerButton>
        </Nav>
      </NavContainer>
      {
        <DropDownMenu ref={dropdownRef} className={isOpen ? 'open' : 'closed'}>
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
      }
    </>
  )
}
