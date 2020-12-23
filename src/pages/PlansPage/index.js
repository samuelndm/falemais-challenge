import React from "react";
import { PageContainer } from "../../styles/GlobalStyles";
import { Navbar, Simulation } from "../../components";
import { codes, plans } from "./dataMock";

const PlansPage = () => {
  return (
    <PageContainer>
      <Navbar />
      <Simulation codes={codes} plans={plans} />
    </PageContainer>
  );
};

export default PlansPage;
