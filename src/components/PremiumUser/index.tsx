import React, { ChangeEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { payment } from "src/routes/routes_constants";
import { api } from "src/services/api";
import { Disability } from "src/util/interfaces/interfaces";
import {
  cpfValidation,
  emailValidation,
} from "src/util/validations/validations";
import { Container, Content } from "./styles";

export const PremiumUser: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [disabilityList, setDisabilityList] = useState<Disability[]>([]);
  const [disability, setDisability] =
    useState<Disability | undefined>(undefined);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    api.get("/disabilities").then((value) => {
      setDisabilityList(value.data);
    });
  }, []);

  function registerPremiumUser(event: any) {
    event.preventDefault();

    if (name.length === 0) {
      toast.error("Insira seu nome");
    } else if (email.length === 0 || !emailValidation(email)) {
      toast.error("Insira um e-mail válido");
    } else if (cpf.length === 0 || !cpfValidation(cpf)) {
      toast.error("Insira um CPF válido");
    } else if (birthDate.length === 0) {
      toast.error("Insira sua data de nascimento");
    } else if (disability === undefined) {
      toast.error("Selecione uma deficiência");
    } else if (password.length < 8) {
      toast.error("Sua senha precisa no mínimo de 8 dígitos");
    } else if (password !== confirmPassword) {
      toast.error("As senhas não conferem");
    } else
      api
        .post("/premiumUsers", {
          name,
          email,
          password,
          cpf,
          birthDate,
          disability: [disability?.id],
        })
        .then((value) => {
          toast.info("Conclua seu cadastro Premium efetuando o pagamento");
          history.push(payment);
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
  }

  function disabilitySelected(event: ChangeEvent<HTMLSelectElement>) {
    const disabilityId = event.target.value;
    const selectedDisability = disabilityList.find(
      (item) => item.id === disabilityId
    );

    setDisability(selectedDisability);
  }

  return (
    <Container>
      <Content>
        <div className="registerForm">
          <p className="titleDesktop">Cadastrar</p>
          <p className="registerDescription">
            Crie seu perfil premium e tenha acesso a todas as vagas e cursos de
            especialização do nosso catálogo. Tudo isso por apenas 12 x R$79,90.
          </p>

          <input
            className="registerName basicsInputStyles"
            type="text"
            placeholder="Nome completo"
            onChange={(event) => setName(event.target.value)}
          />

          <input
            className="registerEmail basicsInputStyles"
            type="email"
            placeholder="E-mail"
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            className="registerCPF basicsInputStyles"
            type="number"
            placeholder="CPF: somente numeros"
            maxLength={11}
            onChange={(event) => setCpf(event.target.value)}
          />

          <p className="birthDateText">Data de nascimento</p>

          <input
            className="registerBirth basicsInputStyles"
            type="date"
            onChange={(event) => setBirthDate(event.target.value)}
          />

          <select
            className="inputSearch basicsInputStyles"
            name="Deficiencia"
            onChange={disabilitySelected}
          >
            <option value="">Selecione uma deficiencia</option>
            {disabilityList.map((item: Disability) => (
              <option className="c-dropDown-item" value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <input
            className="registerPassword basicsInputStyles"
            type="password"
            placeholder="Senha de no mínimo 8 dígitos"
            onChange={(event) => setPassword(event.target.value)}
          />

          <input
            className="registerPasswordConfirmation basicsInputStyles"
            type="password"
            placeholder="Confirme sua senha"
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          <button type="submit" onClick={registerPremiumUser}>
            Cadastrar
          </button>
        </div>
      </Content>
    </Container>
  );
};
