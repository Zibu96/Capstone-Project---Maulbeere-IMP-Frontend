import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const me = useSelector((state) => state.user.state);

  return (
    <>
      <MyNavbar />
      <Container className="text-white">
        <Row className="my-3">
          <h1>
            Ciao, {me.name} {me.surname}
          </h1>
          <Col lg={1}></Col>
          <Col lg={5} className="border p-2 rounded">
            <ListGroup>
              <h4>Info Personali:</h4>
              <ListGroup.Item className="bgAll">Nome: {me.name}</ListGroup.Item>
              <ListGroup.Item className="bgAll">
                Cognome: {me.surname}
              </ListGroup.Item>
              <ListGroup.Item className="bgAll">
                Username: {me.username}
              </ListGroup.Item>
              <ListGroup.Item className="bgAll">
                Email: {me.email}
              </ListGroup.Item>
              <ListGroup.Item className="bgAll">
                Ruolo: {me.role}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={5} className="border p-2 rounded">
            <h4>Modifica:</h4>
            <Form.Label>Email:</Form.Label>
            <div className="d-flex justify-content-between">
              <Form.Control
                className="form-text"
                placeholder={me.email}
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
              <Button>
                <i className="bi bi-pencil"></i>
              </Button>
            </div>
            <Form.Label htmlFor="inputPassword5" className="mt-3">
              Password:
            </Form.Label>
            <div className="d-flex justify-content-between">
              <Form.Control
                className="form-text"
                placeholder="Modifica Password"
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
              />
              <Button>
                <i className="bi bi-pencil"></i>
              </Button>
            </div>
            <Form.Text id="passwordHelpBlock" className="text-white">
              Ricorda di modificare la password al primo accesso
            </Form.Text>
          </Col>
          <Col lg={1}></Col>
        </Row>
      </Container>
    </>
  );
};
export default MyProfile;
