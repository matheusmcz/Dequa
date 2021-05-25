import React from "react";
import { HeaderMenu } from "../HeaderMenu/indes";
import { Container, Jobs } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <section id="headerMobile">
        <div className="Menu">
          <HeaderMenu />
        </div>
        <div className="searchAndLogin">
          <img src="./assets/search.svg" alt="Pesquisar" className="search" />
          <input type="text" className="mobileSearch" />
          <img src="./assets/userIcon.svg" alt="Login" />
        </div>
      </section>

      <section id="headerDesktop">
        <div>
          <img className="headerLogo" src="./assets/logo.svg" alt="Logo" />
        </div>
        <div className="menu">
          <div className="inputMenu">
            <img src="./assets/search.svg" alt="" />
            <input type="text" placeholder="Pesquisar" />
          </div>
          <Jobs to="/dashboard-jobs">
            <button type="button">
              <img src="./assets/jobsIcon.svg" alt="Vagas" />
              <a href="/">Vagas</a>
            </button>
          </Jobs>

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
