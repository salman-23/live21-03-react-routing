import { fireEvent, render } from "@testing-library/react";
import InstructorTag from "./InstructorTag";
import "jest-styled-components";

describe("InstructorTag component", () => {
  // jest-styled-components doesn't allow render to work in descrive closures
  // thus, I have created a separate new render of the component every time

  window.open = jest.fn();

  test("renders correctly", () => {
    const { container } = render(
      <InstructorTag emoji="🌲" name="Eglė" github="egloo8" />
    );

    expect(container).toMatchSnapshot();
  });

  test("opens github account on click", () => {
    const { getByText } = render(
      <InstructorTag emoji="🌲" name="Eglė" github="egloo8" />
    );

    const goToGitGubPage = getByText("Go to GitHub");
    fireEvent.click(goToGitGubPage);
    expect(window.open).toHaveBeenCalledWith("https://github.com/egloo8");
  });
});
