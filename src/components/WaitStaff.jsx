import { Container, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import WaitStaffToDo from "./WaitStaffToDo";
import WaitStaffComunication from "./WaitStaffComunication";
import WaitStaffShoppingList from "./WaitStaffShoppingList";

const WaitStaff = () => {
  return (
    <>
      <MyNavbar />
      <Container className="text-white">
        <Row>
          <div className="d-flex justify-content-between my-3">
            <h1>Sala:</h1>
          </div>
          <WaitStaffToDo />
          <WaitStaffComunication />
          <WaitStaffShoppingList />
        </Row>
      </Container>
    </>
  );
};
export default WaitStaff;
