import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchKitchenCommunicationAction,
  fetchKitchenToDoAction,
} from "../redux/actions/kitchenAction";
import { Col } from "react-bootstrap";
import KitchenWidgetToDo from "./KitchenWidgetToDo";
import KitchenWidgetCommunication from "./KitchenWidgetCommunication";

const KitchenWidget = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchKitchenToDoAction(token));
      dispatch(fetchKitchenCommunicationAction(token));
    }
  }, [dispatch, token]);
  return (
    <Col>
      <div className="border rounded p-2">
        <h4>Riepilogo Cucina:</h4>
        <div className="d-sm-block d-lg-flex gap-2">
          <KitchenWidgetToDo />
          <KitchenWidgetCommunication />
        </div>
      </div>
    </Col>
  );
};
export default KitchenWidget;
