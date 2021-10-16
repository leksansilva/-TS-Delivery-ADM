import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("App working", () => {
  it("renders learn react link", () => {
    const { getByText } = render(<App />);
    const learnReact = getByText("Learn React");
    expect(learnReact).toBeVisible();
    expect(learnReact).not.toBeVisible();
  });
});