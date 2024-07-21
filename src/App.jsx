import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.scss";
import MyLogin from "./components/MyLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyHomePage from "./components/MyHomePage";
import MyReservation from "./components/MyReservation";
import MyProfile from "./components/MyProfile";
import StaffManagment from "./components/StaffManagment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyLogin />} />
          <Route path="/home" element={<MyHomePage />} />
          <Route path="/prenotazioni" element={<MyReservation />} />
          <Route path="/profilo" element={<MyProfile />} />
          <Route path="/personale" element={<StaffManagment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
