import React from "react";
import { Footer } from "src/components/Footer";
import { FooterPages } from "src/components/FooterPages";
import { Header } from "src/components/Header";
import { SearchCard } from "src/components/SearchCard";
import { Container, Content, List } from "./styles";

export const DashboardJobs: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <SearchCard />
        <List>
          <h3 className="title">Mais de 1500 vagas para você</h3>
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
        </List>
      </Content>
      <FooterPages />
      <Footer />
    </Container>
  );
};
