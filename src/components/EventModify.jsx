/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPutEventsAction,
  fetchSingleEventAction,
} from "../redux/actions/eventAction";

const EventModify = ({ modalShowM, handleCloseM, id }) => {
  const token = useSelector((state) => state.user.user_bearer?.accessToken);
  const error = useSelector((state) => state.error?.event_error?.data.message);
  const event = useSelector((state) => state.event?.event_single);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [eventType, setEventType] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && id) {
      dispatch(fetchSingleEventAction(token, id));
    }
  }, [dispatch, token, id]);

  useEffect(() => {
    if (event) {
      setName(event.name || "");
      setDate(event.date || "");
      setTime(event.time || "");
      setEventType(event.eventType || null);
    }
  }, [event]);

  const handleEventSubmit = (e) => {
    e.preventDefault();

    const modEvent = {
      name: `${name}`,
      description: description,
      date: `${date}`,
      time: `${time}`,
      eventType: eventType,
    };
    dispatch(fetchPutEventsAction(token, modEvent, id, handleCloseM));
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
              L'evento non è stato inserito correttamente: {error}
            </Alert>
          )}
          <Form.Group>
            <Form.Label className="m-0">Nome*</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Nome"
              value={name}
              required
              className="mb-3"
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Label className="m-0">Descrizione</Form.Label>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Descrizione"
              value={description}
              className="mb-3"
              onChange={(e) => setDescription(e.target.value)}
            />
            <Form.Label className="m-0">Data*</Form.Label>
            <Form.Control
              size="sm"
              type="date"
              value={date}
              placeholder="Data"
              required
              className="mb-3"
              onChange={(e) => setDate(e.target.value)}
            />
            <Form.Label className="m-0">Ora*</Form.Label>
            <Form.Control
              size="sm"
              type="time"
              value={time}
              placeholder="Ora"
              required
              className="mb-3"
              onChange={(e) => setTime(e.target.value)}
            />
            <Form.Label className="m-0">Eventi</Form.Label>
            <Form.Select
              size="sm"
              className="mb-3"
              value={eventType}
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
