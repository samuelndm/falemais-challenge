import React from "react";
import { usePlanContext } from "../../../contexts/PlanProvider";

import { Container, Content, Title, MinutesFree } from "./styles";

const Plan = ({ plan }) => {
  const { currentPlanId, setCurrentPlanId } = usePlanContext();

  if (!plan) return null;
  return (
    <Container
      isActive={currentPlanId === plan.id}
      color={plan.color}
      onClick={(e) => setCurrentPlanId(plan.id)}
    >
      <Content color={plan.color}>
        <Title>{plan.title || ""}</Title>
        <MinutesFree>{plan.freeTime || 0} minutos</MinutesFree>
      </Content>
    </Container>
  );
};

export default Plan;
