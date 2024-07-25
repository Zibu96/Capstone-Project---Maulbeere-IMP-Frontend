import { Container, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import ResevationWidget from "./ReservationWidget";
import WorkShiftWidget from "./WorkShiftWidget";
import ReservationQuickButton from "./ReservationQuickButton";
import WaitStaffWidget from "./WaitStaffWidget";

const MyHomePage = () => {
  return (
    <>
      <MyNavbar />
      <Container className="text-white">
        <Row className="">
          <div className="d-flex justify-content-between my-3">
            <h1>Dashboard Giornaliera: </h1>
          </div>
          <WorkShiftWidget />
          <ResevationWidget />
          <WaitStaffWidget />
        </Row>
        <ReservationQuickButton />
      </Container>
    </>
  );
};

export default MyHomePage;
