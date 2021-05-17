import React, { createContext, useCallback, useContext, useState } from "react";
import { api } from "../services/api";

interface AuthData {
  token: string;
  user: User;
}

//verificar os campos do usuário

interface User {
  name: string;
  email: string;
  gender: string;
  id: string;
}

interface SignInFields {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(fields: SignInFields): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem("@:token"); //COLOCAR TOKEN
    const user = localStorage.getItem("@:user"); //COLOCAR TOKEN

    if (token && user) {
      api.defaults.headers.Authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthData;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const resp = await api.post("/auth/sign-in", { email, password });
    const user = resp.data;
    const token = resp.headers.authorization;

    localStorage.setItem("@:token", token); //COLOCAR TOKEN
    localStorage.setItem("@:user", JSON.stringify(user)); //COLOCAR TOKEN

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@:token"); //COLOCAR TOKEN
    localStorage.removeItem("@:user"); //COLOCAR TOKEN

    setData({} as AuthData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Context not exists");
  }

  return context;
}
