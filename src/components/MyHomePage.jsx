import { Container, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import ResevationWidget from "./ReservationWidget";
import WorkShiftWidget from "./WorkShiftWidget";

const MyHomePage = () => {
  return (
    <>
      <MyNavbar />
      <Container className="text-white">
        <Row>
          <h1>Dashboard Giornaliera: </h1>
          <WorkShiftWidget />
          <ResevationWidget />
        </Row>
      </Container>
    </>
  );
};

export default MyHomePage;
