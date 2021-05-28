import React from "react";
import { EventCard } from "src/components/EventCard";
import { Footer } from "src/components/Footer";
import { FooterPages } from "src/components/FooterPages";
import { Header } from "src/components/Header";
import { SearchCardEvents } from "src/components/SearchCardEvents";
import { Container, Content, EventsList } from "./styles";

export const PremiumDashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <SearchCardEvents />
        <h3 className="eventsTitle">Principais eventos</h3>

        <EventsList>
          <EventCard />
          <EventCard />
          <EventCard />
        </EventsList>
      </Content>
      <FooterPages />
      <Footer />
    </Container>
  );
};
