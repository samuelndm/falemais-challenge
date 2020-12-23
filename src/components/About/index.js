import React from "react";

import {
  Container,
  Content,
  Title,
  TitleHeader,
  Description,
  BreakLine,
} from "./styles";

const About = () => {
  return (
    <Container>
      <Content>
        <Title>
          <TitleHeader>QUEM</TitleHeader>
          <BreakLine />
          SOMOS
        </Title>
        <Description>
          A empresa de telefonia Telzir, especializada em chamadas de longa
          distância nacional, vai colocar um novo produto no mercado chamado
          FaleMais.
          <BreakLine />
          <BreakLine />
          Temos uma equipe que nos dá muito orgulho. Aprendemos diariamente uns
          com os outros e procuramos novas respostas para cada novo problema.
          Por isso, não temos respostas prontas para as suas perguntas.
          <BreakLine />
          <BreakLine />
          Somos diferentes porque queremos nossos clientes focados no que eles
          sabem fazer melhor: Gerir seus negócios. Vamos marcar uma conversa.
          Adoramos conhecer gente nova que pensa grande igual a gente.
        </Description>
      </Content>
    </Container>
  );
};

export default About;
