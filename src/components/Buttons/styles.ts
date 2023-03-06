import styled from "styled-components";

export const SignInButtonStyle = styled.button`
  all: unset;
  padding: 0.8rem 1rem;
  cursor: pointer;

  background-color: ${props => props.theme["font-secondary-color"]};
  color: #000;
  `

export const LoginButtonStyle = styled.button`
  all: unset;
  padding: 0.8rem 1rem;
  cursor: pointer;

  border: 1px solid ${props => props.theme["font-secondary-color"]};
`