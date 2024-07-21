import { Button, Col, Container, Form, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchUserRegisterAction } from "../redux/actions/usersAction";
import StaffManagmentList from "./StaffManagmentList";

const StaffManagment = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  console.log(token);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();

  const handleRegisterUserSubmit = (e) => {
    e.preventDefault();
    console.log("Creating new user");
    const registerUser = {
      name: name,
      surname: surname,
      username: username,
      email: email,
      password: password,
      role: role,
    };
    console.log(registerUser);
    dispatch(fetchUserRegisterAction(registerUser, token));
    alert("Dipendente creato con successo");
  };

  return (
    <>
      <MyNavbar />
      <Container className="text-white">
        <Row>
          <Col sm={12} className="bgAll border rounded mt-3">
            <h3 className="mt-2">Aggiungi Nuovo Dipendente:</h3>
            <Form onSubmit={handleRegisterUserSubmit}>
              <div className="d-flex gap-3">
                <div className="w-50">
                  <Form.Label>Nome:</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Nome"
                    required
                    className="mb-3"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="w-50">
                  <Form.Label>Cognome:</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Cognome"
                    required
                    className="mb-3"
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
              </div>
              <div className="d-flex gap-3">
                <div className="w-50">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Username"
                    required
                    className="mb-3"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="w-50">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    size="sm"
                    type="email"
                    placeholder="Email"
                    required
                    className="mb-3"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="d-flex gap-3">
                <div className="w-50">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    size="sm"
                    type="password"
                    placeholder="Password"
                    required
                    className="mb-3"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <Form.Label>Eventi</Form.Label>
                  <Form.Select
                    size="sm"
                    className="mb-3"
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option>Scegli Ruolo</option>
                    <option>SALA</option>
                    <option>CUCINA</option>
                    <option>GESTORE</option>
                    <option>DIRETTORE</option>
                  </Form.Select>
                </div>
              </div>
              <div className="w-100 text-center mb-3">
                <Button type="submit" className="rounded-pill">
                  Registra dipendente
                </Button>
              </div>
            </Form>
          </Col>
          <StaffManagmentList />
        </Row>
      </Container>
    </>
  );
};
export default StaffManagment;
