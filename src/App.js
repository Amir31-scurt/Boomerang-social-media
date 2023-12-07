
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/css/Style.css";
import Template from "./layouts/Template";
import Signin from "./pages/Sign-in";
import SignUp from "./pages/SignUp";
import { Started } from "./pages/started";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Started />} />
        <Route path="/Connexion" element={<Signin />} />
        <Route path="/Inscription" element={<SignUp />} />
        <Route path="/Timeline" element={<Template />} />
      </Routes>
    </div>
  );
}

export default App;
