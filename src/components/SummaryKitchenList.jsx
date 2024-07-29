import { useEffect, useState } from "react";
import { Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeleteShoppingListAction } from "../redux/actions/kitchenAction";

const SummaryKitchenList = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const shoppingListDb = useSelector(
    (state) => state.kitchen.kitchen_shoppingList.content
  );
  const [shoppingList, setShoppingList] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setShoppingList(shoppingListDb);
  }, [shoppingListDb]);

  const handleShoppingListDelete = (deleteId) => {
    dispatch(fetchDeleteShoppingListAction(token, deleteId));
    setShoppingList((shoppingListDb) =>
      shoppingListDb.filter((sl) => sl.id !== deleteId)
    );
  };
  return (
    <Col sm={12} className="text-white mb-3">
      <div className="border rounded p-2">
        <h4>Lista Cucina:</h4>
        <div className="bgAll  border rounded">
          <div className="bgAll d-flex rounded-top align-items-center">
            <div className="ws-table-principal border-end text-center p-2">
              <h5 className="m-0">Prodotto</h5>
            </div>
            <div className="ws-table-secondary border-end text-center p-2">
              <h5 className="m-0">Quantità</h5>
            </div>
            <div className="ws-table-secondary border-end text-center p-2">
              <h5 className="m-0">Data </h5>
            </div>
          </div>

          {!shoppingList ? (
            <div className="ws-table-principal border-end p-2">
              <p className="m-0">Niente in lista</p>
            </div>
          ) : (
            shoppingList.map((sl) => (
              <div
                className="bgAll d-flex border-top rounded-bottom align-items-center"
                key={sl.id}
              >
                <div className="ws-table-principal border-end p-2">
                  <p className="m-0">{sl.product}</p>
                </div>
                <div className="ws-table-secondary border-end text-center p-2">
                  <p className="m-0">
                    {sl.quantity} {sl.value}
                  </p>
                </div>
                <div className="ws-table-secondary border-end text-center p-2">
                  <p className="m-0">{sl.date}</p>
                </div>
                <div className="ws-table-btn text-center ">
                  <Button
                    className="rounded p-0 ws-btn"
                    onClick={() => handleShoppingListDelete(sl.id)}
                  >
                    <i className="bi bi-check-lg "></i>
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Col>
  );
};

export default SummaryKitchenList;
