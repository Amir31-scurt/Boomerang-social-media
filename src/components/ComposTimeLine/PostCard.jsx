import React, { useState } from 'react';
import { FcLike } from 'react-icons/fc';
import { PiShareNetworkBold } from 'react-icons/pi';
import { DropDown } from './DropDown';
import { FaCircleXmark } from 'react-icons/fa6';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

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
  handleEdit,
  currentUser,
}) => {
  const isYouTubeLink =
    publication &&
    (publication.toLowerCase().includes('youtube.com') ||
      publication.toLowerCase().includes('youtu.be'));

  const isMP4Link = publication && publication.toLowerCase().endsWith('.mp4');

  const isParagraphe =
    publication &&
    !publication.toLowerCase().includes('youtube.com') &&
    !publication.toLowerCase().includes('youtu.be') &&
    !publication.toLowerCase().includes('.mp4') &&
    !publication.toLowerCase().includes('.jpg') &&
    !publication.toLowerCase().includes('.jpeg') &&
    !publication.toLowerCase().includes('.png');

  const isFirebaseVideo =
    publication &&
    publication
      .toLowerCase()
      .includes('https://firebasestorage.googleapis.com') &&
    publication.toLowerCase().includes('.mp4');

  const [isLiked, setIsLiked] = useState(false); //State Like

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      publication
    )}`;
    window.open(url, '_blank');
  };

  const handleLinkedInShare = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      publication
    )}`;
    window.open(url, '_blank');
  };

  // Moddifications du descriptions
  const [isEditing, setIsEditing] = useState(false);
  const handleEditDesc = () => {
    setIsEditing(true);
  };
  return (
    <div className="">
      <div className="carte1 mb-4">
        <div className="contenu-carte1">
          <div className="d-flex align-items-center justifier-content-between">
            <div className="PartieProfil">
              <input
                type="image"
                alt="PhotoProfile"
                className="icone-carte me-3"
                src={profile}
              />
              <div className="ms-0">
                <p className="fw-bold text-secondary mt-2 d-flex flex-column m-0 p-0 align-items-start fs-6">
                  {nom} <br />
                  <span className="text-secondary dato mb-0">{date}</span>
                </p>
              </div>
            </div>
            {currentUser.uid === id && (
              <button className="icone-actions">
                <DropDown
                  handleDelete={hadleDelete}
                  handleEditDesc={handleEditDesc}
                />
              </button>
            )}
          </div>
          <div className="mt-4 milieuContenu">
            {/* le texte à publié */}
            <div className=" GrosContainerPost rounded-3 m-auto ">
              {isYouTubeLink ? (
                <iframe
                  src={publication}
                  controls
                  width="100%"
                  height="490px"
                  border-radius="15px"
                  className="w-100 rounded-3 videoo ParantText2"
                />
              ) : isMP4Link || isFirebaseVideo ? (
                <video
                  src={publication}
                  controls
                  className="w-100 rounded-3 videoo ParantText2"
                />
              ) : isParagraphe ? (
                <div className="">
                  <textarea
                    value={publication}
                    id="text-aria3"
                    className="w-100 ParantText"
                  ></textarea>
                </div>
              ) : (
                <img
                  src={publication}
                  alt="images"
                  className="w-100 rounded-3 imageo ParantText2"
                />
              )}
            </div>
            <div
              className={`ModifierParent ${isEditing ? 'd-flex' : 'd-none'}`}
            >
              <textarea
                className="AreaModifDesc"
                name="area"
                id="ModifArea"
                value={description} // Utilisez la valeur de la description du post
                onChange={(e) => handleEdit(e.target.value)}
              ></textarea>
              <div className="d-flex flex-column">
                <button
                  className="cancelBtnModif p-2"
                  onClick={() => setIsEditing(false)}
                >
                  <FaCircleXmark
                    className="text-danger fs-1"
                    onClick={() => setIsEditing(false)}
                  />
                </button>
                <button
                  className="SaveBtnModif p-2"
                  onClick={() => {
                    setIsEditing(false);
                    toast.success('Modification Reussie !', {
                      position: 'top-right',
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: 'colored',
                    });
                  }}
                >
                  <BsFillCheckCircleFill className="fs-1" />
                </button>
              </div>
            </div>
            <div className={`ContainerDESC ${isEditing ? 'd-none' : 'd-flex'}`}>
              <p className="OverfParag mt-3 text-break">{description}</p>
            </div>
          </div>
          {/* Les icônes d'action */}
          <div className="w-100 justify-content-between d-flex pb-2 px-2">
            <div className="">
              <button
                className="icone-actions d-flex align-items-center"
                onClick={() => {
                  addLikes(id);
                  setIsLiked(!isLiked); // Basculez l'état du like
                }}
              >
                <FcLike className={`fs-2 me-2 ${isLiked ? 'liked' : 'vide'}`} />
                <h1 className="fw-bold pt-2 fs-6">{likes}</h1>
                <p className="ms-1 pt-2 pt-3">Like</p>
              </button>
            </div>
            <div className="partager d-flex justify-content-end">
              <div class="dropdown border border-0 PatrageReseau">
                {/* <div className="d-flex contenuPartage"></div> */}
                <button
                  className=" border border-0 fs-2 bouton1a partagerBtn px-3"
                  data-bs-toggle="dropdown"
                >
                  <PiShareNetworkBold className="fs-3" />
                  <p className="fs-6 mt-3">Partager</p>
                </button>
                <ul class="dropdown-menu dropDownMenu2">
                  <li>
                    <button
                      className="partagerBtn w-100 justify-content-center px-2 d-flex align-items-center"
                      onClick={handleLinkedInShare}
                    >
                      <PiShareNetworkBold className="fs-3 text-success" />
                      <p className="fs-6 mt-3 ms-2 fw-bold text-info">
                        LinkedIn
                      </p>
                    </button>
                  </li>
                  <li className="mt-2">
                    <button
                      className="partagerBtn px-2 justify-content-center w-100 d-flex align-items-center "
                      onClick={handleFacebookShare}
                    >
                      <PiShareNetworkBold className="fs-3 text-success" />
                      <p className="fs-6 mt-3 ms-2 fw-bold text-primary">
                        Facebook
                      </p>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
