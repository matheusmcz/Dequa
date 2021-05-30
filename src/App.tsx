import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/auth";
import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <GlobalStyle />
      <ToastContainer />
    </BrowserRouter>
  );
}
