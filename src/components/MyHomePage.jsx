import { Container, Placeholder, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import ResevationWidget from "./ReservationWidget";
import WorkShiftWidget from "./WorkShiftWidget";
import ReservationQuickButton from "./ReservationQuickButton";
import WaitStaffWidget from "./WaitStaffWidget";
import KitchenWidget from "./KitchenWidget";
import MaulEe from "../assets/EE_white.svg";
import { useSelector } from "react-redux";

const MyHomePage = () => {
  const me = useSelector((state) => state.user.state);
  return (
    <>
      <MyNavbar />
      {!me ? (
        <>
          <Placeholder xs={12} size="lg" />
          <Placeholder xs={12} />
          <Placeholder xs={12} size="sm" />
          <Placeholder xs={12} size="xs" />
        </>
      ) : (
        <Container className="text-white">
          <Row className="">
            <div className="d-flex justify-content-between my-3">
              <h1>Dashboard Giornaliera: </h1>
              <img className="right-logo" src={MaulEe} alt="Alt logo" />
            </div>
            <WorkShiftWidget />
            <ResevationWidget />
            <WaitStaffWidget />
            <KitchenWidget />
            <ReservationQuickButton />
          </Row>
        </Container>
      )}
    </>
  );
};

export default MyHomePage;
