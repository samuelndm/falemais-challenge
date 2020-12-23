import React from "react";
import NotificationProvider from "./NotificationProvider";
import PlanProvider from "./PlanProvider";

const Providers = ({ children }) => {
  return (
    <>
      <NotificationProvider>
        <PlanProvider>{children}</PlanProvider>
      </NotificationProvider>
    </>
  );
};

export default Providers;
