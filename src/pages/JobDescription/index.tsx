import React from "react";
import { Header } from "src/components/Header";
import { Container, Content } from "./styles";

export const JobDescription: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <section className="companyProfile">
          <div className="goBack">
            <a href="/">
              <span>Home</span>
              <img src="./assets/leftVector.svg" alt="Voltar" />
              <span>Vagas de emprego</span>
            </a>
          </div>

          <img
            className="companyProfilePicture"
            src="./assets/companyProfilePicture.png"
            alt="Company"
          />

          <div className="jobInformation">
            <p className="title">Auxiliar de produção</p>
            <p className="company">Ioasys</p>
            <p className="level">Júnior/Trainee</p>
            <span className="location">
              <img src="./assets/pin.svg" alt="" />
              João Pessoa
            </span>
            <span className="payment">
              <img src="./assets/money.svg" alt="" />
              Faixa salarial a combinar
            </span>
            <span className="modality">
              <img src="./assets/jobsIcon.svg" alt="" />
              Contrato CLT
            </span>
          </div>
        </section>
      </Content>
    </Container>
  );
};
