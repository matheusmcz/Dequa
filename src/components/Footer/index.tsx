import React from "react";
import { Link } from "react-router-dom";
import { payment, signup } from "src/routes/routes_constants";
import { Container, Content } from "./styles";

export const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <section className="socialMedia">
          <img
            src="./assets/footerWhiteLogo.png"
            alt="Logo"
            className="logoImg"
          />

          <img
            src="./assets/footerColorFullLogo.png"
            alt=""
            className="footerColorFullLogo"
          />

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
          <Link to="/">Sobre nós</Link>
          <Link to="/">Entrar em contato</Link>
          <Link to="/">Seja nosso vendedor</Link>
        </section>

        <section className="categories">
          <h4>CATEGORIAS</h4>
          <Link to="/">Login</Link>
          <Link to={signup}>Cadastro</Link>
          <Link to={payment}>Premium</Link>
        </section>

        <section className="policies">
          <h4>POLÍTICAS</h4>
          <Link to="/">Termos de uso</Link>
          <Link to="/">Política de privacidade</Link>
          <Link to="/">Política de devolução</Link>
        </section>
      </Content>
    </Container>
  );
};
