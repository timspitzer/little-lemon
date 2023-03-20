import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/header/Header.js";
import Main from "./components/main/Main.js";
import Footer from "./components/footer/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
