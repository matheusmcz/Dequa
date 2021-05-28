import React from "react";
import { Container } from "./styles";

export const EventCard: React.FC = () => {
  return (
    <Container>
      <header>
        <img
          src="./assets/eventImg.png"
          alt="Direitos humanos e o mundo do trabalho"
        />
      </header>
      <section className="cardInfo">
        <h4>Direitos Humanos e o mundo do trabalho</h4>
        <div className="date">
          <img src="./assets/calendar.svg" alt="Data" />
          <p>02 de agosto de 2021</p>
        </div>
      </section>
    </Container>
  );
};
