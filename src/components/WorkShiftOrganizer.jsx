import { Button, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  fetchPostDinnerAction,
  fetchPostLunchAction,
} from "../redux/actions/workShiftAction";

const WorkShiftOrganizer = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const me = useSelector((state) => state.user.state);
  const dispatch = useDispatch();
  const [mondayLunch, setMondayLunch] = useState(false);
  const [tuesdayLunch, setTuesdayLunch] = useState(false);
  const [wednesdayLunch, setWednesdayLunch] = useState(false);
  const [thursdayLunch, setThursdayLunch] = useState(false);
  const [fridayLunch, setFridayLunch] = useState(false);
  const [saturdayLunch, setSaturdayLunch] = useState(false);
  const [sundayLunch, setSundayLunch] = useState(false);
  const [mondayDinner, setMondayDinner] = useState(false);
  const [tuesdayDinner, setTuesdayDinner] = useState(false);
  const [wednesdayDinner, setWednesdayDinner] = useState(false);
  const [thursdayDinner, setThursdayDinner] = useState(false);
  const [fridayDinner, setFridayDinner] = useState(false);
  const [saturdayDinner, setSaturdayDinner] = useState(false);
  const [sundayDinner, setSundayDinner] = useState(false);

  const handleShiftSubmit = (e) => {
    e.preventDefault();
    console.log("Creating new shift disponibility");
    const newLunch = {
      monday: mondayLunch,
      tuesday: tuesdayLunch,
      wednesday: wednesdayLunch,
      thursday: thursdayLunch,
      friday: fridayLunch,
      saturday: saturdayLunch,
      sunday: sundayLunch,
      user: `${me.id}`,
    };
    const newDinner = {
      monday: mondayDinner,
      tuesday: tuesdayDinner,
      wednesday: wednesdayDinner,
      thursday: thursdayDinner,
      friday: fridayDinner,
      saturday: saturdayDinner,
      sunday: sundayDinner,
      user: `${me.id}`,
    };
    dispatch(fetchPostLunchAction(token, newLunch));
    dispatch(fetchPostDinnerAction(token, newDinner));
    console.log(newLunch);
    console.log(newDinner);
  };

  return (
    <Col sm={12} className="mt-4">
      <div className="bgAll border rounded ps-2 pt-2">
        <h4 className="mb-4">Inserisci le tue disponibilità</h4>
        <Form onSubmit={handleShiftSubmit}>
          <div className="d-sm-block d-md-flex gap-4">
            <h5 className="shift-check">Pranzo:</h5>
            <div className="mb-3  text-center">
              <Form.Check
                inline
                label="Lunedì"
                name="Lunedì"
                onChange={() => setMondayLunch(!mondayLunch)}
              />
              <Form.Check
                inline
                label="Martedì"
                name="Martedì"
                onChange={() => setTuesdayLunch(!tuesdayLunch)}
              />
              <Form.Check
                inline
                label="Mercoledì"
                name="Mercoledì"
                onChange={() => setWednesdayLunch(!wednesdayLunch)}
              />
              <Form.Check
                inline
                label="Giovedì"
                name="Giovedì"
                onChange={() => setThursdayLunch(!thursdayLunch)}
              />
              <Form.Check
                inline
                label="Venerdì"
                name="Venerdì"
                onChange={() => setFridayLunch(!fridayLunch)}
              />
              <Form.Check
                inline
                label="Sabato"
                name="Sabato"
                onChange={() => setSaturdayLunch(!saturdayLunch)}
              />
              <Form.Check
                inline
                label="Domenica"
                name="Domenica"
                onChange={() => setSundayLunch(!sundayLunch)}
              />
            </div>
          </div>
          <div className="d-sm-block d-md-flex gap-4">
            <h5 className="shift-check">Cena:</h5>
            <div className="mb-3 text-center">
              <Form.Check
                inline
                label="Lunedì"
                name="Lunedì"
                onChange={() => setMondayDinner(!mondayDinner)}
              />
              <Form.Check
                inline
                label="Martedì"
                name="Martedì"
                onChange={() => setTuesdayDinner(!tuesdayDinner)}
              />
              <Form.Check
                inline
                label="Mercoledì"
                name="Mercoledì"
                onChange={() => setWednesdayDinner(!wednesdayDinner)}
              />
              <Form.Check
                inline
                label="Giovedì"
                name="Giovedì"
                onChange={() => setThursdayDinner(!thursdayDinner)}
              />
              <Form.Check
                inline
                label="Venerdì"
                name="Venerdì"
                onChange={() => setFridayDinner(!fridayDinner)}
              />
              <Form.Check
                inline
                label="Sabato"
                name="Sabato"
                onChange={() => setSaturdayDinner(!saturdayDinner)}
              />
              <Form.Check
                inline
                label="Domenica"
                name="Domenica"
                onChange={() => setSundayDinner(!sundayDinner)}
              />
            </div>
          </div>
          <div className="text-center mb-3">
            <Button type="submit" variant="primary" className="rounded-pill">
              Invia Disponibilità
            </Button>
          </div>
        </Form>
      </div>
    </Col>
  );
};

export default WorkShiftOrganizer;
