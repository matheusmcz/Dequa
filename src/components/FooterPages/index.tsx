import React from "react";
import { Container } from "./styles";

export const FooterPages: React.FC = () => {
  return (
    <Container className="footerPages">
      <button className="leftArrow">
        <img src="./assets/leftArrow.svg" alt="Anterior" />
        <p className="fallBack">Anterior</p>
      </button>
      <span> 1 2 3 4 5 ... 254</span>
      <button className="rightArrow">
        <p className="forward">Próxima</p>
        <img src="./assets/rightArrow.svg" alt="Próximo" />
      </button>
    </Container>
  );
};
