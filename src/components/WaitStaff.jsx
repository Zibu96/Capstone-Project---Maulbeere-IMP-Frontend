import { Alert, Container, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import WaitStaffToDo from "./WaitStaffToDo";
import WaitStaffComunication from "./WaitStaffComunication";
import WaitStaffShoppingList from "./WaitStaffShoppingList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchWaitStaffCommunicationAction,
  fetchWaitStaffShoppingListAction,
  fetchWaitStaffToDoAction,
} from "../redux/actions/waitStaffAction";
import MaulEe from "../assets/EE_white.svg";
import { Link } from "react-router-dom";
import RedirectPage from "./RedirectPage";

const WaitStaff = () => {
  const token = useSelector((state) => state?.user?.user_bearer?.accessToken);
  const toDoes = useSelector((state) => state.waitStaff);
  const me = useSelector((state) => state.user.state);
  console.log(toDoes);

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchWaitStaffToDoAction(token));
      dispatch(fetchWaitStaffCommunicationAction(token));
      dispatch(fetchWaitStaffShoppingListAction(token));
    }
  }, [dispatch, token]);

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
                <h1>Sala:</h1>
                <img className="right-logo" src={MaulEe} alt="Alt logo" />
              </div>
              {["SALA", "GESTORE", "ADMIN", "DIRETTORE"].includes(me.role) ? (
                <>
                  <WaitStaffToDo />
                  <WaitStaffComunication />
                  <WaitStaffShoppingList />
                </>
              ) : (
                <Alert variant="primary" className="">
                  Non hai accesso a questa pagina, torna alla
                  <Link to={"/home"}> home </Link>
                  per vedere un riepilogo delle comunicazioni.
                </Alert>
              )}
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
export default WaitStaff;
