import styled from "styled-components";

export const FilledButtonStyle = styled.button`
  all: unset;
  padding: 0.8rem 1rem;
  cursor: pointer;

  background-color: ${props => props.theme["font-secondary-color"]};
  color: #000;
  `

export const OutlinedButtonStyle = styled.button`
  all: unset;
  padding: 0.8rem 1rem;
  cursor: pointer;

  border: 1px solid ${props => props.theme["font-secondary-color"]};
`