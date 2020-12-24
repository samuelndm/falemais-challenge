import React from "react";
import { render } from "@testing-library/react";
import Providers from "../contexts/Providers";

export const renderWithDeps = (component) => {
  const container = <Providers>{component}</Providers>;

  return render(container);
};
