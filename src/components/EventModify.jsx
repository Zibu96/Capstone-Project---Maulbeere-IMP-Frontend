import { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchPutEventsAction } from "../redux/actions/eventAction";

const EventModify = ({ modalShowM, handleCloseM, id, setEvent }) => {
  const token = useSelector((state) => state.user.user_bearer?.accessToken);
  const error = useSelector((state) => state.error?.event_error?.data.message);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [eventType, setEventType] = useState(null);
  const dispatch = useDispatch();

  const handleEventSubmit = (e) => {
    e.preventDefault();
    console.log("Creating new event");
    const modEvent = {
      name: `${name}`,
      description: description,
      date: `${date}`,
      time: `${time}`,
      eventType: eventType,
    };
    dispatch(fetchPutEventsAction(token, modEvent, handleCloseM));
    console.log(modEvent);
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
        <Modal.Title>Nuovo Evento</Modal.Title>
      </Modal.Header>
      <Form className="bgAll" onSubmit={handleEventSubmit}>
        <Modal.Body>
          <p>ATTENZIONE! - I campi che contengono * sono OBBLIGATORI</p>
          {error && (
            <Alert variant="danger">
              La prenotazione non è stata inserita correttamente: {error}
            </Alert>
          )}
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
            <Form.Label className="m-0">Descrizione</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Descrizione"
              className="mb-3"
              onChange={(e) => setDescription(e.target.value)}
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
            <Form.Label className="m-0">Eventi</Form.Label>
            <Form.Select
              size="sm"
              className="mb-3"
              onChange={(e) => setEventType(e.target.value)}
              required
            >
              <option>Nessun evento</option>
              <option>PARTITA</option>
              <option>FESTA</option>
              <option>MUSICA</option>
              <option>EVENTO</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            Modifica evento
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
export default EventModify;
