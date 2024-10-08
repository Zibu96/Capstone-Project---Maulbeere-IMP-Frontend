import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const ReservationAside = () => {
  const res = useSelector((state) => state.reservation.today.content);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    if (res) {
      setReservations(res);
    }
  }, [res]);

  const getTotalSeats = (reservations) => {
    return reservations.reduce((total, reserv) => total + reserv.seats, 0);
  };

  return (
    <Col sm={0} md={3} className="mb-2 ps-3">
      <div className="mt-sm-0 mt-lg-2 border rounded p-2 bgAll">
        <h4>Prenotati: {getTotalSeats(reservations)}/85</h4>
      </div>
    </Col>
  );
};
export default ReservationAside;
