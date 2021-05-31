import React, { useEffect, useState } from "react";
import { Footer } from "src/components/Footer";
import { FooterPages } from "src/components/FooterPages";
import { Header } from "src/components/Header";
import { JobCard } from "src/components/JobCard/indes";
import { SearchCard } from "src/components/SearchCard";
import { api } from "src/services/api";
import { Job } from "src/util/interfaces/interfaces";
import { Container, Content, List } from "./styles";

export const DashboardJobs: React.FC = () => {
  const [jobsList, setJobsList] = useState<Job[]>([]);

  useEffect(() => {
    api.get("/vacancies").then((value) => {
      setJobsList(value.data);
    });
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <SearchCard />
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
