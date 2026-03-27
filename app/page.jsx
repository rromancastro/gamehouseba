import { Footer, Navbar, Textura } from "./components";
import { HomeEigthSection, HomeFifthSection, HomeFourthSection, HomeHeader, HomeSecondSection, HomeSeventhSection, HomeThirdSection } from "./sections";

export default function Home() {
  return (<>
    <Navbar />
    <HomeHeader />
    <HomeSecondSection />
    <Textura />
    <HomeThirdSection />
    <HomeFourthSection />
    <HomeFifthSection />
    <HomeSeventhSection />
    <HomeEigthSection />
    <Footer />
  </>)
}
