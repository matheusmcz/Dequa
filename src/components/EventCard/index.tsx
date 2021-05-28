import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export const EventCard: React.FC = () => {
  return (
    <Container>
      <Link className="cardInfo" to="evento">
        <header>
          <img
            src="./assets/eventImg.png"
            alt="Direitos humanos e o mundo do trabalho"
          />
        </header>
        <div className="about">
          <h4 className="eventTitle">Direitos Humanos e o mundo do trabalho</h4>
          <div className="date">
            <img src="./assets/calendar.svg" alt="Data" />
            <p>02 de agosto de 2021</p>
          </div>

          <p className="description">
            Com base na Declaração Universal dos Direitos Humanos, adotada há 70
            anos pela Organização das Nações Unidas (ONU) com o intuito de
            nortear os direitos básicos das pessoas e de olho nas
            contrarreformas que estão em curso no país e precarizam as relações
            de trabalho, inclusive nos MPs, será realizada no próximo dia 14, às
            16h, a palestra “Direitos humanos e o mundo do trabalho: as
            contrarreformas no serviço público”, proferida pelo advogado e
            ex-presidente da OAB nacional, Cézar Britto. A exposição acontece no
            auditório da PGE, no Ed. Ipsep, no Recife, e é organizada pelo
            Sindicato dos Servidores do Ministério Público de Pernambuco
            (Sindsemp/PE) como parte da programação oficial da Semana do
            Ministério Público de Pernambuco.
          </p>
        </div>
      </Link>
    </Container>
  );
};
