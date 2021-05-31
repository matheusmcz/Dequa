import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "src/context/auth";
import { home, signup } from "src/routes/routes_constants";
import { Container, Content } from "./styles";

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginCardProp {
  closeModal?(): void;
}

export const LoginCard: React.FC<LoginCardProp> = ({ closeModal }) => {
  const history = useHistory();
  const { signIn } = useAuth();

  const [loginCredentials, setLoginCredentials] = useState<LoginCredentials>({
    email: "",
    password: "",
  } as LoginCredentials);

  async function login(event: any) {
    event.preventDefault();
    await signIn({
      email: loginCredentials.email,
      password: loginCredentials.password,
    });

    history.push(home);
    closeLoginModal();
    toast.info("Usuário autenticado com sucesso!");
  }

  function closeLoginModal() {
    closeModal && closeModal();
  }

  return (
    <Container>
      <Content>
        <span className="closeModal" onClick={closeLoginModal}>
          <img src="./assets/closeModal.svg" alt="Fechar" />
        </span>
        <Link to={home} className="goBack">
          <img
            src="./assets/leftVector.svg"
            alt="Voltar"
            className="pathVector"
          />
          <span>Entrar no seu perfil</span>
        </Link>

        <div className="formLogin">
          <span className="emailField">
            <p>Email</p>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) =>
                setLoginCredentials({
                  ...loginCredentials,
                  email: event.target.value,
                })
              }
            />
          </span>
          <span className="passwordField">
            <p>Senha</p>
            <input
              type="password"
              placeholder="Digite sua senha"
              onChange={(event) =>
                setLoginCredentials({
                  ...loginCredentials,
                  password: event.target.value,
                })
              }
            />
          </span>

          <span className="forgotPassword">
            <Link to={home}>Esqueceu sua senha?</Link>
          </span>

          <button type="submit" onClick={login}>
            Entrar
          </button>
        </div>

        <span className="signIn">
          <p>Ainda não tem conta?</p>
          <Link to={signup}>Cadastre-se</Link>
        </span>
      </Content>
    </Container>
  );
};
