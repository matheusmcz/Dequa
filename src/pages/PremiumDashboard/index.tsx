import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { EventCard } from "src/components/EventCard";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { SearchCardEvents } from "src/components/SearchCardEvents";
import { useAuth } from "src/context/auth";
import { payment } from "src/routes/routes_constants";
import { api } from "src/services/api";
import { Event, EventTheme, Usertype } from "src/util/interfaces/interfaces";
import { Container, Content, DashBoard, EventsList } from "./styles";

export const PremiumDashboard: React.FC = () => {
  const [eventList, setEventList] = useState<Event[]>([]);
  const [themesList, setThemesList] = useState<EventTheme[]>([]);

  useEffect(() => {
    api.get("/events").then((value) => {
      setEventList(value.data);
    });

    api.get("/themes").then((value) => {
      setThemesList(value.data);
    });
  }, []);

  const history = useHistory();
  const { user } = useAuth();

  if (!!user && user.role === Usertype.free) {
    history.push(payment);
  }

  function handleEventTheme(theme: EventTheme | undefined) {
    if (theme) {
      api.get(`/events?theme=${theme.name}`).then((value) => {
        setEventList(value.data);
      });
    }
  }

  function handleSearch(search: string) {
    if (search.length > 0) {
      api.get(`/events?name=${search}`).then((value) => {
        setEventList(value.data);
      });
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <SearchCardEvents
          themes={themesList}
          handleEventTheme={handleEventTheme}
          handleSearch={handleSearch}
        />

        <DashBoard>
          <h3 className="eventsTitle">Principais eventos para você</h3>
          <EventsList>
            {eventList.map((item: Event) => (
              <EventCard event={item} key={item.id} />
            ))}
          </EventsList>
        </DashBoard>
      </Content>
      <Footer />
    </Container>
  );
};
