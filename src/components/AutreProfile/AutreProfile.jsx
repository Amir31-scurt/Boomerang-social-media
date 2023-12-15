import React, { useState,useEffect } from 'react';
import { IoLinkOutline } from 'react-icons/io5';
import { BiMessageDots } from 'react-icons/bi';
import { BsFillGridFill } from 'react-icons/bs';
import { MdOutlinePlayCircleFilled } from 'react-icons/md';
import { BiSolidUserPin } from 'react-icons/bi';
import { db } from '../../config/firebase-config.js';
import { collection,getDocs } from 'firebase/firestore';
import FindProfil from '../../pages/FindProfil.jsx';

const ContenuA = () => (
  <div className="container py-4 rounded-3 imagespublié mt-3 ">
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2018/10/19/12/14/train-3758523_640.jpg"
        alt=""
        className="img-fluid"
      />
    </div>
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2017/12/03/22/11/winter-landscape-2995987_640.jpg"
        alt=""
        className="img-fluid"
      />
    </div>
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
        alt=""
        className="img-fluid"
      />
    </div>
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
        alt=""
        className="img-fluid"
      />
    </div>
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
        alt=""
        className="img-fluid"
      />
    </div>
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
        alt=""
        className="img-fluid"
      />
    </div>
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
        alt=""
        className="img-fluid"
      />
    </div>
    <div>
      <img
        src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
        alt=""
        className="img-fluid"
      />
    </div>
  </div>
);
const ContenuB = () => <div>Contenu B</div>;
const ContenuC = () => <div>Contenu C</div>;
const AutreProfile = () => {
  const [contenuId, setContenuId] = useState('contenuA');
 
  const afficherContenu = (id) => {
    setContenuId(id);
  };
  const [ProfilResults, setProfilResults] = useState([]);

  useEffect(() => {
    const fetchFind = async () => {
      const users = collection(db, 'users');
      const querySnapshot = await getDocs(users);

      const profiles = querySnapshot.docs.map((doc) => doc.data());
      setProfilResults(profiles);
      console.log(profiles)
    };

    fetchFind();
  }, []);

  return (
    <div className="container">
       {ProfilResults.map((profile, index) => (
        <FindProfil key={index} 
        displayName={profile.displayName}
        email={profile.email}
        photoURL={profile.photoURL} />
            ))};
     <div className="d-flex bg-white py-4 justify-content-around flex-wrap mt-3">
        <button
          type="button"
          className="btn d-flex align-items-center  btn-info text-white rounded-5"
          onClick={() => afficherContenu('contenuA')}
        >
          <div className="pe-3">
            <BsFillGridFill />
          </div>
          Posts
        </button>
        <button
          type="button"
          className="btn d-flex align-items-center  btn-info text-white rounded-5 active"
          onClick={() => afficherContenu('contenuB')}
        >
          <div className="pe-3">
            <MdOutlinePlayCircleFilled />
          </div>
          Vidéos
        </button>
        <button
          type="button"
          className="btn d-flex align-items-center btn-info text-white  rounded-5"
          onClick={() => afficherContenu('contenuC')}
        >
          <div className="pe-3">
            <BiSolidUserPin />
          </div>
          Mots clés
        </button>
      </div>
      {contenuId === 'contenuA' && <ContenuA />}
      {contenuId === 'contenuB' && <ContenuB />}
      {contenuId === 'contenuC' && <ContenuC />}
    </div>
  );
};

export default AutreProfile;
