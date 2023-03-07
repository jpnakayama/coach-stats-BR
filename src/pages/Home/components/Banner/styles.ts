import styled from "styled-components";

export const HomeBannerContainer = styled.section`
  width: 100vw;
  padding: 1rem 0;
  `

export const HomeBannerContent = styled.div`
  width: 100vw;
  margin: 0 auto;
  display: flex;
  gap: 1rem;

  align-items: center;
`

export const HomeBannerTitle = styled.div`
  margin: 0 2rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  h1 {
    font-size: 3rem;
  }

  p {
    font-weight: 700;
    line-height: 2rem;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  button {
    :hover {
      background-color: ${props => props.theme["font-secondary-color"]};
      color: #000;
      transition: all 0.2s;
    }
  }
`

