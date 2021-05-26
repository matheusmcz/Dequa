import React from "react";
import { BetsCompanies } from "src/components/BetsCompanies/indes";
import { Footer } from "src/components/Footer";
import { JobCard } from "src/components/JobCard/indes";
import { Header } from "../../components/Header";
import { Banner, Container, Content, MoreJobs } from "./styles";

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

        <JobCard />
        <JobCard />
        <JobCard />

        <MoreJobs to="/dashboard-jobs">
          <button type="button" className="moreJobs">
            Ver todas as vagas
          </button>
        </MoreJobs>
      </Content>
      <BetsCompanies />
      <Footer />
    </Container>
  );
};
