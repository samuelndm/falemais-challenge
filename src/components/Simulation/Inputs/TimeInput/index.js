import React, { memo } from "react";
import { Container, Title, Input } from "./styles";

const TimeInput = ({ setCurrentTime }) => {
  return (
    <Container>
      <Title>Tempo/Min</Title>
      <Input
        data-testid='inputId'
        type='number'
        min={1}
        required
        onChange={(e) => setCurrentTime(parseInt(e && e.target.value) || 0)}
      />
    </Container>
  );
};

export default memo(TimeInput);
