/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * DO NOT MODIFY THIS FILE
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router";
import App from "./App";
import instructors from "./data";

instructors[4] = {
  name: "Nikita",
  emoji: "👽",
  slug: "nikita",
  github: "cheloveq",
  description: "Nikita is a very funky guy!",
};

const [hamza, laila, hasan, nikita] = instructors;

describe("Starting from empty route", () => {
  let testLocation;
  window.open = jest.fn();

  beforeEach(() => {
    render(
      <MemoryRouter>
        <App instructors={instructors} />
        <Route
          path="*"
          render={({ history, location }) => {
            testLocation = location;
            return null;
          }}
        />
      </MemoryRouter>
    );

    expect(testLocation.pathname).toEqual("/");
  });

  test("clicking a tag navigates to instructor slug page with correct data", () => {
    fireEvent.click(screen.queryByText(nikita.name));
    expect(testLocation.pathname).toEqual(`/instructors/${nikita.slug}`);
    expect(screen.queryByText(nikita.description)).toBeInTheDocument();
    expect(screen.queryByText(hasan.description)).not.toBeInTheDocument();

    fireEvent.click(screen.queryByText("github", { exact: false }));
    expect(window.open).toHaveBeenCalledWith(
      `https://github.com/${nikita.github}`
    );
  });

  test("clicking the 'go back home' button on the profile goes back to the home page", () => {
    fireEvent.click(screen.queryByText(hamza.name));
    expect(testLocation.pathname).toEqual(`/instructors/${hamza.slug}`);

    fireEvent.click(screen.queryByText("home", { exact: false }));
    expect(testLocation.pathname).toEqual("/");
  });
});

describe("Starting from", () => {
  let testLocation;

  describe(`/instructors/${hasan.slug}`, () => {
    beforeAll(() => {
      render(
        <MemoryRouter initialEntries={[`/instructors/${hasan.slug}`]}>
          <App />
          <Route
            path="*"
            render={({ history, location }) => {
              testLocation = location;
              return null;
            }}
          />
        </MemoryRouter>
      );

      expect(testLocation.pathname).toEqual(`/instructors/${hasan.slug}`);
    });

    test("it loads Hasan's profile", () => {
      expect(screen.queryByText(hasan.description)).toBeInTheDocument();
      expect(screen.queryByText(laila.description)).not.toBeInTheDocument();

      fireEvent.click(screen.queryByText("github", { exact: false }));
      expect(window.open).toHaveBeenCalledWith(
        `https://github.com/${hasan.github}`
      );
    });
  });

  describe("the invalid URL", () => {
    test("/users/hasan it redirects to the /404 route", () => {
      render(
        <MemoryRouter initialEntries={["/users/hasan"]}>
          <App />
          <Route
            path="*"
            render={({ location }) => {
              testLocation = location;
              return null;
            }}
          />
        </MemoryRouter>
      );

      expect(testLocation.pathname).toEqual(`/404`);
    });

    test("/random we can navigate back home from the 404 page", () => {
      render(
        <MemoryRouter initialEntries={["/random"]}>
          <App />
          <Route
            path="*"
            render={({ location }) => {
              testLocation = location;
              return null;
            }}
          />
        </MemoryRouter>
      );

      expect(testLocation.pathname).toEqual(`/404`);

      fireEvent.click(screen.queryByText("home", { exact: false }));
      expect(testLocation.pathname).toEqual("/");
    });
  });
});
