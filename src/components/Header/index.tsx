import React from "react";
import { Link } from "react-router-dom";
import {
  dashboardEvents,
  dashboardJobs,
  payment,
} from "src/routes/routes_constants";
import { HeaderMenu } from "../HeaderMenu/indes";
import { Container, Jobs } from "./styles";

export const Header: React.FC = () => {
  return (
    <Container>
      <section id="headerMobile">
        <div className="Menu">
          <HeaderMenu />
        </div>
        <img className="mobileLogo" src="./assets/headerWhiteLogo.png" alt="" />

        <div className="searchAndLogin">
          <img src="./assets/search.svg" alt="Pesquisar" className="search" />
          <input type="text" className="mobileSearch" />
          <img src="./assets/userIcon.svg" alt="Login" />
        </div>
      </section>

      <section id="headerDesktop">
        <div>
          <img
            className="headerLogo"
            src="./assets/headerColorFullLogo.png"
            alt="Logo"
          />
          <img
            className="headerWhiteLogo"
            src="./assets/headerWhiteLogo.png"
            alt=""
          />
        </div>

        <div className="menu">
          <div className="inputMenu">
            <img src="./assets/search.svg" alt="" />
            <input type="text" placeholder="Pesquisar" />
          </div>

          <Jobs to={dashboardJobs}>
            <button type="button">
              <img src="./assets/jobsIcon.svg" alt="Vagas" />
              Vagas
            </button>
          </Jobs>

          <button type="button">
            <img src="./assets/premiumIcon.svg" alt="Premium" />
            <Link to={payment}>Premium</Link>
          </button>

          <button type="button">
            <img src="./assets/eventsIcon.svg" alt="Eventos" />
            <Link to={dashboardEvents}>Eventos</Link>
          </button>

          <button type="button">
            <img src="./assets/userIcon.svg" alt="Login" />
            Login
          </button>
        </div>
      </section>
    </Container>
  );
};
