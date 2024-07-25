import { useEffect, useState } from "react";
import { Button, Col, Form, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeleteWaitStaffAction,
  fetchPostWaitStaffToDoAction,
} from "../redux/actions/waitStaffAction";

const WaitStaffToDo = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const toDoes = useSelector((state) => state.waitStaff.waitStaff_toDo.content);
  console.log("toDoes" + toDoes);
  const [text, setText] = useState("");
  const [waitStaff, setWaitStaff] = useState("");
  const dispatch = useDispatch();

  const handleWaitStaffToDoSubmit = (e) => {
    e.preventDefault();
    console.log("Creating new reservation");
    const newToDo = {
      staffType: "SALA",
      actionType: "TO_DO",
      text: text,
    };
    dispatch(fetchPostWaitStaffToDoAction(token, newToDo));
    console.log(newToDo);
    alert("To Do di sala creata con successo");
  };

  const handleDeleteWaitStaff = (deleteId) => {
    dispatch(fetchDeleteWaitStaffAction(token, deleteId));
  };
  return (
    <Col sm={12} lg={6} className="text-white mb-3">
      <div className="border rounded p-2">
        <h4>Da fare:</h4>

        <ListGroup>
          {toDoes.length === 0 ? (
            <ListGroup.Item className="bgAll rounded d-flex justify-content-between">
              Niente da fare per oggi
            </ListGroup.Item>
          ) : (
            toDoes.map((toDo) => (
              <ListGroup.Item
                className="bgAll rounded d-flex justify-content-between"
                key={toDo.id}
              >
                {toDo.text}
                <Button
                  className="waitstaff-btn p-0"
                  onClick={() => handleDeleteWaitStaff(toDo.id)}
                >
                  <i className="bi bi-check-lg "></i>
                </Button>
              </ListGroup.Item>
            ))
          )}
          <Form
            className="mt-2 d-flex justify-content-between"
            onSubmit={handleWaitStaffToDoSubmit}
          >
            <Form.Control
              size="md"
              type="text"
              placeholder="cosa c'è da fare?"
              className="form-text"
              onChange={(e) => setText(e.target.value)}
            />
            <Button type="sumbit">Invia</Button>
          </Form>
        </ListGroup>
      </div>
    </Col>
  );
};
export default WaitStaffToDo;
