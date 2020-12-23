import React from "react";
import { usePlanContext } from "../../../../contexts/PlanProvider";
import { Container, Content, Title, MinutesFree } from "./styles";

const Plan = ({ plan }) => {
  const { currentPlan, setCurrentPlan } = usePlanContext();

  const handleClick = (event) => {
    event.preventDefault();

    if (currentPlan) {
      setCurrentPlan(currentPlan.id !== plan.id ? plan : null);
    } else {
      setCurrentPlan(plan);
    }
  };

  if (!plan) return null;
  return (
    <Container
      isActive={currentPlan && currentPlan.id === plan.id}
      color={plan.color}
      onClick={(e) => handleClick(e)}
    >
      <Content color={plan.color}>
        <Title>{plan.title || ""}</Title>
        <MinutesFree>{plan.free_time || 0} minutos</MinutesFree>
      </Content>
    </Container>
  );
};

export default Plan;
