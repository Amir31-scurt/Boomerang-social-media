import React from 'react';
import { IoLinkOutline } from 'react-icons/io5';
import { BiMessageDots } from 'react-icons/bi';
import { ImUserPlus } from "react-icons/im";
import BoutonSuivre from './BoutonSuivre';
import ObtenirDonnee from './ObtenirDonnee';
import './Yaya.css';


// const ContenuA = () => (
//   <div className="container py-4 rounded-3 imagespublié mt-3 ">
//     <div>
//       <img
//         src="https://cdn.pixabay.com/photo/2018/10/19/12/14/train-3758523_640.jpg"
//         alt=""
//         className="img-fluid"
//       />
//     </div>
//     <div>
//       <img
//         src="https://cdn.pixabay.com/photo/2017/12/03/22/11/winter-landscape-2995987_640.jpg"
//         alt=""
//         className="img-fluid"
//       />
//     </div>
//     <div>
//       <img
//         src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
//         alt=""
//         className="img-fluid"
//       />
//     </div>
//     <div>
//       <img
//         src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
//         alt=""
//         className="img-fluid"
//       />
//     </div>
//     <div>
//       <img
//         src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
//         alt=""
//         className="img-fluid"
//       />
//     </div>
//     <div>
//       <img
//         src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
//         alt=""
//         className="img-fluid"
//       />
//     </div>
//     <div>
//       <img
//         src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
//         alt=""
//         className="img-fluid"
//       />
//     </div>
//     <div>
//       <img
//         src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
//         alt=""
//         className="img-fluid"
//       />
//     </div>
//   </div>
// );
// const ContenuB = () => (
//   <div className="container py-4 rounded-3 imagespublié mt-3 ">
//     <div>
//         <iframe width="100%" height="180" src="https://www.youtube.com/embed/3MX_wrisCJ8?si=ClKP2pdNxSGSU6X-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//     </div>
//     <div>
//       <img
//         src="https://cdn.pixabay.com/photo/2017/12/03/22/11/winter-landscape-2995987_640.jpg"
//         alt=""
//         className="img-fluid"
//       />
//     </div>
//     <div>
//       <img
//         src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
//         alt=""
//         className="img-fluid"
//       />
//     </div>
//     <div>
//       <img
//         src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
//         alt=""
//         className="img-fluid"
//       />
//     </div>
//     <div>
//       <img
//         src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
//         alt=""
//         className="img-fluid"
//       />
//     </div>
//     <div>
//       <img
//         src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
//         alt=""
//         className="img-fluid"
//       />
//     </div>
//     <div>
//       <img
//         src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
//         alt=""
//         className="img-fluid"
//       />
//     </div>
//     <div>
//       <img
//         src="https://cdn.pixabay.com/photo/2021/11/02/07/59/winter-6762640_640.jpg"
//         alt=""
//         className="img-fluid"
//       />
//     </div>
//   </div>
// );
// const ContenuC = () => <div>Contenu C</div>;

function AutreProfile ( estSuivi) {

  // const [contenuId, setContenuId] = useState('contenuA');

  //  const [estSuivi, setEstSuivi] = useState(false);

  //  const handleClickSuivre = () => {
  //    // Mettez à jour l'état de suivi lors du clic sur le bouton
  //    setEstSuivi(!estSuivi);
  //  };

  // const afficherContenu = (id) => {
  //   setContenuId(id);
  // };

  //  const [searchProfil, setsearchProfil] = useState([]);

  //  useEffect(() => {
  //    const fetchProfiles = async () => {
  //      const users = collection(db, "users");
  //      const querySnapshot = await getDocs(users);

  //      const profiles = querySnapshot.docs.map((doc) => doc.data());
  //      setsearchProfil(profiles);
  //      console.log(profiles);
  //    };
  //    fetchProfiles();
  //  }, []);
  return (
    <div className="container my-4">
      <div className="position-relative bg-white w-100 justify-content-center align-items-center blanc  rounded-3  p-4">
        <div className="">
          <div className="plan bg-white  p-1">
            <img
              src="https://cdn.pixabay.com/photo/2020/12/26/13/19/christmas-background-5861438_640.jpg"
              className="w-100 haut rounded-4 img-fluid"
              alt=""
            />
          </div>
          <div>
            <div className="d-flex flex-wrap justify-content-around">
              <div className="colonne">
                <div className="bloc d-flex flex wrap justify-content-center">
                  <div className="profil "></div>
                  <div className="nom-utilisateur flex-column text-center ms-4 mt-2">
                    <div className="d-flex justify-content-center">
                      <div className="me-2">
                        <IoLinkOutline />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex separe justify-content-center gap-4 flex-wrap">
                  <div className="">
                    <h3>521</h3>
                    <p>Post</p>
                  </div>
                  <div className="border border-secondary  h-50 me-2"></div>
                  <div className="">
                    <h3>13.6K</h3>
                    <p>Followers</p>
                  </div>
                  <div className="border border-secondary h-50 me-2"></div>
                  <div className="">
                    <h3>2K</h3>
                    <p>Following</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center gap-4 mt-2">
                <div>
                  <button
                    type="button"
                    className="btn d-flex align-items-center message btn-info text-white py-2 px-4 rounded-5 "
                  >
                    <div className="pe-3">
                      <ImUserPlus />
                    </div>
                    Suivre
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn d-flex align-items-center message btn-outline-info text-info py-2 rounded-5"
                  >
                    <div className="pe-3">
                      <BiMessageDots />
                    </div>
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ObtenirDonnee />
    </div>
  );
};

export default AutreProfile;
