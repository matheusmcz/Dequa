import React from "react";
import { Link } from "react-router-dom";
import { home } from "src/routes/routes_constants";
import { Container, Content } from "./styles";

export const SearchCardEvents: React.FC = () => {
  return (
    <Container>
      <div className="goBack">
        <Link to={home}>
          <span>Home</span>
          <img
            src="./assets/leftVector.svg"
            alt="Voltar"
            className="pathVector"
          />
          <span>Eventos</span>
        </Link>
      </div>
      <Content>
        <div id="searchCardTop">
          <section className="searchJobs">
            <img src="./assets/search.svg" alt="Buscar Vagas" />
            <span>Buscar eventos</span>
          </section>
          <div className="inputJobSearch">
            <input
              className="inputSearch"
              type="text"
              placeholder="Buscar por uma palavra chave"
              required
            />

            <button className="searchJobButton" type="submit">
              Buscar
            </button>
          </div>
        </div>

        <div id="searchCardBottom">
          <section className="searchArea">
            <img src="./assets/jobsIcon.svg" alt="Buscar Vagas" />
            <span>Tipos de eventos</span>
          </section>

          <form className="areaSection">
            <select name="Area" id="c-dropDown" className="inputSearch">
              <option
                className="c-dropDown-item"
                value="Acadêmico - Seminário/Jornada"
              >
                Acadêmico - Seminário/Jornada
              </option>
              <option
                className="c-dropDown-item"
                value="Científico - Congresso/Palestra"
              >
                Científico - Congresso/Palestra
              </option>
              <option
                className="c-dropDown-item"
                value="Curso - Profissionalização/Workshop"
              >
                Curso - Profissionalização/Workshop
              </option>
              <option className="c-dropDown-item" value="Saúde e bem-estar">
                Saúde e bem-estar
              </option>
            </select>

            <div id="searchCardBottomDesktop">
              <ul className="container">
                <li className="content">
                  <input
                    type="checkbox"
                    name="Acadêmico - Seminário/Jornada"
                    id="checkBox"
                  />
                  <p>Acadêmico - Seminário/Jornada</p>
                </li>
                <li className="content">
                  <input
                    type="checkbox"
                    name="Científico - Congresso/Palestra"
                    id="checkBox"
                  />
                  <p>Científico - Congresso/Palestra</p>
                </li>
                <li className="content">
                  <input
                    type="checkbox"
                    name="Curso - Profissionalização/Workshop"
                    id="checkBox"
                  />
                  <p>Curso - Profissionalização/Workshop</p>
                </li>
                <li className="content">
                  <input
                    type="checkbox"
                    name="Saúde e bem-estar"
                    id="checkBox"
                  />
                  <p>Saúde e bem-estar</p>
                </li>
              </ul>
            </div>

            <button className="searchButton" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </Content>
    </Container>
  );
};
