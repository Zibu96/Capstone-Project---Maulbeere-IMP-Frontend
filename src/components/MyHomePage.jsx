import { Container, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import ResevationWidget from "./ReservationWidget";

const MyHomePage = () => {
  return (
    <>
      <MyNavbar />
      <Container>
        <Row>
          <ResevationWidget />
        </Row>
      </Container>
    </>
  );
};

export default MyHomePage;
