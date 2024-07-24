import { Container, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import SummaryWaitStaffList from "./SummaryWaitStaffList";

const SummaryShoppingList = () => {
  return (
    <>
      <MyNavbar />
      <Container className="text-white">
        <Row>
          <div className="d-flex justify-content-between my-3">
            <h1>Riepilogo Liste: </h1>
          </div>
          <SummaryWaitStaffList />
        </Row>
      </Container>
    </>
  );
};
export default SummaryShoppingList;
