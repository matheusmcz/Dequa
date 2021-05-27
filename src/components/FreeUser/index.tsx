import React from "react";
import { Container, Content } from "./styles";

export const FreeUser: React.FC = () => {
  return (
    <Container>
      <Content>
        <form className="registerForm">
          <p className="registerDescription">
            Crie seu perfil e tenha acesso gratuito a todas as vagas do nosso
            catálogo.
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
            <p>Cadastrar</p>
          </button>
        </form>
      </Content>
    </Container>
  );
};
