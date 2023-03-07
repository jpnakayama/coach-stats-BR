import { HomeBanner } from "./components/Banner";
import { Ranking } from "./components/Ranking";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <HomeBanner />
      <Ranking />
    </HomeContainer>
  )
}