import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyLogin from "./components/MyLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyHomePage from "./components/MyHomePage";
import MyReservation from "./components/MyReservation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyLogin />} />
          <Route path="/home" element={<MyHomePage />} />
          <Route path="/prenotazioni" element={<MyReservation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
