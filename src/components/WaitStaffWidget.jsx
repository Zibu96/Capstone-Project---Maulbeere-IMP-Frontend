import { useEffect } from "react";
import { Col, Placeholder } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchWaitStaffCommunicationAction,
  fetchWaitStaffToDoAction,
} from "../redux/actions/waitStaffAction";
import WaitStaffToDoWidget from "./WaitStaffToDoWidget";
import WaitStaffComunicationWidget from "./WaitStaffCommunicationWidget";

const WaitStaffWidget = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const me = useSelector((state) => state.user?.state);

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchWaitStaffToDoAction(token));
      dispatch(fetchWaitStaffCommunicationAction(token));
    }
  }, [dispatch, token]);
  return (
    <Col>
      <div className="border rounded p-2 mb-3">
        <h4>Riepilogo Sala:</h4>
        {!me ? (
          <>
            <Placeholder xs={12} size="lg" />
            <Placeholder xs={12} />
            <Placeholder xs={12} size="sm" />
            <Placeholder xs={12} size="xs" />
          </>
        ) : (
          <div className="d-sm-block d-lg-flex gap-2">
            {["SALA", "GESTORE", "ADMIN"].includes(me.role) ? (
              <WaitStaffToDoWidget />
            ) : (
              <></>
            )}
            <WaitStaffComunicationWidget />
          </div>
        )}
      </div>
    </Col>
  );
};
export default WaitStaffWidget;
