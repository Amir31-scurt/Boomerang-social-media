import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase-config';
import { ToastContainer, toast } from 'react-toastify';

export default function ModalOubli() {
  const history = useNavigate();
  history('/');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;

    sendPasswordResetEmail(auth, emailVal)
      .then(() => {
        toast.success(
          'Email envoyé, vérifiez votre mail pour recevoir les instructions',
          {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          }
        );
        // alert('verifier votre boite mail pour suivre les instruction');
      }, setTimeout(history, 5000))
      .catch((err) => {
        console.log(err);
        toast.error('🦄 Une erreur est survenue', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div class="col-md-6 mt-5  first">
          <div class="card-body  p-3  text-center text-white">
            <h2 class="fw-bold text-dark mb-5">Mot de passe Oublié?</h2>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              {/* Email input */}
              <div class="form-outline text-start mb-4">
                <input
                  type="email"
                  id="email"
                  class="form-control p-2"
                  required
                  placeholder="Saisissez votre mail"
                />
              </div>
              {/* <!-- Password input --> */}

              {/* <!-- Submit button --> */}
              <div className="text-end justify-content-between">
                <button type="button" class="btn btn-block  btn-secondary ">
                  <Link to="/connexion" className='text-decoration-none text-white'>Fermer</Link>
                </button>
                <button type="submit" className="btn but btn-block  text-white">
                  Envoyer
                </button>
                {/* <!-- Register buttons --> */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
