import { FooterMini, Navbar } from "@/app/components";
import { RecoletaFourthSection, RecoletaHeader, RecoletaSecondSection, RecoletaSixthSection, RecoletaThirdSection } from "@/app/sections";

export default function Recoleta() {
    return <>
        <Navbar />
        <RecoletaHeader />
        <RecoletaSecondSection />
        <RecoletaThirdSection />
        <RecoletaFourthSection />
        <RecoletaSixthSection />
        <FooterMini />
    </>
}