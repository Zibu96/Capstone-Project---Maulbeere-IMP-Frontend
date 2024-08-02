import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchKitchenCommunicationAction,
  fetchKitchenToDoAction,
} from "../redux/actions/kitchenAction";
import { Col, Placeholder } from "react-bootstrap";
import KitchenWidgetToDo from "./KitchenWidgetToDo";
import KitchenWidgetCommunication from "./KitchenWidgetCommunication";

const KitchenWidget = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const me = useSelector((state) => state.user?.state);

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
        {!me ? (
          <>
            <Placeholder xs={12} size="lg" />
            <Placeholder xs={12} />
            <Placeholder xs={12} size="sm" />
            <Placeholder xs={12} size="xs" />
          </>
        ) : (
          <div className="d-sm-block d-lg-flex gap-2">
            {["CUCINA", "GESTORE", "ADMIN"].includes(me.role) ? (
              <KitchenWidgetToDo />
            ) : (
              <></>
            )}
            <KitchenWidgetCommunication />
          </div>
        )}
      </div>
    </Col>
  );
};
export default KitchenWidget;
