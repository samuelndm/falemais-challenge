import React from "react";
import { Container } from "./styles";
import { LinkHandler } from "../../../../index";

const Link = ({ link }) => {
  if (!link) return null;
  return (
    <Container>
      <LinkHandler url={link.url} target={link.target} title={link.title} />
    </Container>
  );
};

export default Link;
