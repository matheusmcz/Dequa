import React from "react";
import { Container, Content } from "./styles";

export const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <section className="socialMedia">
          <img src="./assets/logo.svg" alt="Logo" className="logoImg" />
          <h4>REDES SOCIAIS</h4>
          <div>
            <a href="https://twitter.com/ioasys_br">
              <img src="./assets/twitter.png" alt="Twitter" />
            </a>
            <a href="https://www.facebook.com/ioasys">
              <img src="./assets/facebook.png" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/ioasys/">
              <img src="./assets/instagram.png" alt="Instagram" />
            </a>
          </div>
          <section className="sac">
            <h4>CENTRAL DE ATENDIMENTO</h4>
            <span>(11) 9 4875 - 9685</span>
            <span>ioasys@email.com.br</span>
            <span>CNPJ 56.359.897/0214-78</span>
            <span>Av. Cabral do Reis, 790 - São Paulo/SP</span>
          </section>
        </section>

        <section className="aboutUs">
          <h4>SOBRE NÓS</h4>
          <a href="/">Sobre nós</a>
          <a href="/">Entrar em contato</a>
          <a href="/">Seja nosso vendedor</a>
        </section>

        <section className="categories">
          <h4>CATEGORIAS</h4>
          <a href="/">Login</a>
          <a href="/">Cadastro</a>
          <a href="/">Premium</a>
        </section>

        <section className="policies">
          <h4>POLÍTICAS</h4>
          <a href="/">Termos de uso</a>
          <a href="/">Política de privacidade</a>
          <a href="/">Política de devolução</a>
        </section>
      </Content>
    </Container>
  );
};
