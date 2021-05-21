import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { Container } from "./styles";

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
      <form onSubmit={login}>
        <input type="email" />
        <div>
          <input type="password" />
        </div>
      </form>
    </Container>
  );
};
