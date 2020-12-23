import React from "react";
import { Navbar, About } from "../../components";
import { PageContainer } from "../../styles/GlobalStyles";

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
      <About />
    </PageContainer>
  );
};

export default HomePage;
