import React from "react";
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
            <a id="menuName" href="/">
              <p className="menuName">Nome da Marca</p>
            </a>

            <a href="/dashboard-jobs">
              <li>Vagas</li>
            </a>
            <a href="/">
              <li>Plano Premium</li>
            </a>
            <a href="/">
              <li>Central de atendimento</li>
            </a>
            <a href="/">
              <li>Sobre nós</li>
            </a>
            <a href="/">
              <li>Políticas</li>
            </a>
            <li className="footerMenu">
              <MenuFooter />
            </li>
          </ul>
        </div>
      </Content>
    </Container>
  );
};
