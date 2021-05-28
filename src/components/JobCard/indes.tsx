import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export const JobCard: React.FC = () => {
  return (
    <Container>
      <Link className="jobCard" to="/job-description">
        <div className="jobCardImg">
          <img src="./assets/companyLogo.svg" alt="Ioasys" />
        </div>
        <div className="jobCardInfo">
          <h4 className="jobName">Auxiliar de produção</h4>
          <h5 className="jobCompany">Ioasys</h5>

          <button className="moreAbout" type="button">
            <Link to="/job-description">Saber mais</Link>
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
            Brasil, parte de um grupo brasileiro. Essas pessoas movem a economia
            do país...
          </p>
        </div>
      </Link>
    </Container>
  );
};
