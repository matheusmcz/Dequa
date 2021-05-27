import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "src/components/Footer";
import { FreeUser } from "src/components/FreeUser";
import { Header } from "src/components/Header";
import { PremiumUser } from "src/components/PremiumUser";
import { Container, Content } from "./styles";

export const Register: React.FC = () => {
  const [userType, setUserType] = useState(true);

  function handleUserTypeFree() {
    setUserType(true);
  }

  function handleUserTypePremium() {
    setUserType(false);
  }

  const items = document.querySelectorAll("ul li");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelector("li.active")?.classList.remove("active");
      item.classList.add("active");
    });
  });

  return (
    <Container>
      <Header />
      <Content>
        <Link to="/" className="goBack">
          <span>Home</span>
          <img
            src="./assets/leftVector.svg"
            alt="Voltar"
            className="pathVector"
          />
          <span>Cadastro</span>
        </Link>

        <ul className="userTypeSelection">
          <li className="free active" onClick={handleUserTypeFree}>
            Plano Gratuito
          </li>

          <li className="premium" onClick={handleUserTypePremium}>
            Plano Premium
          </li>
        </ul>

        {userType ? <FreeUser /> : <PremiumUser />}
      </Content>
      <Footer />
    </Container>
  );
};
