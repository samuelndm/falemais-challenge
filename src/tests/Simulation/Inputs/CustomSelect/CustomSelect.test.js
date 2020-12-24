import React from "react";
import { render } from "@testing-library/react";
import { CustomSelect } from "../../../../components/index";

describe("CustomSelect test", () => {
  const optionsMock = [];
  const titleMock = "Teste de Título";

  it("should have title", () => {
    const { getByText } = render(
      <CustomSelect options={optionsMock} title={titleMock} />
    );
    const title = getByText(titleMock);

    expect(title).toHaveTextContent(titleMock);
  });
});
