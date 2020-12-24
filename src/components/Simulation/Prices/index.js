import React from "react";
import { formatCurrency } from "../../../utils";
import { Container, Price, Title, Value, Icon } from "./styles";

const Prices = ({ planPrice, noPlanPrice }) => {
  if (!planPrice || !noPlanPrice) return null;
  return (
    <Container data-testid='pricesId' id='pricesId'>
      <Price>
        <Title className='smile'>Com FaleMais</Title>
        <Value data-testid='planPriceId'>{formatCurrency(planPrice)}</Value>
        <Icon className='fas fa-smile' />
      </Price>

      <Price>
        <Title className='frown'>Sem FaleMais</Title>
        <Value data-testid='noPlanPriceId'>{formatCurrency(noPlanPrice)}</Value>
        <Icon className='fas fa-frown' />
      </Price>
    </Container>
  );
};

export default Prices;
