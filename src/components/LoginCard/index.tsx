import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { Container, Content } from "./styles";

interface LoginCredentials {
  email: string;
  password: string;
}

export const LoginCard: React.FC = () => {
  const history = useHistory();

  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  } as LoginCredentials);

  const { signIn } = useAuth();

  async function login(event: any) {
    event.preventDefault();
    await signIn({
      email: loginCredentials.email,
      password: loginCredentials.password,
    });

    //TODO COLOCAR O NOME DA PAGINA

    history.push("/");
  }

  return (
    <Container>
      <Content>
        <Link to="/" className="goBack">
          <img
            src="./assets/leftVector.svg"
            alt="Voltar"
            className="pathVector"
          />
          <span>Entrar no seu perfil</span>
        </Link>

        <form onSubmit={login} className="formLogin">
          <span className="emailField">
            <p>Email</p>
            <input type="email" placeholder="Digite seu e-mail" />
          </span>
          <span className="passwordField">
            <p>Senha</p>
            <input type="password" placeholder="Digite sua senha" />
          </span>

          <span className="forgotPassword">
            <Link to="/">Esqueceu sua senha?</Link>
          </span>

          <button type="submit">Entrar</button>
        </form>

        <span className="signIn">
          <p>Ainda não tem conta?</p>
          <Link to="/">Cadastre-se</Link>
        </span>
      </Content>
    </Container>
  );
};
