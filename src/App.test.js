import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

test("render the app without breaking", () => {
  render(<App />);
});

test("check the button class", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "increment" });
  expect(button).toHaveClass("btn");
});

test("initial age is 20", () => {
  render(<App />);
  const age = screen.getByTestId("count");
  expect(age).toHaveTextContent(20);
});

test("increment working", () => {
  render(<App />);
  const button = screen.getByRole("button",{name: "increment"});
  fireEvent.click(button)
   const age = screen.getByTestId("count");
   expect(age).toHaveTextContent(21);

});
