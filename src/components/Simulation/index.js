import React, { useEffect, useState } from "react";
import Destiny from "./Destiny";
import Options from "./Options";

import { Container } from "./styles";

const Simulation = ({ codes }) => {
  const [origins, setOrigins] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [currentOrigin, setCurrentOrigin] = useState("");
  const [currentDestination, setCurrentDestination] = useState("");

  useEffect(() => {
    setOrigins(codes.map(({ origin }) => origin));
    setDestinations([]);

    if (currentOrigin) {
      setDestinations(
        codes.find(({ origin }) => `${origin}` === `${currentOrigin}`)
          .destinations
      );
    }
  }, [codes, currentOrigin]);

  if (!codes || !codes.length) return null;
  return (
    <Container>
      <Options options={origins} onChange={setCurrentOrigin} />
      <Options
        options={destinations.map(({ code }) => code)}
        onChange={setCurrentDestination}
      />
      <Destiny />
    </Container>
  );
};

export default Simulation;
