import React, { createContext, useCallback, useContext, useState } from "react";
import { useHistory } from "react-router";
import { home } from "src/routes/routes_constants";
import { User } from "src/util/interfaces/interfaces";
import { api } from "../services/api";
import { localStorageVariable } from "../util/constants/constants";

interface AuthData {
  token: string;
  user: User;
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
  const history = useHistory();

  const [data, setData] = useState(() => {
    const token = localStorage.getItem(`@${localStorageVariable}:token`);
    const user = localStorage.getItem(`@${localStorageVariable}:user`);

    if (token && user) {
      api.defaults.headers.Authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthData;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const resp = await api.post("/session", { email, password });
    const { user, token } = resp.data;

    localStorage.setItem(`@${localStorageVariable}:token`, token);
    localStorage.setItem(`@${localStorageVariable}:user`, JSON.stringify(user));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(`@${localStorageVariable}:token`);
    localStorage.removeItem(`@${localStorageVariable}:user`);

    setData({} as AuthData);
    history.push(home);
  }, [history]);

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
