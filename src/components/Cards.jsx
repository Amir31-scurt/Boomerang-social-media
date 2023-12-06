import React, { useRef, useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { FaRegUser, FaVideo } from "react-icons/fa";  
import { FaRegImage, FaShareFromSquare } from "react-icons/fa6";
import { UnModal } from "./UnModal";

import { TableCards } from "./UtilsData";

export const Cards = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [afficheBtn, setAfficheBtn] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const Changement = (e) => {
    if (e.target.value !== "") {
      setAfficheBtn(true)
    } else {
      setAfficheBtn(false)
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const modalStyle = {
    display: isModalOpen ? "block" : "none",
  };

  const DisplayTime = {
    display: afficheBtn ? "block" : "none",
  };

  return (
    <div>
      {TableCards.map((elem, index) => (
        <div className="carte1 mb-4" key={index}>
          {/*Pour créer un post */}
          <div className="contenu-carte1">
            <div className="flex items-center">
              <div className="icone-carte me-3">{elem.icone}</div>
              <div>
                <p className="font-bold text-gray-500">{elem.text1}</p>
              </div>
            </div>

            <div className="text-post mt-4">
              <div className="m-4">{elem.container1}</div>

              {/* le texte a publié */}
              <div className="w-full aria-content">
                <textarea
                  onChange={Changement}
                  name=""
                  id="text-aria"
                  className="w-full"
                  placeholder="What's your mind ?"
                ></textarea>
              </div>
            </div>

            {/* Les icones d'action */}
            <div className="w-full justify-between flex py-5 px-2">
              <div className="W-1/12">
                <button className="icone-actions" onClick={handleOpenModal}>
                  <FaVideo className="text-3xl text-[#6d3]" />
                </button>
              </div>
              <div className="W-1/12">
                <button className="icone-actions" onClick={handleOpenModal}>
                  <FaRegImage className="text-3xl text-[#6d35e6]" />
                </button>
              </div>

              <div className="partager flex justify-center ">
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
