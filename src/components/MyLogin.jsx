import { useState } from "react";
import { useDispatch } from "react-redux";
import maulLogo from "../assets/Maulbeere_Logo_CMYK.svg";
import maulTitle from "../assets/Maulbeere_logotype.svg";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { fetchUserAction } from "../redux/actions/usersAction";
import { Form } from "react-bootstrap";
const MyLogin = () => {
  const [isLogged, setIsLogged] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Attempting to log in");
    const loginObject = {
      email: email,
      password: password,
    };
    dispatch(fetchUserAction(loginObject, navigate));
  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol
          sm={12}
          md={6}
          className="mb-5 rounded-start  log-container-left"
        >
          <div className="d-flex flex-column text-white text-center">
            <div className="text-center">
              <img
                src={maulLogo}
                style={{ width: "185px" }}
                alt="Maulbeerelogo"
              />
            </div>

            <h4>Effettua il login con il tuo account</h4>
            <Form onSubmit={handleLoginSubmit}>
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form1"
                type="email"
                className="w-50 mx-auto"
                onChange={(e) => setEmail(e.target.value)}
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="password"
                className="w-50 mx-auto"
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn className="mb-4 w-30 gradient-custom-2">Sign in</MDBBtn>
              </div>
            </Form>
          </div>
        </MDBCol>

        <MDBCol
          sm={12}
          md={6}
          className="mb-5 log-container-right rounded-end text-center "
        >
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-center">
              <img
                src={maulTitle}
                style={{ width: "370px" }}
                alt="Maulbeerelogo"
              />
            </div>
            <div className="px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">Benvenuto</h4>
              <p className=" mb-0">
                Effettua il login con le credenziali forinte dall' admin della
                pagina per accedere al gestionale interno del tuo locale. Potrai
                trovare soluzioni rapide e intuitive per gestire al meglio il
                tuo locale a 360°.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default MyLogin;
