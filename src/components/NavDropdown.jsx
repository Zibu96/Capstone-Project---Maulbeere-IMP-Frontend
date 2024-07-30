import { Dropdown, DropdownMenu, Nav, NavDropdown } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavDropDown = () => {
  const me = useSelector((state) => state.user.state);

  return (
    <Nav>
      <Dropdown className="d-lg-none ">
        <Dropdown.Toggle
          style={{
            background: "linear-gradient(to right, #fad200, #f6921e)",
          }}
          className="d-flex text-dark align-items-center p-2 textfor rounded-pill"
          id="dropdown-basic"
        >
          {me && me.name ? me.name : "Utente"}
        </Dropdown.Toggle>

        <DropdownMenu className="position-absolute">
          <Link to={"/profilo"}>
            <NavDropdown.Item href="#action/3.1">Profilo</NavDropdown.Item>
          </Link>
          <Link to={"/personale"}>
            <NavDropdown.Item href="#action/3.2">
              Gestione Staff
            </NavDropdown.Item>
          </Link>
          <Link to={"/liste"}>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </Link>
          <NavDropdown.Divider />
          <Link to={"/"}>
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </Link>
        </DropdownMenu>
      </Dropdown>
    </Nav>
  );
};
export default NavDropDown;
