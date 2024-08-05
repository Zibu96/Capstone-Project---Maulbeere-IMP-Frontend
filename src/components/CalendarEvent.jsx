import { useEffect, useState } from "react";
import { Button, Card, Col, Placeholder } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeleteEventAction,
  fetchEventByDateAction,
} from "../redux/actions/eventAction";

const CalendarEvent = ({ dateToUse }) => {
  const token = useSelector((state) => state?.user?.user_bearer?.accessToken);
  const eventDate = useSelector((state) => state.event?.event_by_date);
  console.log(eventDate);
  console.log(dateToUse);
  const dispatch = useDispatch();

  const [event, setEvent] = useState([]);
  const [id, setId] = useState("");

  const getBackgroundColor = (eventType) => {
    switch (eventType) {
      case "PARTITA":
        return "#a5c10b";
      case "FESTA":
        return "#401654";
      case "MUSICA":
        return "#e545a0";
      case "EVENTO":
        return "#6ab4fe";
      default:
        return;
    }
  };

  useEffect(() => {
    setEvent(eventDate);
  }, [eventDate]);

  console.log(event);

  useEffect(() => {
    if (token) {
      dispatch(fetchEventByDateAction(token, dateToUse));
    }
  }, [dispatch, token, dateToUse]);

  const handleReservationDelete = (deleteId) => {
    dispatch(fetchDeleteEventAction(token, deleteId));
    setEvent((res) => res.filter((reserv) => reserv.id !== deleteId));
  };

  const getTime = (time) => {
    const [hours, minutes] = time.split(":");
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date.toTimeString().slice(0, 5);
  };

  return (
    <>
      {/* <ModifyReservationModal
        modalShowM={modalShowM}
        handleCloseM={handleCloseM}
        id={id}
        setReservation={setReservation}
        setId={setId}
      /> */}
      <Col className=" d-lg-block d-none">
        <h3>Eventi:</h3>
        {!eventDate ? (
          <>
            <Placeholder xs={12} size="lg" />
            <Placeholder xs={12} />
            <Placeholder xs={12} size="sm" />
            <Placeholder xs={12} size="xs" />
          </>
        ) : (
          <div className="p-2">
            {event.length == 0 ? (
              <h2 className="text-center mt-5">Nessun evento oggi!</h2>
            ) : (
              event.map((ev) => (
                <Card
                  key={ev.id}
                  className="reservation-card mb-3"
                  style={{
                    backgroundColor: getBackgroundColor(ev.eventType),
                  }}
                >
                  <Card.Header as="h5">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>{ev.name}</div>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <Card.Title>{ev.description}</Card.Title>
                        <div className="d-flex gap-3">
                          <Card.Text>Ore {getTime(ev.time)}</Card.Text>
                        </div>
                      </div>
                      <div>
                        <Button
                          className="m-1 rounded-pill"
                          onClick={() => {
                            setId(ev.id);
                          }}
                        >
                          <i className="bi bi-pencil"></i>
                        </Button>
                        <Button
                          className="m-1 rounded-pill"
                          variant="danger"
                          onClick={() => handleReservationDelete(ev.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))
            )}
          </div>
        )}
      </Col>
    </>
  );
};
export default CalendarEvent;
