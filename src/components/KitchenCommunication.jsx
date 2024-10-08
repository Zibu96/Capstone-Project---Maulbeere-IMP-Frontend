import { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeleteKitchenAction,
  fetchPostKitchenCommunicationAction,
} from "../redux/actions/kitchenAction";

const KitechenCommunication = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const communicationsDb = useSelector(
    (state) => state.kitchen.kitchen_communication.content
  );
  const [communications, setCommunications] = useState([]);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleKitchenCommunicationSubmit = (e) => {
    e.preventDefault();
    console.log("Creating new reservation");
    const newCommunication = {
      staffType: "CUCINA",
      actionType: "COMMUNICATION",
      text: text,
    };
    dispatch(fetchPostKitchenCommunicationAction(token, newCommunication));
    setCommunications((communicationsDb) => [
      ...communicationsDb,
      newCommunication,
    ]);

    alert("Comunicazione di cucina creata con successo");
  };

  useEffect(() => {
    if (communicationsDb) {
      setCommunications(communicationsDb);
    }
  }, [communicationsDb]);

  const handleDeleteKitchen = (deleteId) => {
    dispatch(fetchDeleteKitchenAction(token, deleteId));
    setCommunications((communicationsDb) =>
      communicationsDb.filter(
        (communications) => communications.id !== deleteId
      )
    );
  };
  return (
    <Col sm={12} lg={6} className="text-white mb-3">
      <div className="border rounded p-2">
        <h4>Comunicazioni:</h4>
        {communications.length == 0 ? (
          <div className="border rounded p-2 bgAll mb-2">
            <p className="p-2 m-0">Nessuna comunicazione</p>
          </div>
        ) : (
          communications.map((com) => (
            <div
              className="border rounded p-2 bgAll mb-2 d-flex justify-content-between align-items-center"
              key={com.id}
            >
              <p className=" m-0">{com.text}</p>
              <Button
                className="waitstaff-btn p-0"
                onClick={() => handleDeleteKitchen(com.id)}
              >
                <i className="bi bi-x-lg"></i>
              </Button>
            </div>
          ))
        )}

        <Form className="mt-2 " onSubmit={handleKitchenCommunicationSubmit}>
          <Form.Control
            as="textarea"
            rows={3}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="text-center mt-2">
            <Button type="sumbit">Invia</Button>
          </div>
        </Form>
      </div>
    </Col>
  );
};
export default KitechenCommunication;
