import './App.css';
import Signin from './pages/Sign-in';
import SignUp from './components/composSignUp/SignUp';
import { Route, Routes } from 'react-router-dom';
import Template from './layouts/Template';
import { UserPage } from './components/user-page/UserPage';
import Home from './pages/Home';
import Search from './components/search/seearch';
import './assets/css/Style.css';
import ModalOubli from './pages/ModalOubli';
import AutreProfile from './components/AutreProfile/AutreProfile';
import './assets/css/Yaya.css';
import Followfriends from './components/Followfriends';
import ProfilPage from './components/UserProfile/ProfilPage';
import FindProfil from './pages/FindProfil';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/connexion" element={<Signin />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route path="/timeline" element={<Template />}>
          <Route index element={<Home />} />
          <Route path="chercher" element={<Search />} />
          <Route path="autre-profile" element={<AutreProfile />} />
          <Route path="suivre-profile" element={<Followfriends />} />
          <Route path="User-Page" element={<ProfilPage />} />
          <Route path="search-find" element={<FindProfil />} />
        </Route>
        <Route path="/Modal" element={<ModalOubli />} />
      </Routes>
    </div>
  );
}

export default App;
