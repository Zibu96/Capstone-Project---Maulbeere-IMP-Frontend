import { Container, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import SummaryWaitStaffList from "./SummaryWaitStaffList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchShoppingListAction } from "../redux/actions/kitchenAction";
import { fetchWaitStaffShoppingListAction } from "../redux/actions/waitStaffAction";
import SummaryKitchenList from "./SummaryKitchenList";
import MaulEe from "../assets/EE_white.svg";
import RedirectPage from "./RedirectPage";

const SummaryShoppingList = () => {
  const token = useSelector((state) => state?.user?.user_bearer?.accessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchWaitStaffShoppingListAction(token));
      dispatch(fetchShoppingListAction(token));
    }
  }, [dispatch, token]);
  return (
    <>
      {!token ? (
        <RedirectPage />
      ) : (
        <>
          <MyNavbar />
          <Container className="text-white">
            <Row>
              <div className="d-flex justify-content-between my-3">
                <h1>Riepilogo Liste: </h1>
                <img className="right-logo" src={MaulEe} alt="Alt logo" />
              </div>
              <SummaryWaitStaffList />
              <SummaryKitchenList />
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
export default SummaryShoppingList;
