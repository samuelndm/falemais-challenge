import React from "react";
import Providers from "./contexts/Providers";
import Routes from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

const App = () => {
  return (
    <>
      <Providers>
        <Routes />
      </Providers>
      <GlobalStyles />
    </>
  );
};

export default App;
