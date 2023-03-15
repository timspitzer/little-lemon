import "./App.css";
import Layout from "./layouts/layout/Layout.js";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home.js";
import About from "./pages/about/About.js";
import Login from "./pages/login/Login.js";
import Order from "./pages/order/Order.js";
import Reservations from "./pages/reservations/Reservations.js";
import Menu from "./pages/menu/Menu.js";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/reservations" element={<Reservations />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
