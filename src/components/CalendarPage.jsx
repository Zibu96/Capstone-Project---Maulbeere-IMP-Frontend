import Calendar from "react-calendar";
import MyNavbar from "./MyNavbar";
import "react-calendar/dist/Calendar.css";
import "../style/partials/_calendarpage.scss";
import { Badge, Button, Col, Container, Row, Stack } from "react-bootstrap";
import MaulEe from "../assets/EE_white.svg";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { it } from "date-fns/locale";
import CalendarReservation from "./CalendarReservation";
import ReservationModal from "./ReservationModal";
import EventModal from "./EventModal";
import { fetchEventAction } from "../redux/actions/eventAction";
import { useDispatch, useSelector } from "react-redux";
import CalendarEvent from "./CalendarEvent";
import CalendaEventSm from "./CalendarEventSm";

const CalendarPage = () => {
  const token = useSelector((state) => state?.user?.user_bearer?.accessToken);
  const eventDb = useSelector((state) => state?.event?.event?.content);
  const [value, onChange] = useState(new Date());
  const [event, setEvent] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  const [modalShowEvent, setModalShowEvent] = useState(false);
  const handleCloseEvent = () => setModalShowEvent(false);
  const handleShowEvent = () => setModalShowEvent(true);
  const dispatch = useDispatch();
  const dateToUse = format(new Date(value), "yyyy-MM-dd").trim();
  const dateToConsult = format(new Date(value), "cccc dd LLLL", { locale: it });
  console.log(dateToUse);

  console.log(eventDb);
  useEffect(() => {
    setEvent(eventDb);
  }, [eventDb]);

  useEffect(() => {
    if (token) {
      dispatch(fetchEventAction(token));
    }
  }, [dispatch, token]);

  const getTileClassName = ({ date, view }) => {
    if (view === "month") {
      const formattedDate = format(date, "yyyy-MM-dd");
      const eventsForDay = eventDb?.filter(
        (event) => event.date === formattedDate
      );

      if (eventsForDay?.length > 1) {
        return "react-calendar__tile--multiple-events";
      } else if (eventsForDay?.length === 1) {
        switch (eventsForDay[0].eventType) {
          case "PARTITA":
            return "react-calendar__tile--partita";
          case "FESTA":
            return "react-calendar__tile--festa";
          case "MUSICA":
            return "react-calendar__tile--musica";
          case "EVENTO":
            return "react-calendar__tile--evento";
          default:
            return "";
        }
      }
    }
    return "";
  };

  return (
    <>
      <MyNavbar />
      <Container className="text-white">
        <ReservationModal modalShow={modalShow} handleClose={handleClose} />
        <EventModal
          modalShowEvent={modalShowEvent}
          handleCloseEvent={handleCloseEvent}
        />
        <Row>
          <div className="d-flex justify-content-between my-3">
            <h1>Calendario:</h1>
            <img className="right-logo" src={MaulEe} alt="Alt logo" />
          </div>
          <Col>
            <Calendar
              onChange={onChange}
              value={value}
              tileClassName={getTileClassName}
            />
            <div className="d-flex gap-2 mt-2">
              <h5>Legenda:</h5>

              <Stack direction="horizontal" gap={2}>
                <Badge className="partita">Partita</Badge>
                <Badge className="musica">Musica</Badge>
                <Badge className="festa">Festa</Badge>
                <Badge className="evento">Evento</Badge>
                <Badge className="multiple-events">Più eventi</Badge>
              </Stack>
            </div>
            <div className="text-center my-3">
              <Button className="rounded-pill me-2" onClick={handleShowEvent}>
                Nuovo Evento
              </Button>
              <Button className="rounded-pill ms-2" onClick={handleShow}>
                Nuova Prenotazione
              </Button>
            </div>
          </Col>
          <h1>Oggi {dateToConsult} abbiamo:</h1>
          <CalendaEventSm />
          <CalendarReservation dateToUse={dateToUse} />
          <CalendarEvent dateToUse={dateToUse} />
        </Row>
      </Container>
    </>
  );
};
export default CalendarPage;
