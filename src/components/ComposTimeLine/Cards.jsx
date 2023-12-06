import React, { useRef, useState } from "react";
import { FaRegUser, FaVideo } from "react-icons/fa";
import { FaRegImage, FaShareFromSquare } from "react-icons/fa6";
import { FiEdit3 } from "react-icons/fi";
import { UnModal } from "../ComposTimeLine/UnModal";
import MyButton from "../ComposTimeLine/MyButton";
import { Test } from "../ComposTimeLine/UtilsData";

export const Cards = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [afficheBtn, setAfficheBtn] = useState(false);

  //_________________________  Ouverture Du modal _________//
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  //_________________________  Fermeture Du modal _________//

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  //_________________________ Affichage du bouton Publier_________//
  const Changement = (e) => {
    if (e.target.value !== "") {
      setAfficheBtn(true);
    } else {
      setAfficheBtn(false);
    }
  };

  //____________ L'evenement onClick sur le bouron Publier _________//
  const handleSubmit = () => {
    alert("Modal non ouvert");
  };

  const modalStyle = {
    display: isModalOpen ? "block" : "none",
  };

  const DisplayTime = {
    display: afficheBtn ? "block" : "none",
  };

  return (
    <div>
      {/* <Probleme handleSubmit={handleSubmit}/> */}
      {Object.values(Test({ handleSubmit })).map((elem, index) => (
        <div className="carte1 mb-4" key={index}>
          {/*Pour créer un post */}
          <div className="contenu-carte1">
            <div className="d-flex align-items-center">
              <div className="icone-carte me-3">{elem.icone}</div>
              <p className="fw-bold text-secondary mt-3">{elem.text1}</p>
            </div>

            <div className="text-post mt-4">
              <div className="m-4">{elem.container1}</div>

              {/* le texte a publié */}
              <div className="w-100 aria-content">
                <textarea
                  onChange={Changement}
                  name=""
                  id="text-aria"
                  className="w-100"
                  placeholder="What's your mind ?"
                ></textarea>
              </div>
            </div>

            {/* Les icones d'action */}
            <div className="w-100 d-flex justify-content-between align-items-center py-3 px-2">
              <div className="">
                <button
                  className="icone-actions2 "
                  onClick={handleOpenModal}
                >
                  <FaRegImage className="fs-2 PhotoPub" />
                  <p className="ps-2 pt-3">Photo / Vidéo</p>
                </button>
              </div>

              <div className="">
                <div className="" style={DisplayTime}>
                  {elem.bouton3}
                </div>
              </div>
            </div>

            <div className="">
              <UnModal
                modalStyle={modalStyle}
                handleCloseModal={handleCloseModal}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
