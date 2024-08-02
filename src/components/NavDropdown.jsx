import {
  Dropdown,
  DropdownMenu,
  Nav,
  NavDropdown,
  Placeholder,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutAction } from "../redux/actions/usersAction";

const NavDropDown = () => {
  const me = useSelector((state) => state.user.state);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOutAction());
  };
  return (
    <Nav>
      {!me ? (
        <>
          <Placeholder xs={12} size="lg" />
          <Placeholder xs={12} />
          <Placeholder xs={12} size="sm" />
          <Placeholder xs={12} size="xs" />
        </>
      ) : (
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
            {["GESTORE", "ADMIN"].includes(me.role) ? (
              <>
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
              </>
            ) : (
              <></>
            )}
            <NavDropdown.Divider />
            <Link to={"/"} onClick={handleLogOut}>
              <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
            </Link>
          </DropdownMenu>
        </Dropdown>
      )}
    </Nav>
  );
};
export default NavDropDown;
