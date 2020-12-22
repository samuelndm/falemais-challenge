import React from "react";
import { Navbar, Footer, Simulation } from "../../components";
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

const Plans = () => {
  return (
    <PageContainer>
      <Navbar />
      <Simulation codes={codes} />
      <Footer />
    </PageContainer>
  );
};

export default Plans;
