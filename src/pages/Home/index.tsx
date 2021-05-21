import React from "react";
import { Footer } from "src/components/Footer";
import { Header } from "../../components/Header";
import { Banner, Container, Content } from "./styles";

export const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Banner>
        <div className="bannerTop">
          <img src="./assets/bannerTop.svg" alt="" />
        </div>
        <section className="bannerText">
          <h2>Educação inclusiva</h2>
          <span>Cursos preparatórios ministrados pensando em você!</span>
          <p>
            Nosso intuito é promover e facilitar a presença de deficientes
            auditivos e de fala no mercado de trabalho, auxiliando na busca de
            vagas e proponto recursos alternativos para sua capacitação. Vamos
            juntos na luta pela inclusão.
          </p>
          <div className="premium">
            <h3>SEJA PREMIUM</h3>
            <p>
              Seja Premium e conheça nossos cursos voltados para sua necessidade
            </p>
            <button>Premium</button>
          </div>
        </section>
        <div className="bannerImg">
          <img src="./assets/bannerImg.svg" alt="" />
        </div>
        <div className="bannerBottom">
          <img src="./assets/bannerBottom.svg" alt="" />
        </div>
      </Banner>
      <Content>
        <h3 className="title">Vagas para você</h3>
        <div className="jobCard">
          <div className="jobCardImg">
            <img src="./assets/companyLogo.svg" alt="Ioasys" />
          </div>
          <div className="jobCardInfo">
            <h4 className="jobName">Auxiliar de produção</h4>
            <h5 className="jobCompany">Ioasys</h5>
            <button className="moreAbout" type="button">
              Saber mais
            </button>
            <section className="jobLevel">
              <span className="level">Júnior/Treinee</span>
              <div className="jobLocation">
                <img src="./assets/pin.svg" alt="Localização" />
                <span>João Pessoa</span>
              </div>
            </section>
            <p className="jobDescription">
              Somos mais de seis mil pessoas espalhadas pelas cinco regiões do
              Brasil, parte de um grupo brasileiro. Essas pessoas movem a
              economia do país...
            </p>
          </div>
        </div>

        <div className="jobCard">
          <div className="jobCardImg">
            <img src="./assets/companyLogo.svg" alt="Ioasys" />
          </div>
          <div className="jobCardInfo">
            <h4 className="jobName">Auxiliar de produção</h4>
            <h5 className="jobCompany">Ioasys</h5>
            <button className="moreAbout" type="button">
              Saber mais
            </button>
            <section className="jobLevel">
              <span className="level">Júnior/Treinee</span>
              <div className="jobLocation">
                <img src="./assets/pin.svg" alt="Localização" />
                <span>João Pessoa</span>
              </div>
            </section>
            <p className="jobDescription">
              Somos mais de seis mil pessoas espalhadas pelas cinco regiões do
              Brasil, parte de um grupo brasileiro. Essas pessoas movem a
              economia do país...
            </p>
          </div>
        </div>

        <div className="jobCard">
          <div className="jobCardImg">
            <img src="./assets/companyLogo.svg" alt="Ioasys" />
          </div>
          <div className="jobCardInfo">
            <h4 className="jobName">Auxiliar de produção</h4>
            <h5 className="jobCompany">Ioasys</h5>
            <button className="moreAbout" type="button">
              Saber mais
            </button>
            <section className="jobLevel">
              <span className="level">Júnior/Treinee</span>
              <div className="jobLocation">
                <img src="./assets/pin.svg" alt="Localização" />
                <span>João Pessoa</span>
              </div>
            </section>
            <p className="jobDescription">
              Somos mais de seis mil pessoas espalhadas pelas cinco regiões do
              Brasil, parte de um grupo brasileiro. Essas pessoas movem a
              economia do país...
            </p>
          </div>
        </div>

        <div className="jobCard">
          <div className="jobCardImg">
            <img src="./assets/companyLogo.svg" alt="Ioasys" />
          </div>
          <div className="jobCardInfo">
            <h4 className="jobName">Auxiliar de produção</h4>
            <h5 className="jobCompany">Ioasys</h5>
            <button className="moreAbout" type="button">
              Saber mais
            </button>
            <section className="jobLevel">
              <span className="level">Júnior/Treinee</span>
              <div className="jobLocation">
                <img src="./assets/pin.svg" alt="Localização" />
                <span>João Pessoa</span>
              </div>
            </section>
            <p className="jobDescription">
              Somos mais de seis mil pessoas espalhadas pelas cinco regiões do
              Brasil, parte de um grupo brasileiro. Essas pessoas movem a
              economia do país...
            </p>
          </div>
        </div>

        <div className="jobCard">
          <div className="jobCardImg">
            <img src="./assets/companyLogo.svg" alt="Ioasys" />
          </div>
          <div className="jobCardInfo">
            <h4 className="jobName">Auxiliar de produção</h4>
            <h5 className="jobCompany">Ioasys</h5>
            <button className="moreAbout" type="button">
              Saber mais
            </button>
            <section className="jobLevel">
              <span className="level">Júnior/Treinee</span>
              <div className="jobLocation">
                <img src="./assets/pin.svg" alt="Localização" />
                <span>João Pessoa</span>
              </div>
            </section>
            <p className="jobDescription">
              Somos mais de seis mil pessoas espalhadas pelas cinco regiões do
              Brasil, parte de um grupo brasileiro. Essas pessoas movem a
              economia do país...
            </p>
          </div>
        </div>

        <button type="button" className="moreJobs">
          Ver todas as vagas
        </button>
      </Content>
      <Footer />
    </Container>
  );
};
