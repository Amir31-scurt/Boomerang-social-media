import './App.css';
import Signin from './pages/Sign-in';
import SignUp from './components/composSignUp/SignUp';
import { Route, Routes } from 'react-router-dom';
import Template from './layouts/Template';
import { UserPage } from './components/user-page/UserPage';
import Home from './pages/Home';
import Search from './components/search/seearch';
import './assets/css/Style.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/connexion" element={<Signin />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/timeline" element={<Template />}>
          <Route index element={<Home />} />
          <Route path="chercher" element={<Search />} />
          <Route path="user-page" element={<UserPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
