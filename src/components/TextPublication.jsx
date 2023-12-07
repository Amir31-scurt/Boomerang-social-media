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
            <div className="flex items-center justify-between">
              <div className="w-11/12 flex items-center">
                <div className="icone-carte me-3">{el.profile}</div>
                <div>
                  <p className="font-bold text-gray-500">{el.nom}</p>
                  <p className="text-sm text-gray-400">{el.date}</p>
                </div>
              </div>

              <div className="">
                <button className="icone-actions">{el.suppression}</button>
              </div>
            </div>

            <div className="mt-4">
              {/* le texte a publié */}
              <div className="w-full w-11/12 m-auto ">{el.publication}</div>
            </div>

            {/* Les icones d'action */}
            <div className="w-full justify-between flex py-4 px-2">
              <div className="W-1/12">
                <button
                  className="icone-actions flex items-center "
                  onClick={() => addLikes()}
                >
                  <FcLike className="text-3xl me-2" />
                  <h1 className="font-bold">{likes} </h1>
                  <p className="ms-1">Like</p>
                </button>
              </div>

              <div className="partager flex justify-center ">
                <button className="icone-actions">
                  <button className="publish px-2">
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
