import React from "react";
import { Container } from "./styles";

export const BetsCompanies: React.FC = () => {
  return (
    <Container>
      <section className="companyCard">
        <div>
          <h4>Melhores empresas para se trabalhar sendo PCD</h4>
        </div>
        <div className="companyList">
          <img src="./assets/bradesco.png" alt="Bradesco" />
          <img src="./assets/natura.png" alt="natura" />
          <img src="./assets/accenture.png" alt="accenture" />
          <img src="./assets/totvs.png" alt="totvs" />
          <img src="./assets/itau.png" alt="itau" />
          <img src="./assets/dow.png" alt="dow" />
        </div>
      </section>
    </Container>
  );
};
