import React from "react";
import { usePlanContext } from "../../../../contexts/PlanProvider";
import { Container, Content, Title, MinutesFree } from "./styles";

const Plan = ({ plan }) => {
  const { currentPlan, setCurrentPlan } = usePlanContext();

  if (!plan) return null;
  return (
    <Container
      isActive={currentPlan && currentPlan.id === plan.id}
      color={plan.color}
      onClick={(e) => setCurrentPlan(plan)}
    >
      <Content color={plan.color}>
        <Title>{plan.title || ""}</Title>
        <MinutesFree>{plan.free_time || 0} minutos</MinutesFree>
      </Content>
    </Container>
  );
};

export default Plan;
