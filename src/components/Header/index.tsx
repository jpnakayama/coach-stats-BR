import { LoginButton, SignInButton } from "../Buttons";
import { HeaderButtons, HeaderContainer, HeaderContent, NavItem, NavMenu } from "./styles";

export function Header() {
  return(
    <HeaderContainer>
      <HeaderContent>
        <h1>Coach Stats BR</h1>
        <NavMenu>
          <NavItem to="/">Home</NavItem>
          <NavItem to="consultas">Consultas</NavItem>
          <NavItem to="h2h">H2H</NavItem>
        </NavMenu>
        <HeaderButtons>
          <SignInButton />
          <LoginButton />
        </HeaderButtons>
      </HeaderContent>
    </HeaderContainer>
  )
}