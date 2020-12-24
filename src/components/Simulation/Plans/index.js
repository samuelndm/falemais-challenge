import React from "react";
import { Container, Title, Types } from "./styles";
import Plan from "./Plan";

const Plans = ({ plans }) => {
  if (!plans || !plans.length) return null;
  return (
    <Container id='plansId'>
      <Title>Selecione um plano</Title>
      <Types>
        {plans.map((plan) => (
          <Plan plan={plan} key={`plan-${plan.id}`} />
        ))}
      </Types>
    </Container>
  );
};

export default Plans;
