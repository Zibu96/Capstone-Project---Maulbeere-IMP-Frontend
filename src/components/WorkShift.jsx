import { Col, Container, Form, Row, Table } from "react-bootstrap";
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
  const lunches = useSelector((state) => state.workShift.lunch.content);
  const dinners = useSelector((state) => state.workShift.dinner.content);
  console.log(lunches);
  console.log(dinners);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchLunchAction(token));
      dispatch(fetchDinnerAction(token));
    }
  }, [dispatch, token]);

  const existLunchByDay = (lunch, days) => {
    if (lunch[days] == true) {
      return lunch.user.name;
    }
    return;
  };
  const existDinnerByDay = (dinner, days) => {
    if (dinner[days] == true) {
      return dinner.user.name;
    }
    return;
  };

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
                  {lunches.map((lunch, index) => {
                    const dinner = dinners[index];
                    return (
                      <>
                        <tr key={lunch.id}>
                          <td>Lunedì</td>
                          <td>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existLunchByDay(lunch, "monday")}
                              </option>
                            </Form.Select>
                          </td>
                          <td className="name d-flex gap-2">
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "monday")}
                              </option>
                            </Form.Select>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "monday")}
                              </option>
                            </Form.Select>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "monday")}
                              </option>
                            </Form.Select>
                          </td>
                        </tr>
                        <tr>
                          <td>Martedì</td>
                          <td>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existLunchByDay(lunch, "tuesday")}
                              </option>
                            </Form.Select>
                          </td>
                          <td className="name d-flex gap-2">
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "tuesday")}
                              </option>
                            </Form.Select>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "tuesday")}
                              </option>
                            </Form.Select>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "tuesday")}
                              </option>
                            </Form.Select>
                          </td>
                        </tr>
                        <tr>
                          <td>Mercoledì</td>
                          <td>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existLunchByDay(lunch, "wednesday")}
                              </option>
                            </Form.Select>
                          </td>
                          <td className="name d-flex gap-2">
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "wednesday")}
                              </option>
                            </Form.Select>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "wednesday")}
                              </option>
                            </Form.Select>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "wednesday")}
                              </option>
                            </Form.Select>
                          </td>
                        </tr>
                        <tr>
                          <td>Giovedì</td>
                          <td>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existLunchByDay(lunch, "thursday")}
                              </option>
                            </Form.Select>
                          </td>
                          <td className="name d-flex gap-2">
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "thursday")}
                              </option>
                            </Form.Select>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "thursday")}
                              </option>
                            </Form.Select>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "thursday")}
                              </option>
                            </Form.Select>
                          </td>
                        </tr>
                        <tr>
                          <td>Venerdì</td>
                          <td>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existLunchByDay(lunch, "friday")}
                              </option>
                            </Form.Select>
                          </td>
                          <td className="name d-flex gap-2">
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "friday")}
                              </option>
                            </Form.Select>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "friday")}
                              </option>
                            </Form.Select>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "friday")}
                              </option>
                            </Form.Select>
                          </td>
                        </tr>
                        <tr>
                          <td>Sabato</td>
                          <td>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existLunchByDay(lunch, "saturday")}
                              </option>
                            </Form.Select>
                          </td>
                          <td className="name d-flex gap-2">
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "saturday")}
                              </option>
                            </Form.Select>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "saturday")}
                              </option>
                            </Form.Select>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "saturday")}
                              </option>
                            </Form.Select>
                          </td>
                        </tr>
                        <tr>
                          <td>Domenica</td>
                          <td>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existLunchByDay(lunch, "sunday")}
                              </option>
                            </Form.Select>
                          </td>
                          <td className="name d-flex gap-2">
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "sunday")}
                              </option>
                            </Form.Select>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "sunday")}
                              </option>
                            </Form.Select>
                            <Form.Select aria-label="Default select example">
                              <option>Dipendente</option>
                              <option value="1">
                                {existDinnerByDay(dinner, "sunday")}
                              </option>
                            </Form.Select>
                          </td>
                        </tr>
                      </>
                    );
                  })}
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
