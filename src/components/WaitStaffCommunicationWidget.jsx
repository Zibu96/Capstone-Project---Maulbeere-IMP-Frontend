import { useSelector } from "react-redux";

const WaitStaffComunicationWidget = () => {
  const communications = useSelector(
    (state) => state.waitStaff.waitStaff_communication.content
  );

  return (
    <div className="border rounded p-2 w-100">
      <h4>Comunicazioni:</h4>
      {!communications ? (
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
export default WaitStaffComunicationWidget;
