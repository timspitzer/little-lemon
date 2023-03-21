import { initializeTimes } from "../components/main/Main.js";

test("Initializes times", () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});
