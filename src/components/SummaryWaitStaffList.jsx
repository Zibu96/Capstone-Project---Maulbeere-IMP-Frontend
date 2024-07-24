import { Button, Col } from "react-bootstrap";

const SummaryWaitStaffList = () => {
  return (
    <Col sm={12} className="text-white mb-3">
      <div className="border rounded p-2">
        <h4>Lista Sala:</h4>
        <div className="bgAll  border rounded">
          <div className="bgAll d-flex rounded-top align-items-center">
            <div className="ws-table-principal border-end text-center p-2">
              <h5 className="m-0">Prodotto</h5>
            </div>
            <div className="ws-table-secondary border-end text-center p-2">
              <h5 className="m-0">Quantità</h5>
            </div>
            <div className="ws-table-secondary border-end text-center p-2">
              <h5 className="m-0">Data </h5>
            </div>
          </div>

          {/* INSERIRE QUI IL MAP */}
          <div className="bgAll d-flex border-top rounded-bottom align-items-center">
            <div className="ws-table-principal border-end p-2">
              <p className="m-0">Gin</p>
            </div>
            <div className="ws-table-secondary border-end text-center p-2">
              <p className="m-0">6 Btl</p>
            </div>
            <div className="ws-table-secondary border-end text-center p-2">
              <p className="m-0">27/2024</p>
            </div>
            <div className="ws-table-btn text-center ">
              <Button className="rounded p-0 ws-btn">
                <i className="bi bi-check-lg "></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default SummaryWaitStaffList;
