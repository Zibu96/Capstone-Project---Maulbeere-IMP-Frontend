import { useEffect } from "react";
import { Col, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchReservationAction } from "../redux/actions/reservationAction";

const ResevationWidget = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const res = useSelector((state) => state.reservation.reservation.content);
  console.log(res);

  const getTotalSeats = (reservations) => {
    return reservations.reduce((total, reserv) => total + reserv.seats, 0);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchReservationAction(token));
    }
  }, [dispatch, token]);

  return (
    <Col xs={12} md={6} className="text-white mt-5 border rounded p-2">
      <ListGroup>
        <div className="d-flex justify-content-between">
          <h4>Prenotazioni: </h4>
          <h4>Posti: {getTotalSeats(res)}/85 </h4>
        </div>
        {!res ? (
          <ListGroup.Item className="text-white bgAll">
            Non ci sono prenotazioni per oggi
          </ListGroup.Item>
        ) : (
          res.map((reserv) => (
            <ListGroup.Item
              key={reserv.id}
              className="d-flex justify-content-between text-white bgAll p-1"
            >
              <p className="m-0">Nome: {reserv.name}</p>
              <p className="m-0">Posti: {reserv.seats}</p>
              <p className="m-0">Ore: {reserv.time}</p>
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </Col>
  );
};
export default ResevationWidget;
