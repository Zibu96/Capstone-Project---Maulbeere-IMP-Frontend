import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPutReservationAction,
  fetchSingleReservationAction,
} from "../redux/actions/reservationAction";

const ModifyReservationModal = ({
  modalShowM,
  handleCloseM,
  setReservation,
  id,
}) => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const me = useSelector((state) => state.user.state);
  const res = useSelector((state) => state.reservation.reservation_single);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [seats, setSeats] = useState(0);
  const [telephone, setTelephone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");
  const [eventType, setEventType] = useState("");
  const [reservationType, setReservationType] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && id) {
      console.log("Fetching reservation for ID:", id);
      dispatch(fetchSingleReservationAction(token, id));
    }
  }, [dispatch, token, id]);

  console.log(id);
  useEffect(() => {
    if (res) {
      console.log("Updating state with reservation data:", res);
      setName(res.name || "");
      setSurname(res.surname || "");
      setSeats(res.seats || 0);
      setTelephone(res.telephone || "");
      setDate(res.date || "");
      setTime(res.time || "");
      setSpecialRequest(res.specialRequest || "");
      setEventType(res.eventType || null);
      setReservationType(res.reservationType || null);
    }
  }, [res]);

  const handleModReservationSubmit = (e) => {
    e.preventDefault();
    const modReservation = {
      name,
      surname,
      seats,
      telephone,
      date,
      time,
      specialRequest,
      eventType,
      reservationType,
      user: me.id,
    };
    dispatch(fetchPutReservationAction(token, modReservation, id));
    setReservation((res) =>
      res.map((reserv) => (reserv.id === id ? modReservation : reserv))
    );
    alert("Prenotazione modificata con successo");
    handleCloseM();
  };

  return (
    <Modal
      show={modalShowM}
      onHide={handleCloseM}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bgAll">
        <Modal.Title>Modifica Prenotazione</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleModReservationSubmit} className="bgAll">
        <Modal.Body>
          <p>ATTENZIONE! - I campi che contengono * sono OBBLIGATORI</p>
          <Form.Group>
            <Form.Label className="m-0">Nome*</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              value={name}
              required
              className="mb-3"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label className="m-0">Cognome</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              value={surname}
              className="mb-3"
              onChange={(e) => setSurname(e.target.value)}
            />
            <Form.Label className="m-0">Posti*</Form.Label>
            <Form.Control
              size="sm"
              type="number"
              value={seats}
              required
              className="mb-3"
              onChange={(e) => setSeats(e.target.value)}
            />
            <Form.Label className="m-0">Telefono*</Form.Label>
            <Form.Control
              size="sm"
              type="tel"
              value={telephone}
              required
              className="mb-3"
              onChange={(e) => setTelephone(e.target.value)}
            />
            <Form.Label className="m-0">Data*</Form.Label>
            <Form.Control
              size="sm"
              type="date"
              value={date}
              required
              className="mb-3"
              onChange={(e) => setDate(e.target.value)}
            />
            <Form.Label className="m-0">Ora*</Form.Label>
            <Form.Control
              size="sm"
              type="time"
              value={time}
              required
              className="mb-3"
              onChange={(e) => setTime(e.target.value)}
            />
            <Form.Label className="m-0">Richieste speciali</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              value={specialRequest}
              className="mb-3"
              onChange={(e) => setSpecialRequest(e.target.value)}
            />
            <Form.Label className="m-0">Eventi</Form.Label>
            <Form.Select
              size="sm"
              className="mb-3"
              onChange={(e) => setEventType(e.target.value)}
            >
              <option>Nessun evento</option>
              <option>PARTITA</option>
              <option>FESTA</option>
              <option>MUSICA</option>
              <option>EVENTO</option>
            </Form.Select>

            <Form.Check
              inline
              label="THEFORK"
              name="THEFORK"
              type="checkbox"
              onChange={(e) => setReservationType(e.target.name)}
            />
            <Form.Check
              inline
              label="DISH"
              name="DISH"
              type="checkbox"
              onChange={(e) => setReservationType(e.target.name)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Modifica Prenotazione
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
export default ModifyReservationModal;
