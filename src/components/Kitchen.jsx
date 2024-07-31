import { Alert, Container, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import KitchenToDo from "./KitchenToDo";
import KitechenCommunication from "./KitchenCommunication";
import KitchenShoppingList from "./KitchenShoppingList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchKitchenCommunicationAction,
  fetchKitchenToDoAction,
  fetchShoppingListAction,
} from "../redux/actions/kitchenAction";
import MaulEe from "../assets/EE_white.svg";
import { Link } from "react-router-dom";

const Kitchen = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const me = useSelector((state) => state.user.state);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchKitchenToDoAction(token));
      dispatch(fetchKitchenCommunicationAction(token));
      dispatch(fetchShoppingListAction(token));
    }
  }, [dispatch, token]);
  return (
    <>
      <MyNavbar />
      <Container className="text-white">
        <Row>
          <div className="d-flex justify-content-between my-3">
            <h1>Cucina:</h1>
            <img className="right-logo" src={MaulEe} alt="Alt logo" />
          </div>
          {["CUCINA", "GESTORE", "ADMIN"].includes(me.role) ? (
            <>
              <KitchenToDo />
              <KitechenCommunication />
              <KitchenShoppingList />
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
  );
};
export default Kitchen;
