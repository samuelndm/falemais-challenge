import React from "react";
import { Link } from "react-router-dom";
import { Container, Image } from "./styles";
import LogoImage from "../../../assets/images/logo.png";

const Logo = () => {
  return (
    <Container>
      <Link to='/'>
        <Image src={LogoImage} alt='Logo do site' />
      </Link>
    </Container>
  );
};

export default Logo;
