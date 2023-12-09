import './App.css';
import Signin from './pages/Sign-in';
import SignUp from './components/compoTimeLine/SignUp';
// import { Started } from './pages/started';
import { Route, Routes } from 'react-router-dom';
import Template from './layouts/Template';
import ModalOubli from './pages/ModalOubli';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Started />} /> */}
        <Route path="/" element={<Signin />} />
        <Route path="/Inscription" element={<SignUp />} />
        <Route path="/Timeline" element={<Template />} />
        <Route path="/Modal" element={<ModalOubli />} />
      </Routes>
    </div>
  );
}

export default App;
