import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
// import Home from "./Components/Home/Home";
import Lecheria from "./Components/Home/Lecheria";
import Genetica from "./Components/Home/Genetica";
import Engorde from "./Components/Home/Engorde";
import Corrales from "./Components/Home/Corrales";
import Personas from "./Components/Home/Personas";
// import Ventas from "./Components/Home/Ventas";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/lecheria" element={<Lecheria />} />
          <Route path="/genetica" element={<Genetica />} />
          <Route path="/engorde" element={<Engorde />} />
          <Route path="/corrales" element={<Corrales />} />
          <Route path="/personas" element={<Personas />} />
          {/* <Route path="/ventas" element={<Home />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
