import React from "react";
import { LinkHandler } from "../../../../index";
import { Container } from "./styles";

const Link = ({ link }) => {
  if (!link) return null;
  return (
    <Container>
      <LinkHandler
        url={link.url}
        target={link.target}
        title={link.title}
        childrenPosition='left'
      />
    </Container>
  );
};

export default Link;
