import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home.js";
import About from "./pages/about/About.js";
import Login from "./pages/login/Login.js";
import Order from "./pages/order/Order.js";
import Reservations from "./pages/reservations/Reservations.js";
import Menu from "./pages/menu/Menu.js";
import { useReducer } from "react";
import Header from "./components/header/Header.js";
import Main from "./components/main/Main.js";
import Footer from "./components/footer/Footer.js";

function updateTimes(state, value) {
  state = state.filter((time) => time !== value);
  return state;
}
const initialTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function App() {
  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initialTimes
  );

  return (
    <>
      <Router>
        <Header></Header>
        <Main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route
              path="/reservations"
              element={
                <Reservations
                  availableTimes={availableTimes}
                  setAvailableTimes={setAvailableTimes}
                />
              }
            ></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </Main>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
