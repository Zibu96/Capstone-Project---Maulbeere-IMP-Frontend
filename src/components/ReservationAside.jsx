import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const ReservationAside = () => {
  const res = useSelector((state) => state.reservation.today.content);
  const [reservations, setReservations] = useState(res);

  const getTotalSeats = (reservations) => {
    return reservations.reduce((total, reserv) => total + reserv.seats, 0);
  };

  useEffect(() => {
    setReservations(res);
  }, [res]);

  return (
    <Col sm={0} md={3} className="bgAll border rounded mb-3 ps-3">
      <div className="mt-4">
        <h4>Prenotati: {getTotalSeats(reservations)}/85</h4>
      </div>
    </Col>
  );
};
export default ReservationAside;
