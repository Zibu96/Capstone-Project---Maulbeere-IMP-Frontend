import Calendar from "react-calendar";
import MyNavbar from "./MyNavbar";
import "react-calendar/dist/Calendar.css";
import "../style/partials/_calendarpage.scss";
import { Col, Container, Row } from "react-bootstrap";
import MaulEe from "../assets/EE_white.svg";
import { useState } from "react";
import { format } from "date-fns";

const CalendarPage = () => {
  const [value, onChange] = useState(new Date());
  console.log(value);
  const dateToUse = format(new Date(value), "yyyy-MM-dd");
  console.log(dateToUse);
  return (
    <>
      <MyNavbar />
      <Container className="text-white">
        <Row>
          <div className="d-flex justify-content-between my-3">
            <h1>Calendario:</h1>
            <img className="right-logo" src={MaulEe} alt="Alt logo" />
          </div>
          <Col>
            <Calendar onChange={onChange} value={value} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default CalendarPage;
