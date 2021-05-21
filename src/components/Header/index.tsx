import React from "react";
import { Container } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <section id="headerMobile">
        <div className="Menu">
          <img src="./assets/menu.svg" alt="Menu" />
        </div>
        <div className="searchAndLogin">
          <img src="./assets/search.svg" alt="Pesquisar" />
          <img src="./assets/userIcon.svg" alt="Login" />
        </div>
      </section>

      <section id="headerDesktop">
        <div>
          <img src="./assets/logo.svg" alt="Logo" />
        </div>
        <div className="menu">
          <div className="inputMenu">
            <img src="./assets/search.svg" alt="" />
            <input type="text" placeholder="Pesquisar" />
          </div>
          <button type="button">
            <img src="./assets/jobsIcon.svg" alt="Vagas" />
            <a href="/">Vagas</a>
          </button>
          <button type="button">
            <img src="./assets/premiumIcon.svg" alt="Premium" />
            <a href="/">Premium</a>
          </button>
          <button type="button">
            <img src="./assets/userIcon.svg" alt="Login" />
            <a href="/">Login</a>
          </button>
        </div>
      </section>
    </Container>
  );
};
