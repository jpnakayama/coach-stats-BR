import styled from "styled-components";
import { NavLink } from "react-router-dom"

export const HeaderContainer = styled.header`
  width: 100vw;
  margin: 0 auto;
  background-color: ${props => props.theme["bg-secondary-color"]};
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 0 3rem;
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NavItem = styled(NavLink)`
  all: unset;
  color: ${props => props.theme["font-secondary-color"]};

  padding: 2rem;
  cursor: pointer;
  
  &.active {
    font-weight: 700;
  }

  :hover {
    border-bottom: 2px solid currentColor;
    padding-bottom: 30px;
  }
`

export const HeaderButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`