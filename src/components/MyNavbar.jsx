import {
  Container,
  Dropdown,
  DropdownMenu,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import maulLogo from "../assets/Maulbeere_Logo_CMYK.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserMeAction } from "../redux/actions/usersAction";
import { useEffect } from "react";

const MyNavbar = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const me = useSelector((state) => state.user.state);

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchUserMeAction(token));
    }
  }, [dispatch, token]);
  return (
    <Navbar
      expand="lg"
      className="bgAll align-items-center"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={maulLogo} style={{ width: "70px" }} alt="Maulbeerelogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/home"}>
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to={"/prenotazioni"}>
              <Nav.Link href="#prenotazioni">Prenotazioni</Nav.Link>
            </Link>
            <Nav.Link href="#sala">Sala</Nav.Link>
            <Nav.Link href="#cucina">Cucina</Nav.Link>
            <Nav.Link href="#turni">Turni</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle
                className="d-flex  align-items-center p-0 textfor"
                id="dropdown-basic"
              >
                Ciao {me && me.name ? me.name : "Utente"}
              </Dropdown.Toggle>
              <DropdownMenu>
                <Link to={"/profilo"}>
                  <NavDropdown.Item href="#action/3.1">
                    Profilo
                  </NavDropdown.Item>
                </Link>
                <Link to={"/personale"}>
                  <NavDropdown.Item href="#action/3.2">
                    Gestione Staff
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <Link to={"/"}>
                  <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                </Link>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
