import React, { useEffect, useState } from "react";
import { Footer } from "src/components/Footer";
import { FooterPages } from "src/components/FooterPages";
import { Header } from "src/components/Header";
import { JobCard } from "src/components/JobCard/indes";
import { SearchCard } from "src/components/SearchCard";
import { api } from "src/services/api";
import { Category, Job } from "src/util/interfaces/interfaces";
import { Container, Content, List } from "./styles";

export const DashboardJobs: React.FC = () => {
  const [themesList, setThemesList] = useState<Category[]>([]);
  const [jobsList, setJobsList] = useState<Job[]>([]);

  useEffect(() => {
    api.get("/vacancies").then((value) => {
      setJobsList(value.data);
    });

    api.get("/categories").then((value) => {
      setThemesList(value.data);
    });
  }, []);

  function handleJobsTheme(theme: Category | undefined) {
    if (theme) {
      api.get(`/vacancies?category=${theme.name}`).then((value) => {
        setJobsList(value.data);
      });
    }
  }

  function handleSearch(search: string) {
    if (search.length > 0) {
      api.get(`/vacancies?office=${search}`).then((value) => {
        setJobsList(value.data);
      });
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <SearchCard
          themes={themesList}
          handleJobsTheme={handleJobsTheme}
          handleSearch={handleSearch}
        />
        <List>
          <h3 className="title">Mais de 1500 vagas para você</h3>
          {jobsList.map((item: Job) => (
            <JobCard job={item} key={item.id} />
          ))}
        </List>
      </Content>
      <FooterPages />
      <Footer />
    </Container>
  );
};
