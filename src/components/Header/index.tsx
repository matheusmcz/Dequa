import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "src/context/auth";
import {
  dashboardEvents,
  dashboardJobs,
  home,
  payment,
  signup,
} from "src/routes/routes_constants";
import { Usertype } from "src/util/interfaces/interfaces";
import { HeaderMenu } from "../HeaderMenu/indes";
import { Container, Jobs } from "./styles";

interface HeaderProps {
  openModal?(): void;
}

export const Header: React.FC<HeaderProps> = ({ openModal }) => {
  const { user, signOut } = useAuth();
  const history = useHistory();

  function handleLoginModal() {
    history.push(home);
    openModal && openModal();
  }

  function logOut() {
    signOut();
  }

  return (
    <Container>
      <section id="headerMobile">
        <div className="Menu">
          <HeaderMenu />
        </div>
        <Link to={home}>
          <img
            className="mobileLogo"
            src="./assets/headerWhiteLogo.png"
            alt=""
          />
        </Link>

        <div className="searchAndLogin">
          {!user && (
            <img
              src="./assets/userIcon.svg"
              alt="Login"
              onClick={handleLoginModal}
            />
          )}
        </div>
      </section>

      <section id="headerDesktop">
        <div>
          <img
            className="headerLogo"
            src="./assets/headerColorFullLogo.png"
            alt="Logo"
          />
          <Link to={home}>
            <img
              className="headerWhiteLogo"
              src="./assets/headerWhiteLogo.png"
              alt=""
            />
          </Link>
        </div>

        <div className="menu">
          <Jobs to={dashboardJobs}>
            <button type="button">
              <img src="./assets/jobsIcon.svg" alt="Vagas" />
              Vagas
            </button>
          </Jobs>

          {(!!user && user.role === Usertype.free) || !user ? (
            <button type="button">
              <img src="./assets/premiumIcon.svg" alt="Premium" />
              <Link
                to={!!user && user.role === Usertype.free ? payment : signup}
              >
                Premium
              </Link>
            </button>
          ) : (
            <button type="button">
              <img src="./assets/eventsIcon.svg" alt="Eventos" />
              <Link to={dashboardEvents}>Eventos</Link>
            </button>
          )}

          {!user && (
            <button type="button" onClick={handleLoginModal}>
              <img src="./assets/userIcon.svg" alt="Entrar" />
              Login
            </button>
          )}

          {user && (
            <button type="submit" onClick={logOut}>
              <img src="./assets/logOutIcon.svg" alt="Sair" />
              Log-out
            </button>
          )}
        </div>
      </section>
    </Container>
  );
};
