import { HomeBannerContainer, HomeBannerContent, HomeBannerSearch, HomeBannerTitle } from "./styles";
import { OutlinedButton } from "~/components/Buttons";


export function HomeBanner() {
  return(
    <HomeBannerContainer>
      <HomeBannerContent>
        <HomeBannerTitle>
          <h1>COACH STATS BR</h1>
          <p>A base de dados mais completas das estatísticas dos treinadores em competições nacionais*</p>
        </HomeBannerTitle>
        <HomeBannerSearch>
          <input 
            type="text"
            placeholder="Faça uma busca por treinador"
          />
          <OutlinedButton content="Buscar" />
        </HomeBannerSearch>          
      </HomeBannerContent>
    </HomeBannerContainer>
  )
}