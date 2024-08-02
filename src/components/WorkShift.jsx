import { Col, Container, Row, Table } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import WorkShiftOrganizer from "./WorkShiftOrganizer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import WorkShiftTable from "./WorkShiftTable";
import MaulEe from "../assets/EE_white.svg";
import {
  fetchDinnerAction,
  fetchLunchAction,
  fetchWeekAction,
} from "../redux/actions/workShiftAction";
import RedirectPage from "./RedirectPage";

const WorkShift = () => {
  const token = useSelector((state) => state?.user?.user_bearer?.accessToken);
  const weeks = useSelector((state) => state.workShift.workShift);
  const me = useSelector((state) => state.user.state);
  const [sortedWeeks, setSortedWeeks] = useState([]);
  const dispatch = useDispatch();
  console.log(weeks);

  useEffect(() => {
    if (token) {
      dispatch(fetchWeekAction(token));
      dispatch(fetchLunchAction(token));
      dispatch(fetchDinnerAction(token));
    }
  }, [dispatch, token]);

  useEffect(() => {
    if (weeks) {
      setSortedWeeks(weeks);
    }
  }, [weeks]);
  const daysOfWeekToUse = [
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
    "Domenica",
  ];

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
                <h1>Turni della settimana: </h1>
                <img className="right-logo" src={MaulEe} alt="Alt logo" />
              </div>
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
                      {sortedWeeks.length == 0 ? (
                        <p>Turni non disponibili</p>
                      ) : (
                        sortedWeeks.map((week, i) => (
                          <tr key={week.id}>
                            <td>{daysOfWeekToUse[i]}</td>

                            <td>{week.lunchUser}</td>
                            <td className="d-flex justify-content-between ">
                              <p className="m-0 widget">{week.dinnerUserOne}</p>
                              <p className="m-0 widget">{week.dinnerUserTwo}</p>
                              <p className="m-0 widget">
                                {week.dinnerUserThree}
                              </p>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                </div>
              </Col>
              {["SALA", "ADMIN"].includes(me.role) ? (
                <WorkShiftOrganizer />
              ) : (
                <div></div>
              )}
              {["GESTORE", "ADMIN"].includes(me.role) ? (
                <WorkShiftTable />
              ) : (
                <div></div>
              )}
            </Row>
          </Container>
        </>
      )}
    </>
  );
};
export default WorkShift;
