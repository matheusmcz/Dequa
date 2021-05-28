import React from "react";
import { Link } from "react-router-dom";
import { MenuFooter } from "../MenuFooter";
import { Container, Content } from "./styles";

export const HeaderMenu: React.FC = () => {
  return (
    <Container>
      <Content>
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu">
            <Link id="menuName" to="/">
              <p className="menuName">Nome da Marca</p>
            </Link>

            <Link to="/dashboard-jobs">
              <li>Vagas</li>
            </Link>

            <Link to="/payment">
              <li>Plano Premium</li>
            </Link>
            <Link to="/cursos">
              <li>Eventos</li>
            </Link>

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
