import { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostReservationAction } from "../redux/actions/reservationAction";

const ReservationModal = ({ modalShow, handleClose, setReservation }) => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const me = useSelector((state) => state.user.state);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState(null);
  const [seats, setSeats] = useState(0);
  const [telephone, setTelephone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [specialRequest, setSpecialRequest] = useState(null);
  const [eventType, setEventType] = useState(null);
  const [reservationType, setReservationType] = useState(null);
  const dispatch = useDispatch();

  console.log(token);

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    console.log("Creating new reservation");
    const newReservation = {
      name: `${name}`,
      surname: surname,
      seats: `${seats}`,
      telephone: `${telephone}`,
      date: `${date}`,
      time: `${time}`,
      specialRequest: specialRequest,
      eventType: eventType,
      reservationType: reservationType,
      user: `${me.id}`,
    };

    dispatch(fetchPostReservationAction(token, newReservation));
    setReservation((res) => [...res, newReservation]);
    console.log(newReservation);
    handleClose();
  };

  return (
    <Modal
      show={modalShow}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bgAll">
        <Modal.Title>Nuova Prenotazione</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleReservationSubmit} className="bgAll">
        <Modal.Body>
          <p>ATTENZIONE! - I campi che contengono * sono OBBLIGATORI</p>

          <Form.Group>
            <Form.Label className="m-0">Nome*</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Nome"
              required
              className="mb-3"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label className="m-0">Cognome</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Cognome"
              className="mb-3"
              onChange={(e) => setSurname(e.target.value)}
            />
            <Form.Label className="m-0">Posti*</Form.Label>
            <Form.Control
              size="sm"
              type="number"
              placeholder="Posti"
              required
              className="mb-3"
              onChange={(e) => setSeats(e.target.value)}
            />
            <Form.Label className="m-0">Telefono*</Form.Label>
            <Form.Control
              size="sm"
              type="tel"
              placeholder="Telefono"
              required
              className="mb-3"
              onChange={(e) => setTelephone(e.target.value)}
            />
            <Form.Label className="m-0">Data*</Form.Label>
            <Form.Control
              size="sm"
              type="date"
              placeholder="Data"
              required
              className="mb-3"
              onChange={(e) => setDate(e.target.value)}
            />
            <Form.Label className="m-0">Ora*</Form.Label>
            <Form.Control
              size="sm"
              type="time"
              placeholder="Ora"
              required
              className="mb-3"
              onChange={(e) => setTime(e.target.value)}
            />
            <Form.Label className="m-0">Richieste Speciali</Form.Label>
            <Form.Control
              size="sm"
              as="textarea"
              rows={2}
              placeholder="Richieste speciali"
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
            Invia prenotazione
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
export default ReservationModal;
