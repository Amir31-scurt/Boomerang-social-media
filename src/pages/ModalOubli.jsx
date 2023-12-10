import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom'; 
 import { sendPasswordResetEmail } from "firebase/auth";
 import { useNavigate } from "react-router-dom";
 import { auth }from "../config/firebase-config";


export default function ModalOubli() {
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;

    sendPasswordResetEmail(auth, emailVal)
      .then(() => {
        alert("verifier votre boite mail pour suivre les instruction");
        history("/");
      })
      .catch((err) => {
        alert(err.code);
      });

 }
  return (
<div className='container' >
<div className='row justify-content-center'>
  <div class="col-md-6 mt-5  first">
      <div class="card-body  p-3  text-center text-white">
                <h2 class="fw-bold text-dark mb-5">Mot De Pass Oublié?</h2>
                <form action=""  onSubmit={(e)=>handleSubmit(e)} >
                  {/* Email input */}
                  <div class="form-outline text-start mb-4">
                    <input
                      type="email"
                      id="email"
                      class="form-control p-2"
                      required
                      placeholder="email verification"
                    />
                  </div>
                  {/* <!-- Password input --> */}
                 
                  {/* <!-- Submit button --> */}
                  <div className='text-end justify-content-between'>
                  <button type="button"  class="btn btn-block  btn-secondary ">
                    <Link to="/connexion">
                        Fermer
                    </Link>
                    </button>
                  <button 
                    type="submit"
                    className="btn but btn-block  text-white"
                  >
                    Envoyer
                  </button>
                  {/* <!-- Register buttons --> */}
                  </div>
                </form>
              </div>
  </div>
  </div>
    </div>
  )
}
