import styled from "styled-components";
import bannerBG from "assets/img/home-banner-bg.svg"

export const HomeBannerContainer = styled.section`
  background-image: url(${bannerBG});
  background-repeat: no-repeat;
  background-size: contain;
  
  width: 100vw;
  height: 100vh;
  padding: 5rem 0;
`

export const HomeBannerContent = styled.div`
  max-width: 45vw;
  float: right;

  margin: 0 auto;
  padding: 5rem 3rem 0
`

export const HomeBannerTitle = styled.div`
  margin: 0 auto;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 2rem;
  }

  p {
    font-weight: 700;
  }
`

export const HomeBannerSearch = styled.form`
  margin: 5rem auto 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  input {
    padding: 0.8rem 3rem;

    border: 2px solid gray;
    width: 70%;
    background-color: transparent;
    color: ${props => props.theme["font-secondary-color"]};
    
    ::placeholder {
      text-align: center;
    }
    
    :focus {
      border: 2px solid ${props => props.theme["font-secondary-color"]};
    }
  }
  
  button {
    :hover {
      background-color: ${props => props.theme["font-secondary-color"]};
      color: #000;
      transition: all 0.2s;
    }
  }
`
