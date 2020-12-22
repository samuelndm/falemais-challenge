import React, { useState } from "react";
import { Container, Icon, Menu } from "./styles";
import Link from "./Link";

const MobileMenu = ({ menu }) => {
  const [isVisible, setIsVisible] = useState(false);

  if (!menu || !menu.length) return null;
  return (
    <Container>
      <Icon
        className='fas fa-bars'
        isVisible={isVisible}
        onClick={(e) => setIsVisible((prev) => !prev)}
      />

      <Menu isVisible={isVisible}>
        {menu.map((link) => (
          <Link link={link} key={`mobilemenu-${link.id}`} />
        ))}
      </Menu>
    </Container>
  );
};

export default MobileMenu;
