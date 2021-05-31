import React from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { home, signup } from "src/routes/routes_constants";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Container, Content } from "./styles";

export const Payment: React.FC = () => {
  const history = useHistory();

  function paymentSubmit() {
    toast.success("Pagamento Concluído com sucesso!");
    toast.success("Por favor realize o login");

    history.push(home);
  }

  return (
    <Container>
      <Header />
      <Link to={signup} className="goBack">
        <span className="pathDesktop">Home</span>
        <img
          src="./assets/leftVector.svg"
          alt="Voltar"
          className="pathVector"
        />
        <span className="pathDesktop">Cadastro</span>
        <img
          src="./assets/leftVector.svg"
          alt="Voltar"
          className="pathVector"
        />
        <span>Pagamento</span>
      </Link>
      <Content>
        <div className="paymentForm">
          <p className="paymentDescription">Informações de pagamento</p>
          <p className="registerDescription">
            Crie seu perfil premium e tenha acesso a todas as vagas e cursos de
            especialização do nosso catálogo. Tudo isso por apenas 12 x R$79,90.
          </p>

          <img
            src="./assets/paypal.png"
            alt="Metodos de pagamento"
            className="paypal"
          />

          <label htmlFor="">
            <p className="ownerName">Nome do titular do cartão</p>

            <input
              className="paymentName basicsInputStyles"
              type="text"
              placeholder="Nome completo"
            />
          </label>

          <label htmlFor="">
            <p className="ownerName">Número do cartão</p>

            <input
              className="paymentName basicsInputStyles"
              type="text"
              placeholder="ex: 0000 0000 0000 0000"
            />
          </label>

          <label htmlFor="">
            <p className="expirationDate">Vencimento</p>
            <input className="paymentBirth basicsInputStyles" type="month" />
          </label>

          <label htmlFor="">
            <p className="securityCode">Código de segurança</p>
            <input
              className="paymentEmail basicsInputStyles"
              type="number"
              placeholder="3 dígitos"
              maxLength={3}
            />
          </label>

          <select
            className="inputSearch basicsInputStyles"
            name="Deficiencia"
            placeholder="Selecionar número de parcelas"
          >
            <option className="c-dropDown-item" value="1">
              1x R$ 958.80
            </option>
            <option className="c-dropDown-item" value="2">
              2x R$ 479.40
            </option>
            <option className="c-dropDown-item" value="3">
              3x R$ 319,60
            </option>
            <option className="c-dropDown-item" value="4">
              4x R$ 239,70
            </option>
            <option className="c-dropDown-item" value="5">
              5x R$ 191,76
            </option>
            <option className="c-dropDown-item" value="6">
              6x R$ 159,80
            </option>
            <option className="c-dropDown-item" value="7">
              7x R$ 136,97
            </option>
            <option className="c-dropDown-item" value="8">
              8x R$ 119,85
            </option>
            <option className="c-dropDown-item" value="9">
              9x R$ 106,53
            </option>
            <option className="c-dropDown-item" value="10">
              10x R$ 95,88
            </option>
          </select>

          <p className="info">
            Suas informações serão coletadas de acordo com a
            <a href="https://www.paypal.com/br/webapps/mpp/ua/privacy-full">
              Política de Privacidade do PayPal
            </a>
          </p>

          <button type="submit" onClick={paymentSubmit}>
            <p>Finalizar pagamento</p>
          </button>
        </div>
      </Content>
      <Footer />
    </Container>
  );
};
