import React, { useState } from "react";

export default function BookingForm({ availableTimes, setAvailableTimes }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState(availableTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (event) => {
    event.preventDefault();
    setAvailableTimes(time);
    setTime(
      availableTimes.filter((availableTime) => availableTime !== time)[0]
    );
    console.log(
      `Date: ${date}, Time: ${time}, Guests: ${guests}, Occasion: ${occasion}`
    );
  };

  return (
    <form
      className="layout-item"
      style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
      onSubmit={handleSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.length !== 0 ? (
          availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))
        ) : (
          <option>No time available</option>
        )}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input
        type="submit"
        value="Make Your reservation"
        disabled={availableTimes.length === 0}
      />
    </form>
  );
}
