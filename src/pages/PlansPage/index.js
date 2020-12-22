import React from "react";
import { Navbar, Footer, Plans, Simulation } from "../../components";
import { PageContainer } from "../../styles/GlobalStyles";

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
    freeTime: 30,
    color: "#26C740",
  },
  {
    id: 2,
    title: "FaleMais 60",
    freeTime: 60,
    color: "#0EA2D0",
  },
  {
    id: 3,
    title: "FaleMais 120",
    freeTime: 120,
    color: "#FFB800",
  },
];

const PlansPage = () => {
  return (
    <PageContainer>
      <Navbar />
      <Plans plans={plans} />
      <Simulation codes={codes} />
      <Footer />
    </PageContainer>
  );
};

export default PlansPage;
