import React, { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { FaRegUser, FaVideo } from "react-icons/fa";
import { PiShareNetworkBold } from "react-icons/pi";
import { FcLike } from "react-icons/fc";
import { FaRegImage, FaShareFromSquare } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PublishTable } from "../ComposTimeLine/UtilsData";

export const TextPublication = () => {
  // unitialisation du bouton Likes à 0

  const [likes, setLikes] = useState(0);
  const addLikes = () => {
    setLikes(likes + 1);
  };

  //return (
  //   <div className="">
  //     {PublishTable.map((el, index) => (
  //       <div className="carte1 mb-4" key={index}>
  //         <div className="contenu-carte1">
  //           <div className="d-flex align-items-center justify-content-between">
  //             <div className="PartieProfil">
  //               <div className="icone-carte me-3">{el.profile}</div>
  //               <div>
  //                 <p className="fw-bold text-secondary mb-0">{el.nom}</p>
  //                 <p className="text-sm text-secondary mb-0">{el.date}</p>
  //               </div>
  //             </div>
  //             <button className="icone-actions">{el.suppression}</button>
  //           </div>

  //           <div className="mt-4">
  //             {/* le texte a publié */}
  //             <div className="w-100 rounded-3  m-auto ">{el.publication}</div>
  //           </div>
  //           <div className="mt-3 description">
  //             {el.description}
  //           </div>

  //           {/* Les icones d'action */}
  //           <div className="w-100 justify-content-between d-flex pb-2 px-2">
  //             <div className="">
  //               <button
  //                 className="icone-actions d-flex align-items-center "
  //                 onClick={() => addLikes()}
  //               >
  //                 <FcLike className=" fs-2 me-2" />
  //                 <h1 className="fw-bold pt-2 fs-6">{likes} </h1>
  //                 <p className="ms-1 pt-2 pt-3">Like</p>
  //               </button>
  //             </div>

  //             <div className="partager d-flex justify-content-end ">
  //               <div className="d-flex contenuPartage">
  //                 <button className="partagerBtn px-2 ">
  //                   <PiShareNetworkBold className="fs-3" /> Partager
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // );
};
