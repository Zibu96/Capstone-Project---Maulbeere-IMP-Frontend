import { useEffect } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsersAction } from "../redux/actions/usersAction";

const StaffManagmentList = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const users = useSelector((state) => state.user.user_list.content);
  console.log(users);

  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(fetchAllUsersAction(token));
    }
  }, [dispatch, token]);

  return (
    <Col className="bgAll border rounded mt-3">
      <h3 className="mt-2">Lista Dipendenti:</h3>
      {!users ? (
        <h2>Non ci sono dipendendenti</h2>
      ) : (
        users.map((user) => (
          <Card className="my-3" key={user.id}>
            <Card.Body className="d-flex justify-content-between text-white card_bg align-items-center">
              <Card.Title className="m-0 w-50">
                {user.name} {user.surname}
              </Card.Title>
              <Card.Text className="m-0">{user.role}</Card.Text>
              <Button variant="danger rounded-pill align-items-center">
                <i className="bi bi-trash"></i>
              </Button>
            </Card.Body>
          </Card>
        ))
      )}
    </Col>
  );
};
export default StaffManagmentList;
