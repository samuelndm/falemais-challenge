import React, { useState, createContext, useContext } from "react";

const PlanContext = createContext();

export const usePlanContext = () => useContext(PlanContext);

const PlanProvider = ({ children }) => {
  const [currentPlanId, setCurrentPlanId] = useState(null);

  return (
    <PlanContext.Provider value={{ currentPlanId, setCurrentPlanId }}>
      {children}
    </PlanContext.Provider>
  );
};

export default PlanProvider;
