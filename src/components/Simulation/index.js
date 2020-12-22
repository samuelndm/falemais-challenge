import React, { useEffect, useState } from "react";
import { CustomSelect } from "../index";
import { Container, Form, Options, ArrowIcon, Button } from "./styles";
import Time from "./Time";

const Simulation = ({ codes }) => {
  const [origins, setOrigins] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [currentOrigin, setCurrentOrigin] = useState("");
  const [currentDestination, setCurrentDestination] = useState("");
  const [currentTime, setCurrentTime] = useState(1);
  const [currentPlan, setCurrentPlan] = useState("");

  useEffect(() => {
    setOrigins(codes.map(({ origin }) => origin));

    if (currentOrigin) {
      setDestinations(
        codes.find(({ origin }) => `${origin}` === `${currentOrigin}`)
          .destinations
      );
    } else {
      setDestinations([]);
    }

    setCurrentDestination("");
  }, [codes, currentOrigin]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  console.log("currentTime", currentTime);

  if (!codes || !codes.length) return null;
  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Options>
          <CustomSelect
            options={origins}
            title='Origem'
            onChange={setCurrentOrigin}
          />

          <ArrowIcon className='fas fa-long-arrow-alt-right' />

          <CustomSelect
            options={destinations.map(({ code }) => code)}
            title='Destino'
            onChange={setCurrentDestination}
            key={currentOrigin}
          />

          <ArrowIcon className='fas fa-long-arrow-alt-right' />

          <Time currentTime={currentTime} setCurrentTime={setCurrentTime} />
        </Options>
        <Button type='submit'>Calcular</Button>
      </Form>
    </Container>
  );
};

export default Simulation;
