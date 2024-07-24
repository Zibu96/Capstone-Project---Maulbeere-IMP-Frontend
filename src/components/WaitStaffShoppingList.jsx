import { Button, Col, Form } from "react-bootstrap";

const WaitStaffShoppingList = () => {
  return (
    <Col sm={12} className="text-white mb-3">
      <div className="border rounded p-2">
        <h4>Lista Spesa:</h4>
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

        <Form className="mt-2 ">
          <div className="d-flex gap-2">
            <Form.Control type="text" placeholder="Prodotto" />
            <Form.Control type="number" placeholder="Quantità" />
            <Form.Select aria-label="Default select example">
              <option>Valore</option>
              <option value="1">Kg</option>
              <option value="2">Cartoni</option>
              <option value="3">Buste</option>
            </Form.Select>
          </div>
          <div className="text-center mt-2">
            <Button type="sumbit">Invia</Button>
          </div>
        </Form>
      </div>
    </Col>
  );
};
export default WaitStaffShoppingList;
