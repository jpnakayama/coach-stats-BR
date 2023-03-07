import { HomeBannerContainer, HomeBannerContent, HomeBannerTitle } from "./styles";
import { OutlinedButton } from "~/components/Buttons";
import bannerImg from "assets/img/home-banner-img.svg"


export function HomeBanner() {
  return(
    <HomeBannerContainer>
      <HomeBannerContent>
        <img src={bannerImg} alt="" />
        <HomeBannerTitle>
          <h1>COACH STATS BR</h1>
          <p>A base de dados mais completa das estatísticas dos treinadores em competições nacionais*</p>
          <div>
            <OutlinedButton content="Consulte"/>
            <OutlinedButton content="Compare"/>
          </div>
        </HomeBannerTitle>       
      </HomeBannerContent>
    </HomeBannerContainer>
  )
}