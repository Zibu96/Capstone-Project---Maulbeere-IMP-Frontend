import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchUserRegisterAction } from "../redux/actions/usersAction";
import StaffManagmentList from "./StaffManagmentList";
import MaulEe from "../assets/EE_white.svg";
import RedirectPage from "./RedirectPage";

const StaffManagment = () => {
  const token = useSelector((state) => state?.user?.user_bearer?.accessToken);
  const error = useSelector((state) => state.error?.register_error?.data);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

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
      role: role,
    };
    console.log(registerUser);
    dispatch(fetchUserRegisterAction(registerUser, token));
  };

  return (
    <>
      {!token ? (
        <RedirectPage />
      ) : (
        <>
          <MyNavbar />
          <Container className="text-white">
            <Row>
              <div className="d-flex justify-content-between my-3">
                <h1>Il tuo Staff:</h1>
                <img className="right-logo" src={MaulEe} alt="Alt logo" />
              </div>
              <Col sm={12} className="mb-3 ">
                <div className="border rounded p-2 bgAll">
                  <h3 className="mt-2">Aggiungi Nuovo Dipendente:</h3>
                  {error && <Alert variant="danger">{error.message}</Alert>}
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
                      <div>
                        <Form.Label>Ruolo</Form.Label>
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
                </div>
              </Col>
              <StaffManagmentList />
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
export default StaffManagment;
