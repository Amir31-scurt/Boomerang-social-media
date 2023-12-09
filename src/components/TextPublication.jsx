import React, { useState } from 'react';
import { FaShareFromSquare } from 'react-icons/fa6';
import { FcLike } from 'react-icons/fc';
import { PublishTable } from './UtilsData';

export const TextPublication = () => {
  // unitialisation du bouton Likes à 0

  const [likes, setLikes] = useState(0);
  const addLikes = (id) => {
    setLikes(likes + 1);
    console.log(id);
  };

  return (
    <div className="">
      {PublishTable.map((el, index) => (
        <div className="carte1 mb-4" key={index}>
          <div className="contenu-carte1">
            <div className="d-flex align-items-center justify-content-between">
              <div className="col-11 d-flex align-items-center">
                <div className="icone-carte me-3">{el.profile}</div>
                <div className="d-flex flex-column align-items-start">
                  <p className="fw-bold m-0 p-0">{el.nom}</p>
                  <p className="fs-6 text-secondary">{el.date}</p>
                </div>
              </div>

              <div className="">
                <button className="btn icone-actions">{el.suppression}</button>
              </div>
            </div>

            <div className="mt-4">
              {/* le texte a publié */}
              <div className="w-100 col-11 m-auto ">{el.publication}</div>
            </div>

            {/* Les icones d'action */}
            <div className="w-100 justify-content-between d-flex py-4 px-2">
              <div className="col-1">
                <button
                  className="btn icone-actions d-flex align-items-center"
                  onClick={() => addLikes()}
                >
                  <FcLike className="fs-3 me-2" />
                  <h1 className="fw-bold">{likes} </h1>
                  <p className="ms-1">Like</p>
                </button>
              </div>

              <div className="partager d-flex justify-content-end ">
                <button className="btn icone-actions">
                  <button className="btn publish px-2">
                    <FaShareFromSquare className="me-2" /> Share
                  </button>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
