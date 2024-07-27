import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchWaitStaffCommunicationAction,
  fetchWaitStaffToDoAction,
} from "../redux/actions/waitStaffAction";
import WaitStaffToDoWidget from "./WaitStaffToDoWidget";
import WaitStaffComunicationWidget from "./WaitStaffCommunicationWidget";

const WaitStaffWidget = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchWaitStaffToDoAction(token));
      dispatch(fetchWaitStaffCommunicationAction(token));
    }
  }, [dispatch, token]);
  return (
    <Col>
      <div className="border rounded p-2">
        <h4>Riepilogo Sala:</h4>
        <div className="d-sm-block d-lg-flex gap-2">
          <WaitStaffToDoWidget />
          <WaitStaffComunicationWidget />
        </div>
      </div>
    </Col>
  );
};
export default WaitStaffWidget;
