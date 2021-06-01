import React, { useState } from "react";
import { Link } from "react-router-dom";
import { home } from "src/routes/routes_constants";
import { EventTheme } from "src/util/interfaces/interfaces";
import { Container, Content } from "./styles";

interface SearchCardEventsProps {
  themes: EventTheme[];
  handleEventTheme(theme: EventTheme | undefined): void;
  handleSearch(search: string): void;
}

export const SearchCardEvents: React.FC<SearchCardEventsProps> = ({
  themes,
  handleEventTheme,
  handleSearch,
}) => {
  const [selectedTheme, setSelectedTheme] =
    useState<EventTheme | undefined>(undefined);

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
    handleEventTheme(selectedTheme);
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
              placeholder="Buscar por nome"
              required
              onChange={(event) => setSearchInput(event.target.value)}
            />

            <button
              className="searchJobButton"
              type="submit"
              onClick={searching}
            >
              Buscar
            </button>
          </div>
        </div>

        <div id="searchCardBottom">
          <section className="searchArea">
            <img src="./assets/jobsIcon.svg" alt="Buscar Vagas" />
            <span>Tipos de eventos</span>
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
              <option className="c-dropDown-item" value="">
                {" "}
              </option>

              {themes.map((item: EventTheme) => (
                <option
                  className="c-dropDown-item"
                  value={item.id}
                  key={item.id}
                >
                  {item.name}
                </option>
              ))}
            </select>

            <div id="searchCardBottomDesktop">
              <ul className="container">
                {themes.map((item: EventTheme) => (
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

            <button
              className="searchButton"
              type="submit"
              onClick={handleFilter}
            >
              Buscar
            </button>
          </div>
        </div>
      </Content>
    </Container>
  );
};
