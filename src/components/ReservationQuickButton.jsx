import { useState } from "react";
import ReservationModal from "./ReservationModal";

const ReservationQuickButton = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);
  return (
    <>
      <ReservationModal modalShow={modalShow} handleClose={handleClose} />
      <button
        className="btn btn-pos btn-outline-primary rounded-pill"
        onClick={handleShow}
      >
        Prenota
      </button>
    </>
  );
};
export default ReservationQuickButton;
