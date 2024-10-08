import { useEffect, useState } from "react";
import { Col, ListGroup, Placeholder } from "react-bootstrap";
import { useSelector } from "react-redux";

const WaitStaffToDoWidget = () => {
  const toDoesDb = useSelector(
    (state) => state.waitStaff.waitStaff_toDo.content
  );
  const [toDoes, setToDoes] = useState([]);

  useEffect(() => {
    if (toDoesDb) {
      setToDoes(toDoesDb);
    }
  }, [toDoesDb]);
  return (
    <Col sm={12} lg={6}>
      <div className="border rounded p-2 mb-2">
        <h4>Da fare:</h4>

        <ListGroup>
          {!toDoesDb ? (
            <>
              <Placeholder xs={12} size="lg" />
              <Placeholder xs={12} />
              <Placeholder xs={12} size="sm" />
              <Placeholder xs={12} size="xs" />
            </>
          ) : toDoes.length == 0 ? (
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
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </div>
    </Col>
  );
};
export default WaitStaffToDoWidget;
