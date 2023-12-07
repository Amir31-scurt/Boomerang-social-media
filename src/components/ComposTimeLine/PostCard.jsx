
import React from 'react'
import { PiShareNetworkBold } from "react-icons/pi";
import { FcLike } from "react-icons/fc";
import { DropDown } from './DropDown';

export const PostCard = ({ publication, addLikes, nom, profile, date, description, likes, id, hadleDelete, }) => {
  


  return (
    <div className="">
      <div className="carte1 mb-4">
        <div className="contenu-carte1">
          <div className="d-flex align-items-center justify-content-between">
            <div className="PartieProfil">
              <div className="icone-carte me-3">{profile}</div>
              <div className='ms-0'>
                <p className="fw-bold text-secondary mb-0">{nom}</p>
                <p className=" text-secondary mb-0">{date}</p>
              </div>
            </div>
            <button className="icone-actions">
              <DropDown handleDelete={hadleDelete} />
            </button>
          </div>

          <div className="mt-4">
            {/* le texte a publié */}
            <div className="w-100 rounded-3  m-auto ">
              <img src={publication} alt="images" className="w-100 rounded-3" />
            </div>
          </div>
          <div className="mt-3 description">{description}</div>

          {/* Les icones d'action */}
          <div className="w-100 justify-content-between d-flex pb-2 px-2">
            <div className="">
              <button
                className="icone-actions d-flex align-items-center "
                onClick={() => addLikes(id)}
              >
                <FcLike className=" fs-2 me-2" />
                <h1 className="fw-bold pt-2 fs-6">{likes} </h1>
                <p className="ms-1 pt-2 pt-3">Like</p>
              </button>
            </div>

            <div className="partager d-flex justify-content-end ">
              <div className="d-flex contenuPartage">
                <button className="partagerBtn px-2 ">
                  <PiShareNetworkBold className="fs-3" /> Partager
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
