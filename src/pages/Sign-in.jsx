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

export default function Signin() {
  // states and verification
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

  // render login
  return (
    <div className="fond scale-up-right">
      <div className="container text-center">
        <div className="row  justify-content-center align-items-center">
          <div class="col-lg-6 my-5 mb-5 mb-lg-0 ">
            <div class=" first">
              <div class="card-body  p-5 shadow-4 text-center text-white">
                <div className="text-end X">
                  <button>
                    <i className="bi bi-x-lg "></i>
                  </button>
                </div>
                <h2 class="fw-bold mb-5">Connection</h2>
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
                      <Link href="#" className="text-decoration-none">
                        <p className="text-white">Mot de passe oublié?</p>
                      </Link>
                    </div>
                  </div>
                  {/* <!-- Submit button --> */}
                  <button
                    type="submit"
                    className="btn but btn-block mb-4 text-white"
                  >
                    Se connecter
                  </button>
                  {/* <!-- Register buttons --> */}
                  <div className="mb-3">
                    <p>Je n'ai pas de compte?</p>
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
      </div>
      <ToastContainer />
    </div>
  );
}
