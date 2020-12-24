import React from "react";
import { renderWithDeps } from "../../../utils";
import { Plan } from "../../../../components/index";
import { Title } from "../../../../components/Simulation/Inputs/CustomSelect/styles";

describe("Plan test", () => {
  const planId = "planId";
  const planContentId = "planContentId";
  const planMock = {
    id: 1,
  };
  const planNullMock = null;

  it("should return null", () => {
    const { container } = renderWithDeps(<Plan plan={planNullMock} />);

    const plan = container.querySelector(`#${planId}`);

    expect(plan).toBeNull();
  });

  it("should return an html", () => {
    const { container } = renderWithDeps(<Plan plan={planMock} />);

    const plan = container.querySelector(`#${planId}`);

    expect(plan).toBeTruthy();
  });

  it("should have the expected title", () => {
    const titleTest = "plan teste title 1";

    Object.assign(planMock, { title: titleTest });

    const { getByText } = renderWithDeps(<Plan plan={planMock} />);

    const title = getByText(titleTest);

    expect(title).toHaveTextContent(titleTest);
  });

  it("should have the expected free time", () => {
    const freeTimeTest = 50;
    const expectedText = `${freeTimeTest} minutos`;
    Object.assign(planMock, { free_time: freeTimeTest });

    const { getByText } = renderWithDeps(<Plan plan={planMock} />);

    const freeTime = getByText(expectedText);

    expect(freeTime).toHaveTextContent(expectedText);
  });

  it("should have the expected color", () => {
    const colorTest = "#FF9671";

    Object.assign(planMock, { color: colorTest });

    const { getByTestId } = renderWithDeps(<Plan plan={planMock} />);

    const content = getByTestId(planContentId);

    expect(content.getAttribute("color")).toBe(colorTest);
  });
});
