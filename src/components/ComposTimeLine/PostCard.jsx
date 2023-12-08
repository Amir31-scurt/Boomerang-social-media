import React from "react";
import { PiShareNetworkBold } from "react-icons/pi";
import { FcLike } from "react-icons/fc";
import { DropDown } from "./DropDown";

export const PostCard = ({
  publication,
  addLikes,
  nom,
  profile,
  date,
  description,
  likes,
  id,
  hadleDelete,
}) => {
  const isYouTubeLink =
    publication &&
    (publication.toLowerCase().includes("youtube.com") ||
      publication.toLowerCase().includes("youtu.be"));

  const isMP4Link = publication && publication.toLowerCase().endsWith(".mp4");

  const isParagraphe =
    publication &&
    !publication.toLowerCase().includes("youtube.com") &&
    !publication.toLowerCase().includes("youtu.be") &&
    !publication.toLowerCase().includes(".mp4") &&
    !publication.toLowerCase().includes(".jpg") &&
    !publication.toLowerCase().includes(".png");

  return (
    <div className="">
      <div className="carte1 mb-4">
        <div className="contenu-carte1">
          <div className="d-flex align-items-center justifier-content-between">
            <div className="PartieProfil">
              <div className="icone-carte me-3">{profile}</div>
              <div className="ms-0">
                <p className="fw-bold text-secondary mb -0">{nom}</p>
                <p className=" text-secondary mb-0">{date}</p>
              </div>
            </div>
            <button className="icone-actions">
              <DropDown handleDelete={hadleDelete} />
            </button>
          </div>
          <div className="mt-4">
            {/* le texte à publié */}
            <div className=" GrosContainerPost arrondi-3 m-auto ">
              {isYouTubeLink ? (
                <iframe
                  src={publication}
                  controls
                  width="100%"
                  height="300px"
                  border-radius="15px"
                  className="w-100 arrondi-3"
                />
              ) : isMP4Link ? (
                <video src={publication} controls className="w-100 arrondi-3" />
              ) : isParagraphe ? (
                <p className="fw-bold text-secondary containerTextPost">
                  {publication}
                </p>
              ) : (
                <img
                  src={publication}
                  alt="images"
                  className="w-100 arrondi-3"
                />
              )}
            </div>
          </div>
          <div className="mt-3 description">{description}</div>
          {/* Les icônes d'action */}
          <div className="w-100 justifier-content-between d-flex pb-2 px-2">
            <div className="">
              <button
                className=" icone-actions d-flex align-items-center "
                onClick={() => addLikes(id)}
              >
                <FcLike className=" fs-2 me-2" />
                <h1 className="fw-bold pt-2 fs-6">{likes}</h1>
                <p className="ms-1 pt-2 pt-3">J'aime</p>
              </button>
            </div>
            <div className="partager d-flex justifier-content-end ">
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
