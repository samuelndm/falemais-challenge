import React from "react";
import PlanProvider from "./PlanProvider";

const Providers = ({ children }) => {
  return (
    <>
      <PlanProvider>{children}</PlanProvider>
    </>
  );
};

export default Providers;
