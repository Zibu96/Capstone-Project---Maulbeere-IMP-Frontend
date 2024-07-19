import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const ReservationAside = () => {
  const res = useSelector((state) => state.reservation.reservation.content);

  const getTotalSeats = (reservations) => {
    return reservations.reduce((total, reserv) => total + reserv.seats, 0);
  };

  return (
    <Col sm={0} md={3} className="bgAll border rounded mb-3 ps-3">
      <div className="mt-4">
        <h4>Prenotati: {getTotalSeats(res)}/85</h4>
      </div>
    </Col>
  );
};
export default ReservationAside;
