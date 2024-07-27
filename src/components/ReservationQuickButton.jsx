import { useState } from "react";
import ReservationModal from "./ReservationModal";
import { Col } from "react-bootstrap";

const ReservationQuickButton = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  return (
    <>
      <Col sm={12} className="text-center">
        <ReservationModal modalShow={modalShow} handleClose={handleClose} />
        <button
          className="btn btn-pos btn-outline-primary rounded-pill"
          onClick={handleShow}
        >
          Prenota
        </button>
      </Col>
    </>
  );
};
export default ReservationQuickButton;
