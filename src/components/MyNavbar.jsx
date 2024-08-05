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
import { fetchUserMeAction, logOutAction } from "../redux/actions/usersAction";
import { useEffect } from "react";
import NavDropDown from "./NavDropdown";

const MyNavbar = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const me = useSelector((state) => state.user.state);

  const handleLogOut = () => {
    dispatch(logOutAction());
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchUserMeAction(token));
    }
  }, [dispatch, token]);
  return (
    <Navbar
      expand="lg"
      className="bgAll align-item-center"
      data-bs-theme="dark"
    >
      <Container className="align-item-center">
        <Link to={"/home"}>
          <Navbar.Brand href="#home">
            <img src={maulLogo} style={{ width: "70px" }} alt="Maulbeerelogo" />
          </Navbar.Brand>
        </Link>
        <NavDropDown />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/home"}>
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link to={"/prenotazioni"}>
              <Nav.Link href="#prenotazioni">Prenotazioni</Nav.Link>
            </Link>
            <Link to={"/sala"}>
              <Nav.Link href="#sala">Sala</Nav.Link>
            </Link>
            <Link to={"/cucina"}>
              <Nav.Link href="#cucina">Cucina</Nav.Link>
            </Link>
            <Link to={"/turni"}>
              <Nav.Link href="#turni">Turni</Nav.Link>
            </Link>
            <Link to={"/calendario"}>
              <Nav.Link href="#calendario">Calendario</Nav.Link>
            </Link>
          </Nav>
          <Nav className="ms-auto me-5  d-none d-lg-block">
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  background: "linear-gradient(to right, #fad200, #f6921e)",
                }}
                className="d-flex align-items-center text-dark p-2 textfor rounded-pill toggle-nav"
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
                <Link to={"/liste"}>
                  <NavDropdown.Item href="#action/3.3">
                    Riepilogo Liste
                  </NavDropdown.Item>
                </Link>
                <NavDropdown.Divider />
                <Link to={"/"} onClick={handleLogOut}>
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
