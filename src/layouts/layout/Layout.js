import Footer from "../../components/footer/Footer.js";
import Header from "../../components/header/Header.js";
import Main from "../../components/main/Main.js";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Header></Header>
      <Main>{children}</Main>
      <Footer></Footer>
    </div>
  );
}
