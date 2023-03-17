import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders the BookingForm date picker label", () => {
  render(<BookingForm availableTimes={["17:00, 18:00"]} />);
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test("the correct available times are there", () => {
  render(<BookingForm availableTimes={["17:00, 18:00"]} />);
});
