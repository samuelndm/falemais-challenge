import React, { useState, createContext, useContext } from "react";

const PlanContext = createContext();

export const usePlanContext = () => useContext(PlanContext);

const PlanProvider = ({ children }) => {
  const [currentPlan, setCurrentPlan] = useState(null);

  return (
    <PlanContext.Provider value={{ currentPlan, setCurrentPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export default PlanProvider;
