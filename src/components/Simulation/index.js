import React, { useEffect, useState } from "react";
import {
  handleDestinations,
  handleOrigins,
  handlePlanCalc,
  handleNoPlanCalc,
  validateData,
} from "../../utils/Simulation";
import { usePlanContext } from "../../contexts/PlanProvider";
import { useNotificationContext } from "../../contexts/NotificationProvider";
import { Container, Title, Form, Button } from "./styles";
import Inputs from "./Inputs";
import Plans from "./Plans";
import Prices from "./Prices";

const Simulation = ({ codes, plans }) => {
  const [origins, setOrigins] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [currentOriginCode, setCurrentOriginCode] = useState("");
  const [currentDestinationCode, setCurrentDestinationCode] = useState("");
  const [currentDestination, setCurrentDestination] = useState(null);
  const [currentTime, setCurrentTime] = useState(1);
  const [planPrice, setPlanPrice] = useState(null);
  const [noPlanPrice, setNoPlanPrice] = useState(null);
  const { currentPlan } = usePlanContext();
  const { createNotification } = useNotificationContext();

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
      setPlanPrice(
        handlePlanCalc(currentDestination, currentTime, currentPlan)
      );
      setNoPlanPrice(handleNoPlanCalc(currentDestination, currentTime));
    } catch (err) {
      console.error("Error at simulation validation", err);

      createNotification({
        type: "error",
        message: err.message,
        time: 5000,
      });
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

      <Prices planPrice={planPrice} noPlanPrice={noPlanPrice} />
    </Container>
  );
};

export default Simulation;
