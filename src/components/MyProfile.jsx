import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserModifyEmailAction,
  fetchUserModifyPasswordAction,
} from "../redux/actions/usersAction";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MyProfile = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const me = useSelector((state) => state.user.state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleModifyPasswordSubmit = (e) => {
    e.preventDefault();
    console.log("Modifing password");
    const modPassword = {
      password: password,
    };

    dispatch(fetchUserModifyPasswordAction(token, navigate, modPassword));
  };
  const handleModifyEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Modifing email");
    const modEmail = {
      email: email,
    };
    console.log(email);
    dispatch(fetchUserModifyEmailAction(token, navigate, modEmail));
  };

  return (
    <>
      <MyNavbar />
      <Container className="text-white">
        <Row className="my-3 gap-2">
          <h1>
            Ciao, {me.name} {me.surname}
          </h1>
          <Col lg={1} className="d-sm-none d-md-block"></Col>
          <Col sm={12} lg={5} className="border p-2 rounded">
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
          <Col sm={12} lg={5} className="border p-2 rounded">
            <h4>Modifica:</h4>
            <Form onSubmit={handleModifyEmailSubmit}>
              <Form.Label>Email:</Form.Label>
              <div className="d-flex justify-content-between">
                <Form.Control
                  className="form-text"
                  placeholder={me.email}
                  type="email"
                  aria-describedby="passwordHelpBlock"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit">
                  <i className="bi bi-pencil"></i>
                </Button>
              </div>
            </Form>
            <Form onSubmit={handleModifyPasswordSubmit}>
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
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">
                  <i className="bi bi-pencil"></i>
                </Button>
              </div>
            </Form>
            <Form.Text id="passwordHelpBlock" className="text-white">
              Ricorda di modificare la password al primo accesso
            </Form.Text>
          </Col>
          <Col lg={1} className="d-sm-none d-md-block"></Col>
        </Row>
      </Container>
    </>
  );
};
export default MyProfile;
