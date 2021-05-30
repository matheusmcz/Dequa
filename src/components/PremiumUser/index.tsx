import React from "react";
import { Link } from "react-router-dom";
import { payment } from "src/routes/routes_constants";
import { Container, Content } from "./styles";

export const PremiumUser: React.FC = () => {
  return (
    <Container>
      <Content>
        <form className="registerForm">
          <p className="titleDesktop">Cadastrar</p>
          <p className="registerDescription">
            Crie seu perfil premium e tenha acesso a todas as vagas e cursos de
            especialização do nosso catálogo. Tudo isso por apenas 12 x R$79,90.
          </p>

          <input
            className="registerName basicsInputStyles"
            type="text"
            placeholder="Nome completo"
          />

          <input
            className="registerEmail basicsInputStyles"
            type="email"
            placeholder="E-mail"
          />

          <input
            className="registerCPF basicsInputStyles"
            type="number"
            placeholder="CPF: somente numeros"
            maxLength={11}
          />

          <input className="registerBirth basicsInputStyles" type="date" />

          <select className="inputSearch basicsInputStyles" name="Deficiencia">
            <option className="c-dropDown-item" value="exemplo">
              Exemplo
            </option>
          </select>

          <input
            className="registerPassword basicsInputStyles"
            type="password"
            placeholder="Senha"
          />

          <input
            className="registerPasswordConfirmation basicsInputStyles"
            type="password"
            placeholder="Confirme sua senha"
          />

          <button type="submit">
            <Link to={payment}>Cadastrar</Link>
          </button>
        </form>
      </Content>
    </Container>
  );
};
