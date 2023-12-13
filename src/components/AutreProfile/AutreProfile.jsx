
import React, { useState } from "react";
import { IoLinkOutline } from "react-icons/io5";
import { BiMessageDots } from "react-icons/bi";
import { BsFillGridFill } from "react-icons/bs";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { BiSolidUserPin } from "react-icons/bi";

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

const AutreProfile= () => {
  const [contenuId, setContenuId] = useState("contenuA");

  const afficherContenu = (id) => {
    setContenuId(id);
  };

  return (
    <div className="container">
      <div className="position-relative bg-white w-100 justify-content-center align-items-center blanc  rounded-3 mt-5 p-4 shadow-lg">
        <div className="">
          <div className="plan bg-white  p-1">
            <img
              src="https://cdn.pixabay.com/photo/2020/12/26/13/19/christmas-background-5861438_640.jpg"
              className="w-100 haut rounded-4 img-fluid"
            />
          </div>
          <div>
            <div className="d-flex flex-wrap justify-content-around">
              <div className="colonne">
                <div className="bloc d-flex flex wrap justify-content-center">
                  <div className="profil ">
                    <img
                      src="https://cdn.pixabay.com/photo/2018/01/24/00/13/woman-3102823_640.jpg"
                      className="cursor-pointer border-4 border-white"
                      alt=""
                    />
                  </div>
                  <div className="nom-utilisateur flex-column text-center ms-4">
                    <h5>Christina Gomez</h5>
                    <p>chrisz@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex separe justify-content-center flex-wrap">
                  <div className="me-4">
                    <h3>521</h3>
                    <p>Post</p>
                  </div>
                  <div className="border border-secondary  h-50 me-2"></div>
                  <div className="me-4">
                    <h3>13.6K</h3>
                    <p>Followers</p>
                  </div>
                  <div className="border border-secondary h-50 me-2"></div>
                  <div className="me-4">
                    <h3>2K</h3>
                    <p>Following</p>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 me-5">
                <div>
                  <button
                    type="button"
                    className="btn d-flex align-items-center message btn-info text-white py-2 rounded-5 "
                  >
                    <div className="pe-3">
                      <IoLinkOutline />
                    </div>
                    Suivre
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn d-flex align-items-center message btn-outline-info text-info py-2 rounded-5"
                  >
                    <div className="pe-3">
                      <BiMessageDots />
                    </div>
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex bg-white py-4 justify-content-around flex-wrap mt-3">
        <button
          type="button"
          className="btn d-flex align-items-center  btn-info text-white rounded-5"
          onClick={() => afficherContenu("contenuA")}
        >
          <div className="pe-3">
            <BsFillGridFill />
          </div>
          Posts
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
      </div>
      {contenuId === "contenuA" && <ContenuA />}
      {contenuId === "contenuB" && <ContenuB />}
      {contenuId === "contenuC" && <ContenuC />}
    </div>
  );
};

export default AutreProfile;
