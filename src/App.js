import './App.css';
import Signin from './pages/Sign-in';
import SignUp from './components/compoTimeLine/SignUp';
import { Started } from './pages/started';
import { Route, Routes } from 'react-router-dom';
import Template from './layouts/Template';

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
