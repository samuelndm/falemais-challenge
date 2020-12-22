import React from "react";
import { Container, Content } from "./styles";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <Menu />
      </Content>
    </Container>
  );
};

export default Navbar;
