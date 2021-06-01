import { format, parseISO } from "date-fns";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { useAuth } from "src/context/auth";
import { dashboardEvents, payment } from "src/routes/routes_constants";
import { api } from "src/services/api";
import { Event, Usertype } from "src/util/interfaces/interfaces";
import { Container, Content } from "./styles";

export const EventPage: React.FC = () => {
  const { user } = useAuth();
  const { eventId } = useParams<any>();
  const history = useHistory();

  const [event, setEvent] = useState<Event | undefined>(undefined);

  useEffect(() => {
    api.get(`/events/${eventId}`).then((value) => {
      setEvent(value.data);
    });
  }, [eventId]);

  if (!!user && user.role === Usertype.free) {
    history.push(payment);
  }

  // end-point não disponível no back-end

  function submmitEvent() {
    toast.success("Inscrição realizada com sucesso!");
  }

  return (
    <Container>
      <Header />
      <Link to={dashboardEvents} className="goBack">
        <span>Home</span>
        <img
          src="./assets/leftVector.svg"
          alt="Voltar"
          className="pathVector"
        />
        <span>Eventos</span>
        <img
          src="./assets/leftVector.svg"
          alt="Voltar"
          className="pathVector"
        />
        <span>Palestra Direitos Humanos e o mundo do trabalho</span>
      </Link>
      {event && (
        <>
          <img src={event.thumb} alt="" className="eventImg" />
          <img src={event.thumb} alt="" className="eventBigImg" />
          <Content>
            <div className="eventHeader">
              <p className="eventType">Palestra:</p>
              <p className="eventTitle">{event.name}</p>
              <span className="eventDate">
                <img src="./assets/calendar.svg" alt="" />
                <p>{format(parseISO(event.date), "dd/MM/yyyy")}</p>
              </span>

              <span className="eventPlataform">
                <img src="./assets/eventsIcon.svg" alt="" />
                <p>Vídeoconferência</p>
              </span>
            </div>

            <div className="description">
              <h3 className="descriptionTitle">Descrição do evento</h3>
              <span className="descriptionIntro">
                {event.description}
                <p className="descriptionIntroDetail">{event.description}</p>
              </span>
              <p className="descriptionAbstract">{event.description}</p>
            </div>
            <button className="submitButton" onClick={submmitEvent}>
              <p>Inscrever-se</p>
            </button>
          </Content>
        </>
      )}
      <Footer />
    </Container>
  );
};
