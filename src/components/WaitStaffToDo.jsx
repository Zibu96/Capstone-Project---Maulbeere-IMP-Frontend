import { Button, Col, Form, ListGroup } from "react-bootstrap";

const WaitStaffToDo = () => {
  return (
    <Col sm={12} lg={6} className="text-white mb-3">
      <div className="border rounded p-2">
        <h4>Da fare:</h4>

        <ListGroup>
          <ListGroup.Item className="bgAll rounded d-flex justify-content-between">
            Cras justo odio
            <Button className="waitstaff-btn p-0">
              <i className="bi bi-check-lg "></i>
            </Button>
          </ListGroup.Item>

          <Form className="mt-2 d-flex justify-content-between">
            <Form.Control
              size="md"
              type="text"
              placeholder="cosa c'è da fare?"
              className="form-text"
            />
            <Button type="sumbit">Invia</Button>
          </Form>
        </ListGroup>
      </div>
    </Col>
  );
};
export default WaitStaffToDo;
