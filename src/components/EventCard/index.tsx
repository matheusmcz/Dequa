import { format, parseISO } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
import { eventDescriptionRoot } from "src/routes/routes_constants";
import { Event } from "src/util/interfaces/interfaces";
import { Container } from "./styles";

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Container>
      <Link className="cardInfo" to={`${eventDescriptionRoot}/${event.id}`}>
        <header>
          <img src={event.thumb} alt={event.name} />
        </header>
        <div className="about">
          <h4 className="eventTitle">{event.name}</h4>
          <div className="date">
            <img src="./assets/calendar.svg" alt="Data" />
            <p>{format(parseISO(event.date), "dd/MM/yyyy")}</p>
            {/* <p>{`${day}/${month}/${year}`}</p> */}
          </div>

          <p className="description">{event.description}</p>
        </div>
      </Link>
    </Container>
  );
};
