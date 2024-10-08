import { Button, Col, Form, Placeholder, Table } from "react-bootstrap";
import { fetchPostWeekAction } from "../redux/actions/workShiftAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const WorkShiftTable = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const lunches = useSelector((state) => state.workShift.lunch.content);
  const dinners = useSelector((state) => state.workShift.dinner.content);

  const [lunchUsers, setLunchUsers] = useState({});
  const [dinnerUsersOne, setDinnerUsersOne] = useState({});
  const [dinnerUsersTwo, setDinnerUsersTwo] = useState({});
  const [dinnerUsersThree, setDinnerUsersThree] = useState({});
  const [lun, setLun] = useState([]);
  const [din, setDin] = useState([]);

  useEffect(() => {
    setLun(lunches);
    setDin(dinners);
  }, [lunches, dinners]);

  const handleLunchUserChange = (day, value) => {
    setLunchUsers((prevState) => ({ ...prevState, [day]: value || null }));
  };

  const handleDinnerUserOneChange = (day, value) => {
    setDinnerUsersOne((prevState) => ({ ...prevState, [day]: value || null }));
  };

  const handleDinnerUserTwoChange = (day, value) => {
    setDinnerUsersTwo((prevState) => ({ ...prevState, [day]: value || null }));
  };

  const handleDinnerUserThreeChange = (day, value) => {
    setDinnerUsersThree((prevState) => ({
      ...prevState,
      [day]: value || null,
    }));
  };

  const dispatch = useDispatch();

  const daysOfWeek = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const daysOfWeekToUse = [
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
    "Domenica",
  ];

  const handleWeektSubmit = () => {
    console.log("Creating new shifts");
    newWeeks.forEach((newWeek) => {
      dispatch(fetchPostWeekAction(token, newWeek));

      console.log(newWeek);
    });
    alert("creazione turni avvenuta con successo");
  };

  const newWeeks = daysOfWeek.map((day) => {
    return {
      weekDays: day.toUpperCase(),
      lunchUser: lunchUsers[day] || null,
      dinnerUserOne: dinnerUsersOne[day] || null,
      dinnerUserTwo: dinnerUsersTwo[day] || null,
      dinnerUserThree: dinnerUsersThree[day] || null,
    };
  });

  const existLunchByDay = (lunch, days) => {
    if (lunch[days] == true) {
      return {
        name: lunch.user.name,
        id: lunch.user.id,
      };
    }
    return null;
  };
  const existDinnerByDay = (dinner, days) => {
    if (dinner[days] == true) {
      return {
        name: dinner.user.name,
        id: dinner.user.id,
      };
    }
    return null;
  };

  return (
    <Col sm={12}>
      <div className="bgAll border rounded mt-3">
        <h3 className="text-center">Questa settimana</h3>
        <Form onSubmit={handleWeektSubmit}>
          <Table striped bordered variant="dark">
            <thead>
              <tr className="text-center">
                <th>Giorno</th>
                <th>Pranzo</th>
                <th>Cena</th>
              </tr>
            </thead>

            <tbody>
              {!lun || !din ? (
                <>
                  <Placeholder xs={12} size="lg" />
                  <Placeholder xs={12} />
                  <Placeholder xs={12} size="sm" />
                  <Placeholder xs={12} size="xs" />
                </>
              ) : !dinners || !lunches ? (
                <h2>Non ci sono disponibilità</h2>
              ) : (
                daysOfWeek.map((day, index) => (
                  <tr key={index}>
                    <td>{daysOfWeekToUse[index]}</td>

                    <td>
                      <Form.Select
                        aria-label="Default select example"
                        value={lunchUsers[day] || ""}
                        onChange={(e) =>
                          handleLunchUserChange(day, e.target.value)
                        }
                      >
                        <option>Dipendente</option>
                        {lun
                          .map((lunch, i) => {
                            const user = existLunchByDay(lunch, day);
                            return (
                              user && (
                                <option key={i} value={user.name}>
                                  {user.name}
                                </option>
                              )
                            );
                          })
                          .filter(Boolean)}
                      </Form.Select>
                    </td>
                    <td className="name d-flex gap-2">
                      <Form.Select
                        aria-label="Default select example"
                        value={dinnerUsersOne[day] || ""}
                        onChange={(e) =>
                          handleDinnerUserOneChange(day, e.target.value)
                        }
                      >
                        <option>Dipendente</option>
                        {dinners
                          .map((dinner, i) => {
                            const user = existDinnerByDay(dinner, day);
                            return (
                              user && (
                                <option key={i} value={user.name}>
                                  {user.name}
                                </option>
                              )
                            );
                          })
                          .filter(Boolean)}
                      </Form.Select>
                      <Form.Select
                        aria-label="Default select example"
                        value={dinnerUsersTwo[day] || ""}
                        onChange={(e) =>
                          handleDinnerUserTwoChange(day, e.target.value)
                        }
                      >
                        <option>Dipendente</option>
                        {dinners
                          .map((dinner, i) => {
                            const user = existDinnerByDay(dinner, day);
                            return (
                              user && (
                                <option key={i} value={user.name}>
                                  {user.name}
                                </option>
                              )
                            );
                          })
                          .filter(Boolean)}
                      </Form.Select>
                      <Form.Select
                        aria-label="Default select example"
                        value={dinnerUsersThree[day] || ""}
                        onChange={(e) =>
                          handleDinnerUserThreeChange(day, e.target.value)
                        }
                      >
                        <option>Dipendente</option>
                        {dinners
                          .map((dinner, i) => {
                            const user = existDinnerByDay(dinner, day);
                            return (
                              user && (
                                <option key={i} value={user.name}>
                                  {user.name}
                                </option>
                              )
                            );
                          })
                          .filter(Boolean)}
                      </Form.Select>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
          <div className="text-center mb-3">
            <Button type="submit" variant="primary" className="rounded-pill">
              Invia Turni
            </Button>
          </div>
        </Form>
      </div>
    </Col>
  );
};

export default WorkShiftTable;
