import { Col, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const WaitStaffToDoWidget = () => {
  const toDoes = useSelector((state) => state.waitStaff.waitStaff_toDo.content);
  console.log(toDoes);

  return (
    <Col sm={12} lg={6}>
      <div className="border rounded p-2 mb-2">
        <h4>Da fare:</h4>

        <ListGroup>
          {!toDoes ? (
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
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </div>
    </Col>
  );
};
export default WaitStaffToDoWidget;
