import { Header } from "./header.js";
import { screen } from "@testing-library/dom";

describe("testing Header", () => {
  test("If header rendered", () => {
    document.body.innerHTML = "<header id='header'></header>";

    new Header().render("#header");

    expect(screen.getByText(/Tour of Heroes/i)).toBeTruthy();
  });
});
