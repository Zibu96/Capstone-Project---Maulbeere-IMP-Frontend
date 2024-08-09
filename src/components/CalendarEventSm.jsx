import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeleteEventAction,
  fetchEventByDateAction,
} from "../redux/actions/eventAction";
import { Button, Col, Dropdown, Placeholder } from "react-bootstrap";
import EventModify from "./EventModify";

const CalendaEventSm = ({ dateToUse }) => {
  const token = useSelector((state) => state?.user?.user_bearer?.accessToken);
  const eventDate = useSelector((state) => state.event?.event_by_date);

  const dispatch = useDispatch();

  const [event, setEvent] = useState([]);
  const [id, setId] = useState("");
  const [modalShowM, setModalShowM] = useState(false);
  const handleCloseM = () => setModalShowM(false);
  const handleShowM = () => setModalShowM(true);

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

  useEffect(() => {
    if (token && dateToUse) {
      dispatch(fetchEventByDateAction(token, dateToUse));
    }
  }, [dispatch, token, dateToUse]);

  const handleEventDelete = (deleteId) => {
    dispatch(fetchDeleteEventAction(token, deleteId));
    setEvent((event) => event.filter((ev) => ev.id !== deleteId));
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
      <EventModify
        modalShowM={modalShowM}
        handleCloseM={handleCloseM}
        id={id}
        setEvent={setEvent}
      />
      <Col className="d-lg-none">
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
              <h2 className="text-center mt-2">Nessun evento oggi!</h2>
            ) : (
              event.map((ev) => (
                <Dropdown key={ev.id} className="mb-2">
                  <Dropdown.Toggle
                    style={{
                      backgroundColor: getBackgroundColor(ev.eventType),
                    }}
                    className="w-100 border-0"
                  >
                    {ev.name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    style={{
                      backgroundColor: getBackgroundColor(ev.eventType),
                    }}
                    className="text-white w-100 p-2"
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        {ev.description}
                        <div className="d-flex gap-3">{getTime(ev.time)}</div>
                      </div>
                      <div>
                        <Button
                          className="m-1 rounded-pill"
                          onClick={() => {
                            setId(ev.id);
                            handleShowM();
                          }}
                        >
                          <i className="bi bi-pencil"></i>
                        </Button>
                        <Button
                          className="m-1 rounded-pill"
                          variant="danger"
                          onClick={() => handleEventDelete(ev.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </Button>
                      </div>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              ))
            )}
          </div>
        )}
      </Col>
    </>
  );
};
export default CalendaEventSm;
