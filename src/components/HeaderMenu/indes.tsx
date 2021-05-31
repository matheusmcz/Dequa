import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "src/context/auth";
import {
  dashboardEvents,
  dashboardJobs,
  home,
  payment,
  signup,
} from "src/routes/routes_constants";
import { Usertype } from "src/util/interfaces/interfaces";
import { MenuFooter } from "../MenuFooter";
import { Container, Content } from "./styles";

export const HeaderMenu: React.FC = () => {
  const { user } = useAuth();
  return (
    <Container>
      <Content>
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <Link id="menuName" to={home}>
              <p className="menuName">Nome da Marca</p>
            </Link>

            <Link to={dashboardJobs}>
              <li>Vagas</li>
            </Link>

            {(!!user && user.role === Usertype.free) || !user ? (
              <Link
                to={!!user && user.role === Usertype.free ? payment : signup}
              >
                <li>Plano Premium</li>
              </Link>
            ) : (
              <Link to={dashboardEvents}>
                <li>Eventos</li>
              </Link>
            )}

            <Link to="/">
              <li>Central de atendimento</li>
            </Link>
            <Link to="/">
              <li>Sobre nós</li>
            </Link>
            <Link to="/">
              <li>Políticas</li>
            </Link>
            <li className="footerMenu">
              <MenuFooter />
            </li>
          </ul>
        </div>
      </Content>
    </Container>
  );
};
