import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("App working", () => {
  it("renders learn react link", () => {
    const { getByAltText } = render(<App />);
    const learnReact = getByAltText("Learn React");
    expect(learnReact).toBeVisible();
    expect(learnReact).not.toBeVisible();
  });
});