import { Button, Card, Col, Container, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IoIosFootball } from "react-icons/io";

import {
  fetchDeleteReservationAction,
  fetchReservationAction,
  fetchReservationTodayAction,
} from "../redux/actions/reservationAction";
import ReservationModal from "./ReservationModal";
import ReservationAside from "./ReservationAside";
import ModifyReservationModal from "./ModifyReservationModal";
import RedirectPage from "./RedirectPage";

const MyReservation = () => {
  const token = useSelector((state) => state?.user?.user_bearer?.accessToken);

  const today = useSelector((state) => state.reservation.today.content);

  const [modalShow, setModalShow] = useState(false);
  const [modalShowM, setModalShowM] = useState(false);
  const [reservation, setReservation] = useState([]);
  const [id, setId] = useState("");

  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
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
    setReservation(today);
  }, [today]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchReservationAction(token));
      dispatch(fetchReservationTodayAction(token));
    }
  }, [dispatch, token]);

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
      {!token ? (
        <RedirectPage />
      ) : (
        <>
          <MyNavbar />

          <Container className="text-white">
            <Row>
              <div className="d-flex justify-content-between my-3">
                <h1>Prenotazioni:</h1>

                <Button onClick={handleShow} className="rounded-pill">
                  Nuova Prenotazione
                </Button>
                <ReservationModal
                  modalShow={modalShow}
                  handleClose={handleClose}
                  setReservation={setReservation}
                />
                <ModifyReservationModal
                  modalShowM={modalShowM}
                  handleCloseM={handleCloseM}
                  id={id}
                  setReservation={setReservation}
                />
              </div>
              <Col sm={9}>
                <div className="p-2">
                  {reservation.length == 0 ? (
                    <h2 className="text-center mt-5">
                      Nessuna Prenotazione per oggi!
                    </h2>
                  ) : (
                    reservation.map((reserv) => (
                      <Card
                        key={reserv.id}
                        className="reservation-card mb-3"
                        style={{
                          backgroundColor: getBackgroundColor(
                            reserv.reservationType
                          ),
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
                                <Card.Text>
                                  Ore {getTime(reserv.time)}
                                </Card.Text>
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
                                onClick={() =>
                                  handleReservationDelete(reserv.id)
                                }
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
              <ReservationAside />
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default MyReservation;
