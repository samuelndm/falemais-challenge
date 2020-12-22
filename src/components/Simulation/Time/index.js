import React, { memo } from "react";
import { Container, Title, Input } from "./styles";

const Time = ({ setCurrentTime }) => {
  return (
    <Container>
      <Title>Tempo/Min</Title>
      <Input
        type='number'
        min={1}
        required
        onChange={(e) => setCurrentTime(parseInt(e && e.target.value) || 0)}
      />
    </Container>
  );
};

export default memo(Time);
