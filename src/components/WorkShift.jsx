import { Col, Container, Row, Table } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import WorkShiftOrganizer from "./WorkShiftOrganizer";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import WorkShiftTable from "./WorkShiftTable";

const WorkShift = () => {
  const weeks = useSelector((state) => state.workShift.workShift.content);
  const [sortedWeeks, setSortedWeeks] = useState([]);

  console.log(weeks);

  const daysOfWeek = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];

  const sortWeeksByDay = (weeks) => {
    if (weeks)
      return weeks.sort((a, b) => {
        return daysOfWeek.indexOf(a.weekDays) - daysOfWeek.indexOf(b.weekDays);
      });
  };
  useEffect(() => {
    setSortedWeeks(sortWeeksByDay(weeks));
    console.log(sortedWeeks);
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
      <MyNavbar />
      <Container className="text-white">
        <Row>
          <div className="d-flex justify-content-between my-3">
            <h1>Turni della settimana: </h1>
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
                  {!sortedWeeks ? (
                    <p>Turni non disponibili</p>
                  ) : (
                    sortedWeeks.map((week, i) => (
                      <tr key={week.id}>
                        <td>{daysOfWeekToUse[i]}</td>

                        <td>{week.lunchUser}</td>
                        <td className="d-flex gap-3">
                          <p className="m-0 widget">{week.dinnerUserOne}</p>
                          <p className="m-0 widget">{week.dinnerUserTwo}</p>
                          <p className="m-0 widget">{week.dinnerUserThree}</p>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </div>
          </Col>
          <WorkShiftOrganizer />
          <WorkShiftTable />
        </Row>
      </Container>
    </>
  );
};
export default WorkShift;
