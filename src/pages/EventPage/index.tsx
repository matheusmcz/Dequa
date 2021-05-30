import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useAuth, Usertype } from "src/context/auth";
import { dashboardEvents, payment } from "src/routes/routes_constants";
import { Container, Content } from "./styles";

export const EventPage: React.FC = () => {
  const { user } = useAuth();

  const history = useHistory();

  if (!!user && user.userType === Usertype.free) {
    history.push(payment);
  }

  return (
    <Container>
      <Header />
      <Link to={dashboardEvents} className="goBack">
        <span>Home</span>
        <img
          src="./assets/leftVector.svg"
          alt="Voltar"
          className="pathVector"
        />
        <span>Eventos</span>
        <img
          src="./assets/leftVector.svg"
          alt="Voltar"
          className="pathVector"
        />
        <span>Palestra Direitos Humanos e o mundo do trabalho</span>
      </Link>
      <img src="./assets/eventImg.png" alt="" className="eventImg" />
      <img src="./assets/eventBigImg.png" alt="" className="eventBigImg" />
      <Content>
        <div className="eventHeader">
          <p className="eventType">Palestra:</p>
          <p className="eventTitle">Direitos Humanos e o mundo do trabalho</p>
          <span className="eventDate">
            <img src="./assets/calendar.svg" alt="" />
            <p>02 de agosto de 2021</p>
          </span>

          <span className="eventPlataform">
            <img src="./assets/eventsIcon.svg" alt="" />
            <p>Vídeoconferência</p>
          </span>
        </div>

        <div className="description">
          <h3 className="descriptionTitle">Descrição do evento</h3>
          <span className="descriptionIntro">
            Dia 2º de Agosto tem Palestra com a temática Direitos Humanos e o
            mundo do trabalho. Um dia dedicado para falar sobre esse assunto tão
            importante e necessário no mundo.
            <p className="descriptionIntroDetail">
              Essa focará nas contrareformas no serviço público e será
              ministrada pelo Dr. Cézar Britto.
            </p>
          </span>
          <p className="descriptionAbstract">
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
        <button type="submit" className="submitButton">
          <p>Inscrever-se</p>
        </button>
      </Content>
      <Footer />
    </Container>
  );
};
