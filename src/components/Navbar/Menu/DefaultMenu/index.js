import React from "react";
import { Container, Separator } from "./styles";
import Link from "./Link";

const DefaultMenu = ({ menu }) => {
  if (!menu || !menu.length) return null;
  return (
    <Container>
      {menu.map((link, index) => (
        <React.Fragment key={`link-${link.id}`}>
          {index > 0 && <Separator />}
          <Link link={link} />
        </React.Fragment>
      ))}
    </Container>
  );
};

export default DefaultMenu;
