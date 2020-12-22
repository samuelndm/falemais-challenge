import React from "react";
import { Container } from "./styles";
import DefaultMenu from "./DefaultMenu";
import MobileMenu from "./MobileMenu";

const menu = [
  { id: 1, url: "/", title: "HOME" },
  { id: 2, url: "/planos", title: "PLANOS" },
];

const Menu = () => {
  return (
    <Container>
      <DefaultMenu menu={menu} />
      <MobileMenu menu={menu} />
    </Container>
  );
};

export default Menu;
