// SignUp.jsx
import React from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import FormInput from '../components/FormInput';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="Form-page h-100">
      <div className="container p-lg-2 p-3 signUp-form mt-1">
        <form action="">
          <div className="formPage p-lg-2  mx-auto text-white">
            <div className="signup-text mt-3 text-center">
              <h4 className="fw-boold">Create Account</h4>
              <p>
                Fill your information below or register with your social
                account.
              </p>
            </div>
            <FormInput
              type="text"
              id="firstName"
              placeholder="First Name"
              required
            />
            <FormInput
              type="text"
              id="lastName"
              placeholder="Last Name"
              required
            />
            <FormInput type="email" id="email" placeholder="Email" required />
            <FormInput
              type="password"
              id="password"
              placeholder="Password"
              required
            />
            <style jsx>{`
              @media (max-width: 768px) {
                .w-50 {
                  width: 100% !important;
                }
              }
            `}</style>
            <div className="form-check mx-auto w-50">
              <input
                className="form-check-input required"
                type="checkbox"
                value=""
                id="flexCheckDefault"
                required
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Agree with{' '}
                <span className="text-decoration-underline text-color">
                  Terms & condition
                </span>
              </label>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto mt-4">
              <Link to="/" className="w-100">
                <button
                  className="btn btn-primary rounded-5 w-100"
                  type="submit"
                >
                  Sign Up
                </button>
              </Link>
            </div>
            <div className="w-50 mx-auto d-flex justify-content-center align-items-center mt-4">
              <div className="border-0 type border-bottom me-1"></div>
              <div className="or-sign"> Or sign up whith </div>
              <div className="border-0 type border-bottom mx-1"></div>
            </div>
            <div className="icon-sign-up w-50 mx-auto d-flex justify-content-center align-items-center mt-4">
              {/* Icône Google */}
              <a
                href="google"
                className="d-flex me-4 justify-content-center align-items-center border border-primary rounded-circle p-2"
              >
                <FaGoogle
                  className="text-white"
                  size={29}
                  style={{ color: '#4285F4' }}
                />
              </a>

              {/* Icône Facebook */}
              <a
                href="facebook"
                className="d-flex justify-content-center align-items-center border border-primary rounded-circle p-2"
              >
                <FaFacebook
                  className="text-white"
                  size={30}
                  style={{ color: '#1877F2' }}
                />
              </a>
            </div>
            <div className="lien-text mt-4 w-50 mx-auto d-flex justify-content-center align-items-center">
              <p>
                Already have an account?
                <Link className="text-color" to="/Connexion">
                  {' '}
                  sign in
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
