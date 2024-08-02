import { Button, Col, Container, Row } from "react-bootstrap";
import MaulLogoBW from "../assets/MaulLogo_white.svg";
import { Link } from "react-router-dom";

const RedirectPage = () => {
  return (
    <Container className="centered-container">
      <Row>
        <Col sm={12}>
          <div className="text-center ">
            <img src={MaulLogoBW} alt="BWLogo" className="bw-logo" />
            <div className="bgAll border rounded p-2 ">
              <h2>
                Non puoi accedere a questa pagina senza aver fatto il login.
              </h2>
              <Link to={"/"}>
                <Button variant="primary">Vai al login</Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default RedirectPage;
