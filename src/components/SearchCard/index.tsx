import React, { useState } from "react";
import { Link } from "react-router-dom";
import { home } from "src/routes/routes_constants";
import { Category } from "src/util/interfaces/interfaces";
import { Container, Content } from "./styles";

interface SearchCardJobsProps {
  themes: Category[];
  handleJobsTheme(theme: Category | undefined): void;
  handleSearch(search: string): void;
}

export const SearchCard: React.FC<SearchCardJobsProps> = ({
  themes,
  handleJobsTheme,
  handleSearch,
}) => {
  const [selectedTheme, setSelectedTheme] =
    useState<Category | undefined>(undefined);

  const [searchInput, setSearchInput] = useState("");

  function searching(event: any) {
    event.preventDefault();
    handleSearch(searchInput);
  }

  function handleSelectedThemeMobile(id: string) {
    const findedTheme = themes.find((item) => item.id === id);
    setSelectedTheme(findedTheme);
  }

  function handleFilter(event: any) {
    event.preventDefault();
    handleJobsTheme(selectedTheme);
  }
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
          <span>Vagas de emprego</span>
        </Link>
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
              onChange={(event) => setSearchInput(event.target.value)}
            />

            <button className="searchJobButton" onClick={searching}>
              Buscar
            </button>
          </div>
        </div>

        <div id="searchCardBottom">
          <section className="searchArea">
            <img src="./assets/jobsIcon.svg" alt="Buscar Vagas" />
            <span>Área de atuação</span>
          </section>

          <div className="areaSection">
            <select
              name="Area"
              id="c-dropDown"
              className="inputSearch"
              onChange={(event) =>
                handleSelectedThemeMobile(event.target.value)
              }
            >
              <option value=""> </option>

              {themes.map((item: Category) => (
                <option
                  className="c-dropDown-item"
                  value="Atendimento ao cliente"
                  key={item.id}
                >
                  {item.name}
                </option>
              ))}
            </select>

            <div id="searchCardBottomDesktop">
              <ul className="container">
                {themes.map((item: Category) => (
                  <li
                    className="content"
                    key={item.id}
                    onClick={
                      selectedTheme?.id === item.id
                        ? () => handleSelectedThemeMobile("")
                        : () => handleSelectedThemeMobile(item.id)
                    }
                  >
                    <input
                      type="checkbox"
                      name={item.name}
                      id="checkBox"
                      checked={selectedTheme?.id === item.id}
                    />
                    <p>{item.name}</p>
                  </li>
                ))}
              </ul>
            </div>

            <button className="searchButton" onClick={handleFilter}>
              Buscar
            </button>
          </div>
        </div>
      </Content>
    </Container>
  );
};
