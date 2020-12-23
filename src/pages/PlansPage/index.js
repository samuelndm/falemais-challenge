import React from "react";
import { PageContainer } from "../../styles/GlobalStyles";
import { Navbar, Simulation } from "../../components";

const codes = [
  {
    origin: "011",
    destinations: [
      {
        code: "016",
        value: 1.9,
      },
      {
        code: "017",
        value: 1.7,
      },
      {
        code: "018",
        value: 0.9,
      },
    ],
  },
  {
    origin: "016",
    destinations: [
      {
        code: "011",
        value: 2.9,
      },
    ],
  },
  {
    origin: "017",
    destinations: [
      {
        code: "011",
        value: 2.7,
      },
    ],
  },
  {
    origin: "018",
    destinations: [
      {
        code: "011",
        value: 1.9,
      },
    ],
  },
];

const plans = [
  {
    id: 1,
    title: "FaleMais 30",
    free_time: 30,
    tax_after_free_time: 10,
    color: "#034078",
  },
  {
    id: 2,
    title: "FaleMais 60",
    free_time: 60,
    tax_after_free_time: 10,
    color: "#001F54",
  },
  {
    id: 3,
    title: "FaleMais 120",
    free_time: 120,
    tax_after_free_time: 10,
    color: "#0A1128",
  },
];

const PlansPage = () => {
  return (
    <PageContainer>
      <Navbar />
      <Simulation codes={codes} plans={plans} />
    </PageContainer>
  );
};

export default PlansPage;
