import { Col } from "react-bootstrap";
import MaulLogoBW from "../assets/MaulLogo_white.svg";

const LoadingPage = () => {
  return (
    <Col sm={12}>
      <div className="text-center ">
        <img src={MaulLogoBW} alt="BWLogo" className="bw-logo bw-logo-rotate" />
        <div className="bgAll border rounded p-2 ">
          <h1>Caricamento...</h1>
        </div>
      </div>
    </Col>
  );
};
export default LoadingPage;
