import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/">
              <span>Home</span>
            </Link>

            <Link to="/dashboard-jobs">
              <img
                src="./assets/leftVector.svg"
                alt="Voltar"
                className="pathVector"
              />
              <span>Vagas de emprego</span>
            </Link>

            <Link to="/dashboard-jobs">
              <img
                src="./assets/leftVector.svg"
                alt="Voltar"
                className="pathVector"
              />

              <span>Auxiliar de produção</span>
            </Link>
          </div>

          <div id="jobInformation">
            <img
              className="companyProfilePicture"
              src="./assets/companyProfilePicture.png"
              alt="Company"
            />
            <section className="info">
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
            </section>
          </div>

          <div id="jobDescription" className="sectionsStyles">
            <p className="title">Detalhes da vaga</p>

            <span className="text">
              Executar as atividades de processamento e industrialização de
              alimentos na linha de produção de atuação, de acordo com os
              procedimentos operacionais, padrão de qualidade e produtividade
              definido, normas de segurança e legislação vigente. Fique ligado
              nos requisitos da vaga.
            </span>
          </div>

          <div id="companyDescription" className="sectionsStyles">
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

          <div id="skills" className="sectionsStyles">
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

          <div id="schedule" className="sectionsStyles">
            <p className="title">Carga horária</p>
            <p className="text">8 horas diárias</p>
          </div>

          <div id="accessibility" className="sectionsStyles">
            <p className="title">A empresa tem acessibilidade</p>
            <span className="text">
              Sim, a empresa tem todos os artefatos necessários para lidar com
              sua deficiência.
            </span>
          </div>

          <div className="applyCard">
            <img src="./assets/companyLogo.svg" alt="Ioasys" />
            <button type="submit">Aplicar para vaga</button>
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
