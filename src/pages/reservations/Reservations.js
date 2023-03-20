import React from "react";
import BookingForm from "../../components/booking-form/BookingForm.js";

export default function Reservations({
  availableTimes,
  setAvailableTimes,
  submitForm,
}) {
  return (
    <>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        submitForm={submitForm}
      ></BookingForm>
    </>
  );
}
