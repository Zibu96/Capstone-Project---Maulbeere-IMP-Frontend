import { Button, Col, Form } from "react-bootstrap";

const WaitStaffComunication = () => {
  return (
    <Col sm={12} lg={6} className="text-white mb-3">
      <div className="border rounded p-2">
        <h4>Comunicazioni:</h4>
        <div className="border rounded p-2 bgAll mb-2">
          <p className="p-2 m-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            animi expedita, illum officiis deleniti temporibus, dolorum qui vero
            placeat ab vel. Voluptas dolorem sapiente repellat, rerum cupiditate
            optio ipsam nobis.
          </p>
        </div>
        <div className="border rounded p-2 bgAll">
          <p className="p-2 m-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            animi expedita, illum officiis deleniti temporibus, dolorum qui vero
            placeat ab vel. Voluptas dolorem sapiente repellat, rerum cupiditate
            optio ipsam nobis.
          </p>
        </div>
        <Form className="mt-2 ">
          <Form.Control as="textarea" rows={3} />
          <div className="text-center mt-2">
            <Button type="sumbit">Invia</Button>
          </div>
        </Form>
      </div>
    </Col>
  );
};
export default WaitStaffComunication;
