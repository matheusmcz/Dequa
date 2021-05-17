import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
        <h1>
          Olá pessoas, tudo bem? Consegui fazer funcionar! Maceió maior que
          Arapiraca!
        </h1>
      </AuthProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}
