import React, { useEffect, useState } from "react";
import {
  handleDestinations,
  handleOrigins,
  handlePlanCalc,
  handleNoPlanCalc,
  validateData,
} from "../../utils/Simulation";
import { usePlanContext } from "../../contexts/PlanProvider";
import { Container, Title, Form, Button } from "./styles";
import Inputs from "./Inputs";
import Plans from "./Plans";

const Simulation = ({ codes, plans }) => {
  const [origins, setOrigins] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [currentOriginCode, setCurrentOriginCode] = useState("");
  const [currentDestinationCode, setCurrentDestinationCode] = useState("");
  const [currentDestination, setCurrentDestination] = useState(null);
  const [currentTime, setCurrentTime] = useState(1);
  const { currentPlan } = usePlanContext();

  useEffect(() => {
    setOrigins(handleOrigins(codes));
    setDestinations(handleDestinations(codes, currentOriginCode));
    setCurrentDestinationCode("");
  }, [codes, currentOriginCode]);

  useEffect(() => {
    setCurrentDestination(
      destinations.find(
        (destination) => `${destination.code}` === currentDestinationCode
      )
    );
  }, [destinations, currentDestinationCode]);

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      validateData(currentDestination, currentTime, currentPlan);
      const planPrice = handlePlanCalc(
        currentDestination,
        currentTime,
        currentPlan
      );
      const noPlanPrice = handleNoPlanCalc(currentDestination, currentTime);

      console.log("planPrice", planPrice);
      console.log("noPlanPrice", noPlanPrice);
    } catch (err) {
      console.error(err);
    }
  };

  if (!codes || !codes.length) return null;
  return (
    <Container>
      <Title>Simule um plano</Title>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <Inputs
          origins={origins}
          currentOriginCode={currentOriginCode}
          setCurrentOriginCode={setCurrentOriginCode}
          destinations={destinations.map(({ code }) => code)}
          setCurrentDestinationCode={setCurrentDestinationCode}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />

        <Plans plans={plans} />

        <Button type='submit'>Calcular</Button>
      </Form>
    </Container>
  );
};

export default Simulation;
