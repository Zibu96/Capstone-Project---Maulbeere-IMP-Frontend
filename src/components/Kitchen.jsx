import { Container, Row } from "react-bootstrap";
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

const Kitchen = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
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
          </div>
          <KitchenToDo />
          <KitechenCommunication />
          <KitchenShoppingList />
        </Row>
      </Container>
    </>
  );
};
export default Kitchen;
