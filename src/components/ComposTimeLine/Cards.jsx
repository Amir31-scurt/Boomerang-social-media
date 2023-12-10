import React, { useRef, useState } from "react";
import { FaRegUser, FaVideo } from "react-icons/fa";
import { FaRegImage, FaShareFromSquare } from "react-icons/fa6";
import MyButton from "../ComposTimeLine/MyButton";
import { PostText } from "../ComposTimeLine/UtilsData";
import { TableElems, TextTablePost } from "./TableElems";
import { PostCard } from "./PostCard";
import { format } from "date-fns";

export const Cards = () => {
  // l'etat du Modal par defaut
  const [isModalOpen, setModalOpen] = useState(false);
  // Ouverture du Modal
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  //Fermeture du Modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setImageUrl("");
    setDescript("");
  };

  // l'etat du Bouton Post Text par defaut
  const [afficheBtn, setAfficheBtn] = useState(false);

  // l'etat du Tableau par defaut du Post Card
  const [postCard, setPostCard] = useState(TableElems);
  const [postCardText, setPostCardText] = useState(TextTablePost);
  const DeletePost = (cardId) => {
    setPostCard((carte) => carte.filter((card) => card.id !== cardId));
  };

  // l'etat de l'input  de l'image
  const [imageUrl, setImageUrl] = useState("");
  const handleChangeImageUrl = (e) => {
    setImageUrl(e.target.value);
  };

  // l'etat de du text Area de l'la Description
  const [descript, setDescript] = useState("");
  const handleChangeDescription = (e) => {
    setDescript(e.target.value);
  };

  // l'etat de du text Area du Creat Post
  const [textPost, setTextPost] = useState("");
  const Changement = (e) => {
    setTextPost(e.target.value);
    if (textPost !== "") {
      setAfficheBtn(true);
    } else {
      setAfficheBtn(false);
    }
  };
  // L'evenement onClick sur le bouron Publier __
  const handleSubmit = () => {
    const newPostText = {
      id: new Date(),
      likes: 0,
      profile: <FaRegUser />,
      nom: "Recuperer Le nom",
      date: format(new Date(), "dd / MM / yyyy"),
      publication: textPost,
    };

    //Destructurer le tableau, puis ajouter un nouveau post
    setPostCard([...postCard, newPostText]);
    setTextPost(" ");
    setAfficheBtn(false);
  };

  //etat message d'erreur
  const [errorMessage, setErrorMessage] = useState("");

  const isValidImageUrl = (url) => {
    // Utilisez une expression régulière pour valider l'URL de l'image
    const imageUrlRegex = /(https?:\/\/.*\.)/i;
    return imageUrlRegex.test(url);
  };

  //_________________________  Ajouter un Post ___
  const handleAddPost = (e) => {
    e.preventDefault();

    if (imageUrl !== "" && isValidImageUrl(imageUrl)) {
      const newPost = {
        id: postCard[postCard.length - 1]?.id + 1 ?? 0,
        likes: 0,
        profile: <FaRegUser />,
        nom: "Recuperer Le nom",
        date: format(new Date(), "dd / MM / yyyy"),
        publication: imageUrl,
        description: descript,
      };

      //Destructurer le tableau, puis ajouter un nouveau post
      setPostCard([...postCard, newPost]);

      setImageUrl("");
      setDescript("");
      setModalOpen(false);
      setErrorMessage(""); // Réinitialiser le message d'erreur
    } else {
      setErrorMessage("Ajouter l'adresse de l'image");
    }
  };

  // Fonction pour comparer les dates de deux publications
  const compareDates = (postA, postB) => {
    const dateA = new Date(postA.date);
    const dateB = new Date(postB.date);

    return dateB - dateA; // Tri décroissant
  };

  // La Methode short Pour trier le tab
  const sortedPosts = postCard.slice().sort(compareDates);

  const modalStyle = {
    display: isModalOpen ? "block" : "none",
  };

  const DisplayTime = {
    display: afficheBtn ? "block" : "none",
  };

  return (
    <div>
      {Object.values(PostText({ handleSubmit })).map((elem, index) => (
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
                  value={textPost}
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
                <button className="icone-actions2 " onClick={handleOpenModal}>
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
          </div>
        </div>
      ))}

      {/*_________L'affichage Carte DEBUT  _____________________*/}

      <div className="milieu">
        {sortedPosts.map((card) => {
          return (
            <PostCard
              key={card.id}
              id={card.id}
              likes={card.likes}
              profile={card.profile}
              nom={card.nom}
              date={card.date}
              suppression={card.suppression}
              publication={card.publication}
              description={card.description}
              addLikes={() => card.likes}
              hadleDelete={(id) => {
                DeletePost(card.id);
              }}
              handleEdit={() => {
                alert(card.id);
              }}
            />
          );
        })}
      </div>
      {/*_________L'affichage Carte FIN___________________________________ */}

      {/*________________________Le Modal_ DEBUT____________________________ */}

      <div className="">
        <div className="modal-parant" style={modalStyle}>
          <div className="modal-contenu">
            {/* Le contenu du Modal */}

            <div className=" d-flex flex-column mb-5">
              <label htmlFor="imageUrl" className="ms-2 fs-4 text-start">
                * Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                placeholder="image URL ..."
                className="px-3 mt-3"
                name="nom"
                value={imageUrl}
                onChange={handleChangeImageUrl}
              />
              <small className="text-danger">{errorMessage}</small>
            </div>

            <div className="  d-flex flex-column mb-5">
              <label htmlFor="aria-modal" className="ms-2 fs-4 text-start">
                * Add a description
              </label>
              <textarea
                cols=""
                id="aria-modal"
                rows="5"
                className="area-modal"
                name="description"
                value={descript}
                onChange={handleChangeDescription}
              ></textarea>
            </div>

            {/* Les Ations du Modale */}

            <div className=" d-flex w-100 justify-content-end">
              <button className="close me-2" onClick={handleCloseModal}>
                Anuler
              </button>
              <MyButton
                arg1="publish"
                handleClick={handleAddPost}
                btnName="Publier"
              />
            </div>
          </div>
        </div>
      </div>

      {/*________________________Le Modal_ FIN _______________________*/}
    </div>
  );
};
