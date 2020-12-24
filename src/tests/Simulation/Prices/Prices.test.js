import React from "react";
import { render } from "@testing-library/react";
import { Prices } from "../../../components/index";
import { formatCurrency } from "../../../utils";

describe("Prices test", () => {
  const pricesId = "pricesId";
  const planPriceId = "planPriceId";
  const noPlanPriceId = "noPlanPriceId";
  const planPriceMock = "12.1";
  const planPriceNullMock = null;
  const noPlanPriceMock = "20";
  const noPlanPriceNullMock = null;

  it("should return null", () => {
    const testParamsNull = () => {
      const { container } = render(<Prices />);
      const prices = container.querySelector(`#${pricesId}`);
      expect(prices).toBeNull();
    };

    const testPlanPriceNull = () => {
      const { container } = render(
        <Prices planPrice={planPriceNullMock} noPlanPrice={noPlanPriceMock} />
      );
      const prices = container.querySelector(`#${pricesId}`);
      expect(prices).toBeNull();
    };

    const testNoPlanPriceNull = () => {
      const { container } = render(
        <Prices planPrice={planPriceMock} noPlanPrice={noPlanPriceNullMock} />
      );
      const prices = container.querySelector(`#${pricesId}`);
      expect(prices).toBeNull();
    };

    testParamsNull();
    testPlanPriceNull();
    testNoPlanPriceNull();
  });

  it("with plan price should have the expected output", () => {
    const { getByTestId } = render(
      <Prices planPrice={planPriceMock} noPlanPrice={noPlanPriceMock} />
    );

    const planPrice = getByTestId(planPriceId);

    expect(planPrice.textContent === formatCurrency(planPriceMock)).toBe(true);
  });

  it("without plan price should have the expected output", () => {
    const { getByTestId } = render(
      <Prices planPrice={planPriceMock} noPlanPrice={noPlanPriceMock} />
    );

    const noPlanPrice = getByTestId(noPlanPriceId);

    expect(noPlanPrice.textContent === formatCurrency(noPlanPriceMock)).toBe(
      true
    );
  });
});
