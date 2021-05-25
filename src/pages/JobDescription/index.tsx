import React from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Container, Content } from "./styles";

export const JobDescription: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <section id="companyProfile">
          <div className="goBack">
            <a href="/">
              <span>Home</span>
              <img src="./assets/leftVector.svg" alt="Voltar" />
              <span>Vagas de emprego</span>
            </a>
          </div>

          <img
            className="companyProfilePicture"
            src="./assets/companyProfilePicture.png"
            alt="Company"
          />

          <div id="jobInformation">
            <p className="title">Auxiliar de produção</p>
            <p className="company">Ioasys</p>
            <p className="level">Júnior/Trainee</p>
            <span className="location">
              <img src="./assets/pin.svg" alt="" />
              João Pessoa
            </span>
            <span className="payment">
              <img src="./assets/money.svg" alt="" />
              Faixa salarial a combinar
            </span>
            <span className="modality">
              <img src="./assets/jobsIcon.svg" alt="" />
              Contrato CLT
            </span>
          </div>

          <div id="jobDescription">
            <p className="title">Detalhes da vaga</p>

            <span className="text">
              Executar as atividades de processamento e industrialização de
              alimentos na linha de produção de atuação, de acordo com os
              procedimentos operacionais, padrão de qualidade e produtividade
              definido, normas de segurança e legislação vigente. Fique ligado
              nos requisitos da vaga.
            </span>
          </div>

          <div id="companyDescription">
            <p className="title">Informações sobre a empresa</p>

            <span className="text">
              Somos especialistas em trazer o melhor do universo digital para
              nossos clientes e a transormar a sociedade, a repensá-la e a
              evoluií-la. Ajudamos marcas a inovar através da transformação
              digital e seguindo os princípios de metodologia ágil e abordagem
              centrada ao usuário, modificando a realidade das pessoas com
              tecnologia de ponta a ponta.
            </span>
          </div>

          <div id="skills">
            <p className="title">Habilidades necessárias</p>

            <ul>
              <li className="skills">Alfabetiza</li>
              <li className="skills">Disponibilidade de horário</li>
              <li className="skills">Disponibilidade aos sábados</li>
              <li className="skills">
                Assiduidade, compromisso e responsabilidade
              </li>
            </ul>
          </div>

          <div id="schedule">
            <p className="title">Carga horária</p>
            <p className="text">8 horas diárias</p>
          </div>

          <div id="accessibility">
            <p className="title">A empresa tem acessibilidade</p>
            <span className="text">
              Sim, a empresa tem todos os artefatos necessários para lidar com
              sua deficiência.
            </span>
          </div>
        </section>

        <section id="documents">
          <div className="linkedin">
            <span>
              <img src="./assets/linkedinLink.svg" alt="" />
              Anexar link do Linkedin
            </span>

            <input type="text" />
          </div>

          <div className="curriculum">
            <span>
              <img src="./assets/fileUpload.svg" alt="" />
              Carregar currículo
            </span>
            <input
              type="file"
              name="curriculum"
              id="file"
              placeholder="Selecionar arquivo..."
            />
          </div>

          <button className="submitButton" type="submit">
            Aplicar para Vagas
          </button>
        </section>
      </Content>
      <Footer />
    </Container>
  );
};
