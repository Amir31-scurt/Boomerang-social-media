import React, { useContext, useEffect, useState } from 'react';
import { FaRegImage } from 'react-icons/fa6';
import MyButton from '../ComposTimeLine/MyButton';
import { PostText } from '../ComposTimeLine/UtilsData';
import { PostCard } from './PostCard';
import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import { AuthContext } from '../../contexte/authContext';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { DB, auth } from '../../config/firebase-config';
import { storage } from '../../config/firebase-config';
import { ClipLoader, PulseLoader } from 'react-spinners';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
} from 'firebase/firestore';

export const Cards = () => {
  const { user, currentUser } = useContext(AuthContext);
  // l'etat du Modal par defaut
  const [isModalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // Ouverture du Modal
  const handleOpenModal = () => {
    setModalOpen(true);
  };

  //Fermeture du Modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setImageUrl('');
    setDescript('');
    setSelectedFile(null); // Réinitialiser la sélection de fichier
  };

  // L'etat de like a un poste
  const [postLikes, setPostLikes] = useState({});
  // l'etat du Bouton Post Text par defaut
  const [afficheBtn, setAfficheBtn] = useState(false);

  // l'etat du Tableau par defaut du Post Card
  const [postCard, setPostCard] = useState([]);

  // Poste Delete
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  // Delete Poste
  const DeletePost = (documentId) => {
    setPostToDelete(documentId);
    setConfirmModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (postToDelete) {
      await deleteDoc(doc(DB, 'posts', postToDelete));
      setPostCard((cards) => cards.filter((card) => card.id !== postToDelete));
      setConfirmModalOpen(false);
      setPostToDelete(null);
    }
  };

  // l'etat de l'input  de l'image
  const [imageUrl, setImageUrl] = useState('');
  const handleChangeImageUrl = (e) => {
    setImageUrl(e.target.value);
  };

  // l'etat de du text Area de l'la Description
  const [descript, setDescript] = useState('');
  const handleChangeDescription = (e) => {
    setDescript(e.target.value);
  };

  // l'etat de du text Area du Creat Post
  const [textPost, setTextPost] = useState('');
  const Changement = (e) => {
    setTextPost(e.target.value);
    if (e.target.value !== '') {
      setAfficheBtn(true);
    } else {
      setAfficheBtn(false);
    }
  };

  // L'evenement onClick sur le bouron Publier Text __
  const handleSubmit = async () => {
    const docRef = await addDoc(collection(DB, 'posts'), {
      userID: user.uid,
      likes: 0,
      profile: user.photoURL,
      nom: user.displayName,
      date: format(new Date(), 'dd/MM/yyyy - HH:mm:ss'),
      publication: textPost,
    });

    const newPostText = {
      userID: user.uid,
      likes: 0,
      profile: user.photoURL,
      nom: user.displayName,
      date: format(new Date(), 'dd/MM/yyyy - HH:mm:ss'),
      publication: textPost,
    };

    //Destructurer le tableau, puis ajouter un nouveau post
    setPostCard([newPostText, ...postCard]);
    setTextPost('');
    toast.success('Publication réussie !', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

    setAfficheBtn(false);
  };

  //etat message d'erreur
  const [errorMessage, setErrorMessage] = useState('');

  const isValidImageUrl = (url) => {
    // Utilisez une expression régulière pour valider l'URL de l'image
    const imageUrlRegex = /(https?:\/\/.*\.)/i;
    return imageUrlRegex.test(url);
  };

  //=============== Le bouton Type File ===debut=========

  // Ajouter un nouvel état
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setSelectedFile(selectedFile);
      setLoading(true);

      // Stockage local du fichier
      const storageRef = ref(storage, `ImagesDePost/${selectedFile.name}`);

      // Ajout du fichier dans le stockage Firebase
      uploadBytes(storageRef, selectedFile).then(() => {
        // Obtenir l'URL de téléchargement du fichier stocké dans le stockage Firebase
        getDownloadURL(storageRef).then((url) => {
          // Ajouter le fichier à la publication dans Firestore
          setImageUrl(url);
          setSelectedFile(null); // Réinitialiser la sélection de fichier
          setLoading(false);
        });
      });
    }
  };

  //================ Le bouton Type File===fin=========

  const handleAddPost = async () => {
    if (selectedFile) {
      // Stockage local du fichier
      const storage = getStorage();
      const storageRef = storage.ref();
      const fileRef = storageRef.child(selectedFile.name);

      // Obtenir l'URL de téléchargement du fichier stocké localement
      fileRef.put(selectedFile).then(() => {
        fileRef.getDownloadURL().then((url) => {});
      });

      // Ajoutez le fichier à la publication dans Firestore
      await addDoc(collection(DB, 'posts'), {
        userID: user.uid,
        likes: 0,
        profile: user.photoURL,
        nom: user.displayName,
        date: format(new Date(), 'dd/MM/yyyy - HH:mm:ss'),
        publication: imageUrl || URL.createObjectURL(selectedFile), // Utilisez l'URL de l'image si disponible
        description: descript,
      });

      setErrorMessage('');
    } else if ((imageUrl !== '' && isValidImageUrl(imageUrl)) || selectedFile) {
      // Si une URL d'image est fournie
      // Ajoutez l'URL de l'image à la publication dans Firestore
      try {
        await addDoc(collection(DB, 'posts'), {
          userID: user.uid,
          likes: 0,
          profile: user.photoURL,
          nom: user.displayName, // après on va enlever les griff('')
          date: format(new Date(), 'dd/MM/yyyy - HH:mm:ss'),
          publication: imageUrl || URL.createObjectURL(selectedFile),
          description: descript,
        });
        const newPost = {
          userID: user.uid,
          likes: 0,
          profile: user.photoURL,
          nom: user.displayName,
          date: format(new Date(), 'dd/MM/yyyy - HH:mm:ss'),
          publication: imageUrl || URL.createObjectURL(selectedFile),
          description: descript,
        };

        // Destructurer le tableau, puis ajouter un nouveau post
        setPostCard([newPost, ...postCard]);

        setImageUrl('');
        setDescript('');
        setModalOpen(false);
        toast.success('Publication réussie !', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });

        setErrorMessage(''); // Réinitialiser le message d'erreur
        setSelectedFile(null); // Réinitialiser le fichier sélectionné
        setImageUrl('');
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    } else {
      // Gérez le cas où aucun fichier ou URL n'est fourni
      setErrorMessage("Ajouter l'adresse de l'image ou de la vidéo");
    }
  };

  //===================================================================== Like post const //
  // Handle like function
  const handleLikePost = async (postId) => {
    try {
      const postDocRef = doc(DB, 'posts', postId);
      const postDocSnapshot = await getDoc(postDocRef);

      if (postDocSnapshot.exists()) {
        const postData = postDocSnapshot.data();
        const currentLikes = postData.likes || 0; // Get current likes count or default to 0
        const currentUserLiked =
          postData.usersLiked && postData.usersLiked.includes(user.uid);

        let updatedLikes = currentLikes;
        let updatedUsersLiked = postData.usersLiked || [];

        if (currentUserLiked) {
          // If the user has already liked the post, consider it as a dislike
          updatedLikes -= 1;
          updatedUsersLiked = updatedUsersLiked.filter(
            (userId) => userId !== user.uid
          );
        } else {
          // If the user hasn't liked the post, consider it as a like
          updatedLikes += 1;
          updatedUsersLiked.push(user.uid);
        }

        // Update Firestore with new likes count and users who liked the post
        await updateDoc(postDocRef, {
          likes: updatedLikes,
          usersLiked: updatedUsersLiked,
        });

        // Update local state to reflect the new likes count
        setPostLikes((prevLikes) => ({
          ...prevLikes,
          [postId]: updatedLikes,
        }));
      }
    } catch (error) {
      console.error('Error toggling like/dislike: ', error);
    }
  };

  //====================================================
  // Fonction pour comparer les dates de deux publications
  const compareDates = (postA, postB) => {
    const dateA = new Date(postA.date);
    const dateB = new Date(postB.date);

    return dateB - dateA; // Tri décroissant
  };

  //useEffect pour effectuer une requête Firestore lors du montage du composant
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(DB, 'posts'), orderBy('date', 'desc')), // Ordering by 'date' field in descending order
      (snapshot) => {
        const posts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPostCard(posts);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  //===================================================

  // La Methode sort Pour trier le tab

  const sortedPosts = postCard.slice().sort(compareDates);
  useEffect(() => {
    const fetchLikes = async () => {
      const likesData = {};

      sortedPosts.forEach(async (post) => {});
      setPostLikes(likesData);
    };
    fetchLikes();
  }, []);

  const modalStyle = {
    display: isModalOpen ? 'block' : 'none',
  };

  const DisplayTime = {
    display: afficheBtn ? 'block' : 'none',
  };

  //================ Le bouton ModifierDescription Funtions===DEBUT===

  const handleEdit = (postId, newDescription) => {
    // Mettez à jour la description du post dans le tableau state
    setPostCard((posts) =>
      posts.map((post) =>
        post.id === postId ? { ...post, description: newDescription } : post
      )
    );

    // Mettre à jour la description du post dans Firestore
    const postRef = doc(DB, 'posts', postId);
    updateDoc(postRef, {
      description: newDescription,
    })
      .then(() => {
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  };
  //================ Le bouton ModifierBescription Funtions===FIN=========

  //================ Le bouton ModifierTextPUB ===DEBUT=========
  const handleEditTexPub = (postId, newTextPub) => {
    // Mettez à jour la description du post dans le tableau state
    setPostCard((posts) =>
      posts.map((post) =>
        post.id === postId ? { ...post, publication: newTextPub } : post
      )
    );

    // Mettre à jour la publicationText du post dans Firestore
    const postRef = doc(DB, 'posts', postId);
    updateDoc(postRef, {
      publication: newTextPub,
    })
      .then(() => {
        console.log('Document successfully updated!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  };
  //================ Le bouton ModifierText Pub ===FIN=========

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
              <input
                className="m-2 mx-3 minilog"
                type="image"
                src={user.photoURL}
              />

              {/* le texte a publié */}
              <div className="w-100 aria-content">
                <textarea
                  value={textPost}
                  onChange={Changement}
                  name=""
                  id="text-aria"
                  className="w-100"
                  placeholder="À quoi penses-tu ?"
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
          <ConfirmationModal
            isOpen={isConfirmModalOpen}
            onClose={() => setConfirmModalOpen(false)}
            onConfirm={handleConfirmDelete}
          >
            <p>Etes-vous sur de vouloir supprimer cet poste?</p>
          </ConfirmationModal>
        </div>
      ))}

      {/*_________L'affichage Carte DEBUT  _____________________*/}

      {/* L'affichage des données de Firestore */}
      <div className="milieu">
        {sortedPosts.map((card) => (
          <PostCard
            key={card.id}
            id={card.userID}
            likes={card.likes}
            addLikes={() => handleLikePost(card.id)}
            profile={card.profile}
            nom={card.nom}
            date={card.date}
            suppression={card.suppression}
            publication={card.publication}
            description={card.description}
            hadleDelete={() => {
              DeletePost(card.id);
            }}
            currentUser={currentUser}
            handleEdit={(newDescription) => handleEdit(card.id, newDescription)}
            handleEditTexPub={(newTextPub) =>
              handleEditTexPub(card.id, newTextPub)
            }
          />
        ))}
      </div>
      {/*_________L'affichage Carte FIN___________________________________ */}

      {/*________________________Le Modal_ DEBUT____________________________ */}

      <div className="">
        <div className="modal-parant" style={modalStyle}>
          <div className="modal-contenu">
            {/* Le contenu du Modal */}
            <div className="w-100">
              <h3 className="text-center fst-italic fw-bold">
                Créer une publication
              </h3>
            </div>
            <div className=" d-flex flex-column">
              <label htmlFor="imageUrl" className="ms-2 fs-5 my-3 text-start ">
                Image / Vidéo URL *
              </label>
              <input
                type="text"
                id="imageUrl"
                placeholder="image / Vidéo URL ..."
                className="px-3 "
                name="nom"
                value={imageUrl}
                onChange={handleChangeImageUrl}
              />
              <small className="text-danger BlsSmall">{errorMessage}</small>
            </div>

            <div className="  d-flex flex-column mb-4">
              <label htmlFor="aria-modal" className="mb-2 fs-5 text-start">
                Ajouter Une Description
              </label>
              <textarea
                cols=""
                id="aria-modal"
                rows="5"
                className="area-modal ps-3  "
                name="description"
                value={descript}
                onChange={handleChangeDescription}
                placeholder="La description..."
              ></textarea>
            </div>

            <div className="BoutonFile py-3 mb-2">
              <div className="d-flex w-100 align-items-center flex-column justify-content-center">
                <label for="fileInput" class="custom-button1 fs-5 p-3">
                  Choisir Image / vidéo
                </label>
                <div className="w-100 mb-4">
                  <input
                    type="file"
                    id="fileInput"
                    className="file-input2"
                    onChange={handleFileChange}
                  />
                  {/*=============== Loading Code =============== */}
                  {loading && (
                    <div className="d-flex my-2 w-100 justify-content-center ">
                      <div className=" d-flex align-items-center">
                        <h5 className="fw-bold fst-italic ms-4 mt-1 text-primary">
                          Chargement
                        </h5>
                        <PulseLoader className="m-4" color={'#128'} size={16} />
                      </div>
                    </div>
                  )}
                  {/*=============== Loading Code Fin =============== */}

                  {imageUrl === '' && selectedFile ? (
                    <div className="">
                      <p className="fichierChoisi ps-3">
                        <span className="Typy pe-2">Type de fichier :</span>
                        {selectedFile.type}
                      </p>
                      <div
                        className={`imgPreview1 ${
                          selectedFile.type !== 'video/mp4'
                            ? 'd-flex'
                            : 'd-none'
                        }`}
                      >
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt=""
                          className="previewIimage1 img-fluid "
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>

            {/* Les Ations du Modale */}

            <div className=" d-flex w-100 justify-content-end LimitBtnDiv">
              <button className="close me-2" onClick={handleCloseModal}>
                Annuler
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
      <ToastContainer />
      {/*________________________Le Modal_ FIN _______________________*/}
    </div>
  );
};
const ConfirmationModal = ({ isOpen, onClose, onConfirm, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal-M">
          <div className="modal-header">
            <span className="close-button" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <h2>Êtes-vous sûr?</h2>
            <p>
              Voulez-vous vraiment supprimer ce poste ? Ce processus ne peut pas
              être annulé.
            </p>
          </div>
          <div className="modal-footer">
            <button className="btn cancel" onClick={onClose}>
              Annuler
            </button>
            <button className="btn delete" onClick={onConfirm}>
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
