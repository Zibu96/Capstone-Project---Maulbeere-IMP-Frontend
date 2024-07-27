import { useEffect, useState } from "react";
import { Placeholder } from "react-bootstrap";
import { useSelector } from "react-redux";

const KitchenWidgetCommunication = () => {
  const communicationsDb = useSelector(
    (state) => state.kitchen.kitchen_communication.content
  );
  const [communications, setCommunications] = useState([]);

  useEffect(() => {
    if (communicationsDb) {
      setCommunications(communicationsDb);
    }
  }, [communicationsDb]);

  return (
    <div className="border rounded p-2 w-100">
      <h4>Comunicazioni:</h4>
      {!communicationsDb ? (
        <>
          <Placeholder xs={12} size="lg" />
          <Placeholder xs={12} />
          <Placeholder xs={12} size="sm" />
          <Placeholder xs={12} size="xs" />
        </>
      ) : communications.length == 0 ? (
        <div className="border rounded p-2 bgAll mb-2">
          <p className="p-2 m-0">Nessuna comunicazione</p>
        </div>
      ) : (
        communications.map((com) => (
          <div className="border rounded p-2 bgAll mb-2" key={com.id}>
            <p className="m-0">{com.text}</p>
          </div>
        ))
      )}
    </div>
  );
};
export default KitchenWidgetCommunication;
