import { Button, Card, Col } from "react-bootstrap";

const StaffManagmentList = () => {
  return (
    <Col>
      <h3>Lista Dipendenti:</h3>
      <Card className="bgAll">
        <Card.Body className="d-flex justify-content-between">
          {}
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="danger rounded-pill align-items-center">
            <i className="bi bi-trash"></i>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default StaffManagmentList;
