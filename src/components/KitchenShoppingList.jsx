import { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDeleteShoppingListAction,
  fetchPostShoppingListsAction,
} from "../redux/actions/kitchenAction";
import { format } from "date-fns";

const KitchenShoppingList = () => {
  const token = useSelector((state) => state.user.user_bearer.accessToken);
  const shoppingListDb = useSelector(
    (state) => state.kitchen.kitchen_shoppingList.content
  );

  useEffect(() => {
    setShoppingList(shoppingListDb);
  }, [shoppingListDb]);

  const [product, setProduct] = useState("");
  const [quantity, SetQuantity] = useState("");
  const [value, setValue] = useState("");
  const [shoppingList, setShoppingList] = useState([]);
  const dispatch = useDispatch();
  console.log(shoppingListDb);
  const handleKitchenShoppingListSubmit = (e) => {
    e.preventDefault();
    console.log("Creating new reservation");
    const newShoppingList = {
      staffType: "CUCINA",
      product: product,
      quantity: quantity,
      value: value,
    };

    dispatch(fetchPostShoppingListsAction(token, newShoppingList));
    setShoppingList((shoppingListDb) => [...shoppingListDb, newShoppingList]);
    console.log(newShoppingList);
  };

  const handleShoppingListDelete = (deleteId) => {
    dispatch(fetchDeleteShoppingListAction(token, deleteId));
    setShoppingList((shoppingListDb) =>
      shoppingListDb.filter((sl) => sl.id !== deleteId)
    );
  };
  const dateToUse = (date) => {
    return format(new Date(date), "dd-MM");
  };

  return (
    <Col sm={12} className="text-white mb-3">
      <div className="border rounded p-2">
        <h4>Lista Spesa:</h4>
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
                  <p className="m-0">{dateToUse(sl.date)}</p>
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

        <Form className="mt-2 " onSubmit={handleKitchenShoppingListSubmit}>
          <div className="d-flex gap-2">
            <Form.Control
              type="text"
              placeholder="Prodotto"
              onChange={(e) => setProduct(e.target.value)}
            />
            <Form.Control
              type="number"
              placeholder="Quantità"
              onChange={(e) => SetQuantity(e.target.value)}
            />
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setValue(e.target.value)}
            >
              <option>Valore</option>
              <option>Kg</option>
              <option>Cartoni</option>
              <option>Buste</option>
            </Form.Select>
          </div>
          <div className="text-center mt-2">
            <Button type="sumbit">Invia</Button>
          </div>
        </Form>
      </div>
    </Col>
  );
};
export default KitchenShoppingList;
