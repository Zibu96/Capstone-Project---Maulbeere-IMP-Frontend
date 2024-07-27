import { useEffect, useState } from "react";
import { Button, Col, Form, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeleteKitchenAction,
  fetchKitchenToDoAction,
  fetchPostKitchenToDoAction,
} from "../redux/actions/kitchenAction";

const KitchenToDo = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const toDoesDb = useSelector((state) => state.kitchen.kitchen_toDo.content);
  const [text, setText] = useState("");
  const [toDoes, setToDoes] = useState([]);
  const dispatch = useDispatch();
  console.log(toDoes);

  const handleKitchenToDoSubmit = (e) => {
    e.preventDefault();
    console.log("Creating new reservation");
    const newToDo = {
      staffType: "SALA",
      actionType: "TO_DO",
      text: text,
    };
    dispatch(fetchPostKitchenToDoAction(token, newToDo));
    setToDoes((toDoesDb) => [...toDoesDb, newToDo]);
    console.log(newToDo);
    alert("To Do di sala creata con successo");
  };

  useEffect(() => {
    if (token) {
      dispatch(fetchKitchenToDoAction(token));
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (toDoesDb) {
      setToDoes(toDoesDb);
    }
  }, [toDoesDb]);

  const handleDeleteKitchen = (deleteId) => {
    dispatch(fetchDeleteKitchenAction(token, deleteId));
    setToDoes((toDoesDb) => toDoesDb.filter((toDo) => toDo.id !== deleteId));
  };

  return (
    <Col sm={12} lg={6} className="text-white mb-3">
      <div className="border rounded p-2">
        <h4>Da fare:</h4>

        <ListGroup>
          {toDoes.length == 0 ? (
            <ListGroup.Item className="bgAll rounded d-flex justify-content-between">
              Niente da fare per oggi
            </ListGroup.Item>
          ) : (
            toDoes.map((toDo) => (
              <ListGroup.Item
                className="bgAll rounded d-flex justify-content-between border-top mb-2 p-2"
                key={toDo.id}
              >
                {toDo.text}
                <Button
                  className="waitstaff-btn p-0"
                  onClick={() => handleDeleteKitchen(toDo.id)}
                >
                  <i className="bi bi-check-lg "></i>
                </Button>
              </ListGroup.Item>
            ))
          )}
          <Form
            className="mt-2 d-flex justify-content-between"
            onSubmit={handleKitchenToDoSubmit}
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
export default KitchenToDo;
