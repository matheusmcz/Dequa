import React from "react";
import { useHistory } from "react-router";
import { EventCard } from "src/components/EventCard";
import { Footer } from "src/components/Footer";
import { FooterPages } from "src/components/FooterPages";
import { Header } from "src/components/Header";
import { SearchCardEvents } from "src/components/SearchCardEvents";
import { useAuth, Usertype } from "src/context/auth";
import { payment } from "src/routes/routes_constants";
import { Container, Content, DashBoard, EventsList } from "./styles";

export const PremiumDashboard: React.FC = () => {
  const history = useHistory();

  const { user } = useAuth();

  if (!!user && user.userType === Usertype.free) {
    history.push(payment);
  }

  return (
    <Container>
      <Header />
      <Content>
        <SearchCardEvents />

        <DashBoard>
          <h3 className="eventsTitle">Principais eventos para você</h3>
          <EventsList>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </EventsList>
        </DashBoard>
      </Content>
      <FooterPages />
      <Footer />
    </Container>
  );
};
