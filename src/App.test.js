import { render } from "@testing-library/react";
import App from "./App";
import "jest-styled-components";

test("renders App correctly", () => {
  const { container } = render(<App />);

  expect(container).toMatchSnapshot();
});
