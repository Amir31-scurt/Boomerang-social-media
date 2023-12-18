import React, { useState } from 'react';
import { FcLike } from 'react-icons/fc';
import { PiShareNetworkBold } from 'react-icons/pi';
import { DropDown } from './DropDown';
import { FiEdit3 } from 'react-icons/fi';
import { FaCircleXmark, FaShare } from 'react-icons/fa6';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { FaEdit } from 'react-icons/fa';

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
  handleEditTexPub,
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

  // Moddifications du descriptions
  const [isEditing, setIsEditing] = useState(false);
  const handleEditDesc = () => {
    setIsEditing(true);
  };
  // // Moddifications du Publication Text
  const [isEditingText, setIsEditingTesxt] = useState(false);
  const handleEditText = () => {
    setIsEditingTesxt(true);
  };

  const handleFacebookShare = (url) => {
    const shareUrl = encodeURIComponent(url);
    // Ajoutez ici la logique pour ouvrir la fenêtre de partage, par exemple :
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      '_blank'
    );
  };
  const handleLinkedInShare = (url) => {
    const shareUrl = encodeURIComponent(url);
    // Ajoutez ici la logique pour ouvrir la fenêtre de partage, par exemple :
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      '_blank'
    );
  };

  const handleWhatsAppShare = () => {
    const whatsappMessage = encodeURIComponent(
      `Check out this post: ${publication}`
    );
    const url = `https://api.whatsapp.com/send?text=${whatsappMessage}`;
    window.open(url, '_blank');
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
              <div className="ms-0 mb-2">
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
                  handleEditTexPub={handleEditTexPub}
                  ModiferTextBouton={
                    <button
                      className={`dropdown-item d-flex align-items-center ${
                        isParagraphe ? 'd-flex' : 'd-none'
                      }`}
                      onClick={handleEditText}
                    >
                      <FaEdit className="fs-5 text-primary me-2" />
                      Modifier
                    </button>
                  }
                  ModiferDescriptBouton={
                    <button
                      className={`dropdown-item d-flex align-items-center ${
                        isParagraphe ? 'd-none' : 'd-flex'
                      }`}
                      onClick={handleEditDesc}
                    >
                      <FiEdit3 className="fs-5 text-primary me-2" />
                      Modifier
                    </button>
                  }
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
                  {/*=====================Modifier le text Publié======= */}

                  <div
                    className={`ModifierParent ${
                      isEditingText ? 'd-flex' : 'd-none'
                    }`}
                  >
                    <textarea
                      className="AreaModifTextPub"
                      name="area"
                      id="ModifArea"
                      value={publication} // Utilisez la valeur de la Publication du post
                      onChange={(e) => handleEditTexPub(e.target.value)}
                    ></textarea>
                    <div className="d-flex flex-column">
                      <button
                        className="cancelBtnModif p-2 mt-4"
                        onClick={() => setIsEditingTesxt(false)}
                      >
                        <FaCircleXmark
                          className="text-danger fs-1"
                          onClick={() => setIsEditingTesxt(false)}
                        />
                      </button>
                      <button
                        className="SaveBtnModif p-2 my-3"
                        onClick={() => {
                          setIsEditingTesxt(false);
                          toast.success('Modification du Text Reussie !', {
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

                  {/*=====================Modifier le text Publié======= */}
                  <p
                    className={`w-100 px-3 text-secondary fst-italic fs-5 text-break ${
                      isEditingText ? 'd-none' : 'd-flex'
                    }`}
                    onChange={(e) => handleEditTexPub(e.target.value)}
                  >
                    {publication}
                  </p>
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
            <div
              className={`ContainerDESC ${isEditing ? 'd-none' : 'd-flex'}
             ${isParagraphe ? 'd-none' : 'd-flex'}`}
            >
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
                      onClick={handleWhatsAppShare}
                    >
                      <FaShare className="fs-3 text-success" />
                      <p className="fs-6 mt-3 ms-2 fw-bold text-success">
                        WhatsApp
                      </p>
                    </button>
                  </li>
                  <li className="mt-2">
                    <button
                      className="partagerBtn px-2 justify-content-center w-100 d-flex align-items-center "
                      onClick={() => handleFacebookShare(publication)}
                    >
                      <FaShare className="fs-3 text-primary" />
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
