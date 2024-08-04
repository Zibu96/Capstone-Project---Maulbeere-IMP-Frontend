import {
  fetchDeleteReservationAction,
  fetchReservationsByDateAction,
} from "../redux/actions/reservationAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoIosFootball } from "react-icons/io";
import { Button, Card, Col } from "react-bootstrap";
import ModifyReservationModal from "./ModifyReservationModal";

const CalendarReservation = ({ dateToUse }) => {
  const token = useSelector((state) => state?.user?.user_bearer?.accessToken);

  const resDate = useSelector((state) => state.reservation.reservation_by_date);
  console.log(resDate);
  console.log(dateToUse);
  const dispatch = useDispatch();
  const [modalShowM, setModalShowM] = useState(false);
  const [reservation, setReservation] = useState([]);
  const [id, setId] = useState("");
  const handleCloseM = () => setModalShowM(false);
  const handleShowM = () => setModalShowM(true);

  const getBackgroundColor = (reservationType) => {
    switch (reservationType) {
      case "THEFORK":
        return "#5a9342";
      case "DISH":
        return "#ec693b";
      default:
        return "#383a3f";
    }
  };

  const getIcon = (eventType) => {
    switch (eventType) {
      case "PARTITA":
        return <IoIosFootball />;
      case "FESTA":
        return <i className="bi bi-cake2"></i>;
      case "MUSICA":
        return <i className="bi bi-music-note-beamed"></i>;
      case "EVENTO":
        return <i className="bi bi-calendar-event"></i>;
      default:
        return;
    }
  };

  useEffect(() => {
    setReservation(resDate);
  }, [resDate]);

  useEffect(() => {
    if (token) {
      dispatch(fetchReservationsByDateAction(token, dateToUse));
    }
  }, [dispatch, token, dateToUse]);

  const handleReservationDelete = (deleteId) => {
    dispatch(fetchDeleteReservationAction(token, deleteId));
    setReservation((res) => res.filter((reserv) => reserv.id !== deleteId));
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
      <ModifyReservationModal
        modalShowM={modalShowM}
        handleCloseM={handleCloseM}
        id={id}
        setReservation={setReservation}
        setId={setId}
      />
      <Col sm={6}>
        <h3>Prenotazioni:</h3>
        <div className="p-2">
          {reservation.length == 0 ? (
            <h2 className="text-center mt-5">Nessuna Prenotazione per oggi!</h2>
          ) : (
            reservation.map((reserv) => (
              <Card
                key={reserv.id}
                className="reservation-card mb-3"
                style={{
                  backgroundColor: getBackgroundColor(reserv.reservationType),
                }}
              >
                <Card.Header as="h5">
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      {reserv.name} {reserv.surname}
                    </div>

                    <p>{getIcon(reserv.eventType)}</p>
                  </div>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Title>Tel. {reserv.telephone}</Card.Title>
                      <div className="d-flex gap-3">
                        <Card.Text>Ore {getTime(reserv.time)}</Card.Text>
                        <Card.Text>N° posti: {reserv.seats}</Card.Text>
                      </div>
                      <Card.Text>
                        Richieste speciali: {reserv.specialRequest}
                      </Card.Text>
                    </div>
                    <div>
                      <Button
                        className="m-1 rounded-pill"
                        onClick={() => {
                          setId(reserv.id);
                          handleShowM();
                        }}
                      >
                        <i className="bi bi-pencil"></i>
                      </Button>
                      <Button
                        className="m-1 rounded-pill"
                        variant="danger"
                        onClick={() => handleReservationDelete(reserv.id)}
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
      </Col>
    </>
  );
};
export default CalendarReservation;
