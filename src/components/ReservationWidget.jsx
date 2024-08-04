import { useEffect, useState } from "react";
import { Col, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchReservationAction,
  fetchReservationTodayAction,
} from "../redux/actions/reservationAction";

const ResevationWidget = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const res = useSelector((state) => state.reservation.today.content);
  console.log(res);
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    if (res) {
      setReservation(res);
    }
  }, [res]);

  const getTotalSeats = (reservations) => {
    if (!Array.isArray(reservations)) {
      return 0;
    }
    return reservations.reduce((total, reserv) => total + reserv.seats, 0);
  };

  const getTime = (time) => {
    const [hours, minutes] = time.split(":");
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date.toTimeString().slice(0, 5);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchReservationTodayAction(token));
      dispatch(fetchReservationAction(token));
    }
  }, [dispatch, token]);

  return (
    <Col xs={12} md={6} className="text-white">
      <div className="border rounded p-2 mb-3 bg-home">
        <ListGroup>
          <div className="d-flex justify-content-between">
            <h4>Prenotazioni: </h4>
            <h4>Posti: {getTotalSeats(res)}/85 </h4>
          </div>
          {reservation.length == 0 ? (
            <ListGroup.Item className="text-white bgAll">
              Non ci sono prenotazioni per oggi
            </ListGroup.Item>
          ) : (
            reservation.map((reserv) => (
              <ListGroup.Item
                key={reserv.id}
                className="d-flex justify-content-between text-white bgAll p-1"
              >
                <p className="m-0 widget">Nome: {reserv.name}</p>
                <p className="m-0 widget text-center">Posti: {reserv.seats}</p>
                <p className="m-0 widget text-end">{getTime(reserv.time)}</p>
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </div>
    </Col>
  );
};
export default ResevationWidget;
