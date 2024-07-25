import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeleteWaitStaffAction,
  fetchPostWaitStaffCommunicationAction,
} from "../redux/actions/waitStaffAction";

const WaitStaffComunication = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const communications = useSelector(
    (state) => state.waitStaff.waitStaff_communication.content
  );
  console.log(communications);

  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleWaitStaffCommunicationSubmit = (e) => {
    e.preventDefault();
    console.log("Creating new reservation");
    const newCommunication = {
      staffType: "SALA",
      actionType: "COMMUNICATION",
      text: text,
    };
    dispatch(fetchPostWaitStaffCommunicationAction(token, newCommunication));

    console.log(newCommunication);
    alert("Comunicazione di sala creata con successo");
  };

  const handleDeleteWaitStaff = (deleteId) => {
    dispatch(fetchDeleteWaitStaffAction(token, deleteId));
  };

  return (
    <Col sm={12} lg={6} className="text-white mb-3">
      <div className="border rounded p-2">
        <h4>Comunicazioni:</h4>
        {!communications ? (
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
                onClick={() => handleDeleteWaitStaff(com.id)}
              >
                <i className="bi bi-x-lg"></i>
              </Button>
            </div>
          ))
        )}

        <Form className="mt-2 " onSubmit={handleWaitStaffCommunicationSubmit}>
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
export default WaitStaffComunication;
