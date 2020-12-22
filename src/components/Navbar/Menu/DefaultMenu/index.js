import React from "react";
import { Container } from "./styles";
import Link from "./Link";

const DefaultMenu = ({ menu }) => {
  if (!menu || !menu.length) return null;
  return (
    <Container>
      {menu.map((item) => (
        <Link link={item} key={`link-${item.id}`} />
      ))}
    </Container>
  );
};

export default DefaultMenu;
