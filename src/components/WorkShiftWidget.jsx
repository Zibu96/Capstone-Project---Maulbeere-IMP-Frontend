import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeekAction } from "../redux/actions/workShiftAction";

const WorkShiftWidget = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const weeks = useSelector((state) => state.workShift.workShift);
  console.log(weeks);
  const [filteredWeek, setFilteredWeek] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchWeekAction(token));
    }
  }, [dispatch, token]);

  const getCurrentDay = () => {
    const daysOfWeek = [
      "SUNDAY",
      "MONDAY",
      "TUESDAY",
      "WEDNESDAY",
      "THURSDAY",
      "FRIDAY",
      "SATURDAY",
    ];
    const currentDayIndex = new Date().getDay();
    return daysOfWeek[currentDayIndex];
  };

  const filterWeeksByCurrentDay = (weeks) => {
    if (weeks) {
      const currentDay = getCurrentDay();
      return weeks.filter((week) => week.weekDays.toUpperCase() === currentDay);
    }
  };

  useEffect(() => {
    if (weeks) {
      const filtered = filterWeeksByCurrentDay(weeks);
      setFilteredWeek(filtered[0]);
    }
  }, [weeks]);
  return (
    <Col xs={12} md={6} className="text-white mb-3">
      <div className="border rounded p-2">
        <h4>In turno:</h4>
        <div className="d-flex bgAll  border rounded">
          <div className="text-center w-50 border-end">
            <h5 className="border-bottom pb-2">Pranzo</h5>
            <p>
              {filteredWeek
                ? filteredWeek.lunchUser
                : "Nessun dato disponibile"}
            </p>
          </div>
          <div className="text-center w-50">
            <h5 className="border-bottom pb-2">Cena</h5>
            <div className="d-flex justify-content-around text-center">
              <p>
                {filteredWeek
                  ? filteredWeek.dinnerUserOne
                  : "Nessun dato disponibile"}
              </p>
              {filteredWeek && filteredWeek.dinnerUserTwo && (
                <p>{filteredWeek.dinnerUserTwo}</p>
              )}
              {filteredWeek && filteredWeek.dinnerUserThree && (
                <p>{filteredWeek.dinnerUserThree}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default WorkShiftWidget;
