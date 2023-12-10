import './App.css';
import Signin from './pages/Sign-in';
import SignUp from './components/compoTimeLine/SignUp';
import { Route, Routes } from 'react-router-dom';
import Template from './layouts/Template';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/connexion" element={<Signin />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/timeline" element={<Template />} />
      </Routes>
    </div>
  );
}

export default App;
