import React from "react";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import Button from "./Button";

expect.extend(toHaveNoViolations);

describe("<Button /> spec", () => {
  it("renders the component", () => {
    const { asFragment } = render(<Button>My Button</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
  it("should not have basic accessibility issues", async () => {
    const { container } = render(<Button>My Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
