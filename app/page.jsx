import { Footer, Navbar, Textura } from "./components";
import { HomeEigthSection, HomeFifthSection, HomeFourthSection, HomeHeader, HomeSecondSection, HomeSeventhSection, HomeSixthSection, HomeThirdSection } from "./sections";

export default function Home() {
  return (<>
    <Navbar />
    <HomeHeader />
    <HomeSecondSection />
    <HomeThirdSection />
    <HomeFourthSection />
    <HomeFifthSection />
    <HomeSixthSection />
    <HomeSeventhSection />
    <HomeEigthSection />
    <Footer />
  </>)
}
