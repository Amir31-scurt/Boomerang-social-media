 
import React, { useState} from 'react';
import { BsFillGridFill } from 'react-icons/bs';
import { MdOutlinePlayCircleFilled } from 'react-icons/md';
import { BiSolidUserPin } from 'react-icons/bi';

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
const ContenuB = () => (
  <div className="container py-4 rounded-3 imagespublié mt-3 ">
    <div>
        <iframe width="100%" height="180" src="https://www.youtube.com/embed/3MX_wrisCJ8?si=ClKP2pdNxSGSU6X-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
const ContenuC = () => <div>Contenu C</div>;

function ObtenirDonnee () {
  const [contenuId, setContenuId] = useState("contenuA");

  const [estSuivi, setEstSuivi] = useState(false);

  // const handleClickSuivre = () => {
  //   // Mettez à jour l'état de suivi lors du clic sur le bouton
  //   setEstSuivi(!estSuivi);
  // };

  const afficherContenu = (id) => {
    setContenuId(id);
  };

  <div className="d-flex bg-white py-4 justify-content-around flex-wrap mt-3">
    <button
      type="button"
      className="btn d-flex align-items-center  btn-info text-white rounded-5"
      onClick={() => afficherContenu("contenuA")}
    >
      <div className="pe-3">
        <BsFillGridFill />
      </div>
      Photos
    </button>
    <button
      type="button"
      className="btn d-flex align-items-center  btn-info text-white rounded-5 active"
      onClick={() => afficherContenu("contenuB")}
    >
      <div className="pe-3">
        <MdOutlinePlayCircleFilled />
      </div>
      Vidéos
    </button>
    <button
      type="button"
      className="btn d-flex align-items-center btn-info text-white  rounded-5"
      onClick={() => afficherContenu("contenuC")}
    >
      <div className="pe-3">
        <BiSolidUserPin />
      </div>
      Mots clés
    </button>
  </div>;
  {
    contenuId === "contenuA" && <ContenuA />;
  }
  {
    contenuId === "contenuB" && <ContenuB />;
  }
  {
    contenuId === "contenuC" && <ContenuC />;
  }
};

export default ObtenirDonnee;