import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BetsCompanies } from "src/components/BetsCompanies/indes";
import { Footer } from "src/components/Footer";
import { JobCard } from "src/components/JobCard/indes";
import { LoginCard } from "src/components/LoginCard";
import { dashboardJobs, signup } from "src/routes/routes_constants";
import { api } from "src/services/api";
import { Job } from "src/util/interfaces/interfaces";
import { Header } from "../../components/Header";
import { Banner, Container, Content, MoreJobs } from "./styles";

export const Home: React.FC = () => {
  const [modalShown, setModalShown] = useState(false);
  const [jobList, setJobList] = useState<Job[]>([]);

  useEffect(() => {
    api.get("/vacancies").then((value) => {
      setJobList(value.data);
    });
  }, []);

  function handleLoginModal() {
    setModalShown(!modalShown);
  }

  return (
    <>
      {modalShown && <LoginCard closeModal={handleLoginModal} />}
      <Container>
        <Header openModal={handleLoginModal} />
        <Banner>
          <div className="bannerTop">
            <img src="./assets/bannerTop.svg" alt="" />
          </div>
          <section className="bannerText">
            <h2>Educação inclusiva</h2>
            <span className="bannerTextMobile">
              Nosso intuito é promover e facilitar a presença de deficientes
              auditivos e de fala no mercado de trabalho. Seja Premium e conheça
              nossos eventos voltados para sua capacitação.
            </span>
            <p className="bannerTextDesktop">
              Nosso intuito é promover e facilitar a presença de deficientes
              auditivos e de fala no mercado de trabalho, auxiliando na busca de
              vagas e proponto recursos alternativos para sua capacitação. Vamos
              juntos na luta pela inclusão.
            </p>
            <Link className="premium" to={signup}>
              <h3>SEJA PREMIUM</h3>
              <p className="premiumText">
                Seja Premium e conheça nossos cursos voltados para sua
                necessidade
              </p>
              <button>Premium</button>
            </Link>
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

          {jobList.map((item: Job) => (
            <JobCard job={item} key={item.id} />
          ))}

          <MoreJobs to={dashboardJobs}>
            <button type="button" className="moreJobs">
              Ver todas as vagas
            </button>
          </MoreJobs>
        </Content>
        <BetsCompanies />
        <Footer />
      </Container>
    </>
  );
};
