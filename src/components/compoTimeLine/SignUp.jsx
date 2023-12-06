import React, { useState, useRef, useContext } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { AuthContext } from '../../contexte/authContext';
import '../../assets/css/SignUp.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const { signUp } = useContext(AuthContext);
  console.log(signUp);
  const nameRegex = /^[A-Za-z]+$/; // Alphabetic characters only

  // definir le moyen de naviguer entre les routes
  const navigate = useNavigate();

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const validateName = (name) => {
    return nameRegex.test(name);
  };
  const inputs = useRef([]);
  const addInputs = (val) => {
    if (val && !inputs.current.includes(val)) {
      inputs.current.push(val);
    }
  };

  // Authentifiaction
  const formRef = useRef();
  const [validation, setValidation] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    setFirstNameError(
      !validateName(firstName) ? 'Veuillez saisir des lettres.' : ''
    );
    setLastNameError(
      !validateName(lastName) ? 'Veuillez saisir des lettres.' : ''
    );

    if (!validateName(firstName) || !validateName(lastName)) {
      event.preventDefault();
    }

    console.log(inputs);
    // mot de passe (verification et Longueur)
    if (
      (inputs.current[3].value.length || inputs.current[4].value.length) < 6
    ) {
      setValidation('Le mots de passe doit contenir minimum 6 caracteres');
      return;
    } else if (inputs.current[3].value !== inputs.current[4].value) {
      setValidation('Les mots de passe ne correspondent pas');
      return;
    }

    // Authentifier le mail et le mot de passe
    try {
      const cred = await signUp(
        inputs.current[2].value,
        inputs.current[3].value
      );
      // retourner vide les inputs
      formRef.current.reset();
      setValidation('');
      navigate('/Timeline');
    } catch (err) {
      // Si y'a erreur dans l'authentification
      console.log(err);
      if (err.code === 'auth/invalid_email') {
        setValidation("L'email n'est pas valide");
      }
      if (err.code === 'auth/invalid_password') {
        setValidation("Le mot de passe n'est pas valide");
      }
      if (err.code === 'auth/email-already-in-use') {
        setValidation("L'email est déja utilisé'");
      }
    }
  };

  return (
    <div className="tester">
      <div className="p-2">
        <div className="container signUp-form">
          <form action="" onSubmit={handleSubmit} ref={formRef}>
            <div className="formPage p-lg-2 mx-auto text-white">
              <div className="signup-text mt-3 text-center">
                <h4 className="fw-boold">Créer un compte</h4>
                <p>
                  Remplissez vos informations ci-dessous ou inscrivez-vous avec
                  votre compte{' '}
                </p>
              </div>

              <div className="row this_name g-0 mx-auto">
                <div className="col-md-6 col-12">
                  <div className="mb-3 w-75 mx-auto">
                    <input
                      type="text"
                      className={`form-control ${
                        firstNameError && 'is-invalid'
                      }`}
                      id="firstName"
                      placeholder="Prénom"
                      required
                      ref={addInputs}
                    />
                    {firstNameError && (
                      <div className="invalid-feedback text-center">
                        {firstNameError}
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="mb-3 w-75 mx-auto">
                    <input
                      type="text"
                      className={`form-control ${
                        lastNameError && 'is-invalid'
                      }`}
                      id="lastName"
                      placeholder="Nom"
                      required
                      ref={addInputs}
                    />
                    {lastNameError && (
                      <div className="invalid-feedback text-center">
                        {lastNameError}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-3 w-75 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  required
                  ref={addInputs}
                />
                {/* Add error message logic here if needed */}
              </div>
              <div className="mb-3 w-75 mx-auto">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Mot de passe"
                  required
                  ref={addInputs}
                />
                {/* {<p className="text-danger">{validation}</p>} */}
              </div>
              <div className="mb-3 w-75 mx-auto">
                <input
                  type="password"
                  className="form-control"
                  id="passwordConfirmation"
                  placeholder="Confirmation du mot de passe"
                  required
                  ref={addInputs}
                />
                {<p className="text-danger">{validation}</p>}
              </div>
              {/* Terms and conditions checkbox */}
              <div className="form-check mx-auto w-75">
                <input
                  className="form-check-input required"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  required
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  D’accord avec
                  <span className="text-decoration-underline text-color">
                    {' '}
                    Termes et conditions
                  </span>
                </label>
              </div>
              {/* Submit button */}
              <div className="d-grid gap-2 col-6 mx-auto w-75 mt-4">
                <button className="btn btn-primary rounded-5" type="submit">
                  S’enregistrer
                </button>
              </div>
              <div className="w-75 mx-auto d-flex justify-content-center align-items-center mt-4">
                <div className="border-0 type border-bottom me-1"></div>
                <div className="or-sign"> Ou inscrivez-vous avec</div>
                <div className="border-0 type border-bottom mx-1"></div>
              </div>
              <div className="icon-sign-up w-75 mx-auto d-flex justify-content-center align-items-center mt-4">
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
              <div className="lien-text mt-4 w-75 mx-auto d-flex justify-content-center align-items-center">
                <p>
                  Vous avez déjà un compte ?
                  <a className="text-color" href="sign-in">
                    {' '}
                    Connexion
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
