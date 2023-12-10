import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';

export default function ModalOubli() {

 

  return (
<div className='container' >
<div className='row justify-content-center'>
  <div class="col-md-6 mt-5  first">
      <div class="card-body  p-3  text-center text-white">
                <h2 class="fw-bold text-dark mb-5">Mot De Pass Oublié?</h2>
                <form action="">
                  {/* Email input */}
                  <div class="form-outline text-start mb-4">
                    <input
                      type="email"
                      id="password"
                      class="form-control p-2"
                      required
                      placeholder="Nouveau mot de pass"
                    />
                  </div>
                  {/* <!-- Password input --> */}
                  <div class=" mb-4">
                    <input
                      type="password"
                      id="password"
                      class="form-control p-2"
                      required
                      placeholder="  Confirmer Mot de passe"
                    />
                  </div>
                  {/* <!-- Submit button --> */}
                  <div className='text-end justify-content-between'>
                  <button type="button"  class="btn btn-block  btn-secondary ">
                        Fermer
                    </button>
                  <button
                    type="button"
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
