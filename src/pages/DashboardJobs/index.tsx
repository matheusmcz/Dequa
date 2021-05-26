import React from "react";
import { Footer } from "src/components/Footer";
import { FooterPages } from "src/components/FooterPages";
import { Header } from "src/components/Header";
import { JobCard } from "src/components/JobCard/indes";
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
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </List>
      </Content>
      <FooterPages />
      <Footer />
    </Container>
  );
};
