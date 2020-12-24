import React from "react";
import { renderWithDeps } from "../../utils";
import { Plans } from "../../../components/index";

describe("Plans test", () => {
  const plansId = "plansId";
  const plansNullMock = null;
  const plansEmptyMock = [];
  const plansMock = [{}];

  it("should return null", () => {
    const { container } = renderWithDeps(<Plans plans={plansNullMock} />);

    const plans = container.querySelector(`#${plansId}`);

    expect(plans).toBe(null);
  });

  it("should return an html", () => {
    const { container } = renderWithDeps(<Plans plans={plansMock} />);

    const plans = container.querySelector(`#${plansId}`);

    expect(plans).toBeTruthy();
  });

  it("should have title", () => {
    const titleMock = "Selecione um plano";

    const { getByText } = renderWithDeps(<Plans plans={plansMock} />);

    const title = getByText(titleMock);

    expect(title).toHaveTextContent(titleMock);
  });
});
