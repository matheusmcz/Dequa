import React from "react";
import { FooterMenu } from "../FooterMenu";
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
            <p className="menuName">Nome da Marca</p>

            <a href="/">
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
              <FooterMenu />
            </li>
          </ul>
        </div>
      </Content>
    </Container>
  );
};
