import { Col, Container, Row, Table } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import WorkShiftOrganizer from "./WorkShiftOrganizer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchDinnerAction,
  fetchLunchAction,
} from "../redux/actions/workShiftAction";

const WorkShift = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const lunch = useSelector((state) => state.workShift.lunch.content);
  const dinner = useSelector((state) => state.workShift.dinner.content);
  console.log(lunch);
  console.log(dinner);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchLunchAction(token));
      dispatch(fetchDinnerAction(token));
    }
  }, [dispatch, token]);

  return (
    <>
      <MyNavbar />
      <Container className="text-white">
        <Row>
          <h1>Turni della settimana: </h1>
          <Col sm={12}>
            <div className="bgAll border rounded mt-3">
              <h3 className="text-center">Questa settimana</h3>

              <Table striped bordered variant="dark">
                <thead>
                  <tr className="text-center">
                    <th>Giorno</th>
                    <th>Pranzo</th>
                    <th>Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lunedì</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Martedì</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Mercoledì</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Giovedì</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Venerdì</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Sabato</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Domenica</td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
          <WorkShiftOrganizer />
        </Row>
      </Container>
    </>
  );
};
export default WorkShift;
