import React, { useState } from 'react';
import { FaVideo } from 'react-icons/fa';
import { FaRegImage } from 'react-icons/fa6';
import { UnModal } from './UnModal';
import { TableCards } from './UtilsData';

export const Cards = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [afficheBtn, setAfficheBtn] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const Changement = (e) => {
    if (e.target.value !== '') {
      setAfficheBtn(true);
    } else {
      setAfficheBtn(false);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const modalStyle = {
    display: isModalOpen ? 'block' : 'none',
  };

  const DisplayTime = {
    display: afficheBtn ? 'block' : 'none',
  };

  return (
    <div>
      {TableCards.map((elem, index) => (
        <div className="carte1 mb-4" key={index}>
          {/*Pour créer un post */}
          <div className="contenu-carte1">
            <div className="d-flex align-items-center">
              <div className="icone-carte me-3">{elem.icone}</div>
              <div>
                <p className="fw-bold text-gray-500">{elem.text1}</p>
              </div>
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
            <div className="w-100 py-5 px-2 d-flex gap-3">
              <div className="col-1">
                <button className="btn" onClick={handleOpenModal}>
                  <FaVideo className="fs-3 text-danger" />
                </button>
              </div>
              <div className="col-1">
                <button className="btn" onClick={handleOpenModal}>
                  <FaRegImage className="fs-3 text-success" />
                </button>
              </div>

              <div className="partager d-flex justify-contet-center ">
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
