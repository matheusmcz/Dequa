import React from "react";
import { Container, Content } from "./styles";

export const SearchCard: React.FC = () => {
  return (
    <Container>
      <div className="goBack">
        <a href="/">
          <span>Home</span>
          <img src="./assets/leftVector.svg" alt="Voltar" />
          <span>Vagas de emprego</span>
        </a>
      </div>
      <Content>
        <div id="searchCardTop">
          <section className="searchJobs">
            <img src="./assets/search.svg" alt="Buscar Vagas" />
            <span>Buscar Vagas</span>
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
            <span>Área de atuação</span>
          </section>

          <form className="areaSection">
            <select name="Area" id="c-dropDown" className="inputSearch">
              <option
                className="c-dropDown-item"
                value="Atendimento ao cliente"
              >
                Atendimento ao cliente
              </option>
              <option className="c-dropDown-item" value="Administração">
                Administração
              </option>
              <option className="c-dropDown-item" value="Marketing">
                Marketing
              </option>
              <option className="c-dropDown-item" value="Produto">
                Produto
              </option>
            </select>

            <div id="searchCardBottomDesktop">
              <ul className="container">
                <li className="content">
                  <input
                    type="checkbox"
                    name="Atendimento ao cliente"
                    id="checkBox"
                  />
                  <p>Atendimento ao cliente</p>
                </li>
                <li className="content">
                  <input type="checkbox" name="Administração" id="checkBox" />
                  <p>Administração</p>
                </li>
                <li className="content">
                  <input type="checkbox" name="Marketing" id="checkBox" />
                  <p>Marketing</p>
                </li>
                <li className="content">
                  <input type="checkbox" name="Produção" id="checkBox" />
                  <p>Produção</p>
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
