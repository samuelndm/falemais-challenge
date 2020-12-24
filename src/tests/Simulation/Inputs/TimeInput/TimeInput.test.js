import React from "react";
import { render } from "@testing-library/react";
import { TimeInput } from "../../../../components/index";

describe("TimeInput test", () => {
  const inputId = "inputId";

  it("should have title", () => {
    const titleMock = "Tempo/Min";

    const { getByText } = render(<TimeInput />);
    const title = getByText(titleMock);

    expect(title).toHaveTextContent(titleMock);
  });

  it("should be required", () => {
    const { getByTestId } = render(<TimeInput />);

    const input = getByTestId(inputId);

    expect(input).toHaveAttribute("required");
  });

  it("should have a minimum", () => {
    const { getByTestId } = render(<TimeInput />);

    const input = getByTestId(inputId);

    expect(input).toHaveAttribute("min");
  });

  it("should have a number type", () => {
    const { getByTestId } = render(<TimeInput />);

    const input = getByTestId(inputId);

    expect(input.getAttribute("type")).toBe("number");
  });
});
