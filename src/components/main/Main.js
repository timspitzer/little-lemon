import Home from "../../pages/home/Home.js";
import About from "../../pages/about/About.js";
import Login from "../../pages/login/Login.js";
import Order from "../../pages/order/Order.js";
import Reservations from "../../pages/reservations/Reservations.js";
import Menu from "../../pages/menu/Menu.js";
import BookingConfirmed from "../../pages/booking-confirmed/BookingConfirmed.js";
import { useState, useReducer, useEffect } from "react";
import { fetchAPI, submitAPI } from "../../api.js";
import { Route, Routes, useNavigate } from "react-router-dom";

function updateTimes(state, value) {
  state = state.filter((time) => time !== value);
  return state;
}

function initializeTimes() {
  return fetchAPI(new Date());
}

export default function Main() {
  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const navigate = useNavigate();

  function submitForm(formData) {
    setIsFormSubmitted(submitAPI(formData));
  }

  useEffect(() => {
    if (isFormSubmitted) {
      navigate("/confirmed");
    }
  }, [isFormSubmitted]);

  return (
    <main className="layout">
      {" "}
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
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/confirmed" element={<BookingConfirmed />}></Route>
      </Routes>
    </main>
  );
}
