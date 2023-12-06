import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Maria.css';
import { Link } from 'react-router-dom';

export default function Signin() {
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
                <h2 class="fw-bold mb-5">Sign-in</h2>
                <form>
                  {/* Email input */}
                  <div class="form-outline text-start mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control p-3"
                    />
                    <label class="form-label" for="form3Example3">
                      Email address
                    </label>
                  </div>
                  {/* <!-- Password input --> */}
                  <div class=" mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control p-3"
                    />
                    <div className="d-flex justify-content-between">
                      <label class="form-label" for="form3Example4">
                        Password
                      </label>
                      <a href="" className="text-decoration-none">
                        <p className="text-white">Forgot password?</p>
                      </a>
                    </div>
                  </div>
                  {/* <!-- Submit button --> */}
                  <Link to="/Timeline">
                    <button
                      type="submit"
                      className="btn but btn-block mb-4 text-white"
                    >
                      CONNEXION
                    </button>
                  </Link>
                  {/* <!-- Register buttons --> */}
                  <div className="mb-3">
                    <p>Don't have an accoun?</p>
                    <button type="button" class="btn btn-link mx-1">
                      <Link to="/Inscription">
                        <h5>Create an account</h5>
                      </Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
