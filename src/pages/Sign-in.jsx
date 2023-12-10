import React, { useContext, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Maria.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexte/authContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ModalOubli from './ModalOubli';

export default function Signin() {
  // states and verification concerne firebase
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [validation, setValidation] = useState('');
  const inputs = useRef([]);
  const addInputs = (elem) => {
    if (elem && !inputs.current.includes(elem)) {
      inputs.current.push(elem);
    }
  };
  const formRef = useRef();

  const handleSignIn = async (f) => {
    f.preventDefault();
    try {
      const cred = await signIn(
        inputs.current[0].value,
        inputs.current[1].value
      );
      console.log(cred);
      // retourner vide les inputs
      formRef.current.reset();
      setValidation('');
      navigate('/Timeline');
    } catch {
      // Si y'a erreur dans la connection du form
      toast.error("L'email et / ou le mot de passe n'est pas correcte", {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  // state pour le modal mot de pass oublier
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  // const handleHideModal = () => setOnHide(false);
  // render login
  return (
    <div className="">
      {/* <ModalOubli/> */}
      <div className="container text-center">
        <div className="row  justify-content-center align-items-center">
          <div class="col-lg-6 my-5 mb-5 mb-lg-0 ">
            <div class=" first p-4 ">
              <div class="card-body  p-4 text-center text-white">
                {/* <Link  className="text-decoration-none border-none">
                  <i className="bi bi-x-lg "></i>
                </Link> */}
              </div>
              <h2 class="fw-bold text-dark mb-5">Connection</h2>
              <form action="" onSubmit={handleSignIn} ref={formRef}>
                {/* Email input */}
                <div class="form-outline text-start mb-4">
                  <input
                    type="email"
                    id="email"
                    class="form-control p-3"
                    required
                    ref={addInputs}
                    placeholder="Adresse email"
                  />
                </div>
                {/* <!-- Password input --> */}
                <div class=" mb-4">
                  <input
                    type="password"
                    id="password"
                    class="form-control p-3"
                    required
                    ref={addInputs}
                    placeholder="Mot de passe"
                  />
                  {<p className="text-danger">{validation}</p>}
                  <div className="d-flex justify-content-between">
                    <Link
                      to="/Modal"
                      onClick={handleShowModal}
                      className="text-decoration-none"
                    >
                      <p className="text-dark">Mot de passe oublié?</p>
                    </Link>
                    {showModal}
                  </div>
                </div>
                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="btn but btn-block mb-3 text-white"
                >
                  Se connecter
                </button>
                {/* <!-- Register buttons --> */}
                <div className="mb-2">
                  <p className="text-dark">Je n'ai pas de compte?</p>
                  <button type="button" class="btn btn-link mx-1">
                    <Link to="/Inscription">
                      <h5>Créer un compte</h5>
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
