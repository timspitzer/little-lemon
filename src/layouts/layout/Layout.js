import Footer from "../../components/footer/Footer.js";
import Header from "../../components/header/Header.js";
import HeroSection from "../../components/hero-section/HeroSection.js";
import Main from "../../components/main/Main.js";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header></Header>
      <HeroSection></HeroSection>
      <Main>{children}</Main>
      <Footer></Footer>
    </div>
  );
}
