import React from "react";
import { Container, ArrowIcon } from "./styles";
import CustomSelect from "./CustomSelect";
import TimeInput from "./TimeInput";

const Inputs = ({
  origins,
  currentOriginCode,
  setCurrentOriginCode,
  destinations,
  setCurrentDestinationCode,
  currentTime,
  setCurrentTime,
}) => {
  return (
    <Container>
      <CustomSelect
        options={origins}
        title='Origem'
        onChange={setCurrentOriginCode}
      />

      <ArrowIcon className='fas fa-long-arrow-alt-right' />

      <CustomSelect
        options={destinations}
        title='Destino'
        onChange={setCurrentDestinationCode}
        key={currentOriginCode}
      />

      <ArrowIcon className='fas fa-long-arrow-alt-right' />

      <TimeInput currentTime={currentTime} setCurrentTime={setCurrentTime} />
    </Container>
  );
};

export default Inputs;
