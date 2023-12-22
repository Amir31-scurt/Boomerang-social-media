import React, { useState, useRef, useContext } from 'react';
import { AuthContext } from '../../contexte/authContext';
import '../../assets/css/SignUp.css';
// import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';
import icon from '../../assets/images/user.png';
import banner from '../../assets/images/Banner.jpg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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

  // Modal de termes et condtions d'utilisation
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  // Authentifiaction
  const formRef = useRef();
  const [validation, setValidation] = useState('');
  const [loading, setLoading] = useState(false);
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
      setValidation('Les mots de passe doit contenir minimum 6 caracteres');
      return;
    } else if (inputs.current[3].value !== inputs.current[4].value) {
      setValidation('Les mots de passe ne correspondent pas');
      return;
    }

    // Authentifier le mail et le mot de passe
    try {
      const cred = await signUp(
        inputs.current[2].value,
        inputs.current[3].value,
        inputs.current[0].value,
        inputs.current[1].value,
        icon,
        banner
      );

      // retourner vide les inputs
      formRef.current.reset();
      toast.success('Inscription valide avec succès', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      setValidation('');
      setLoading(true);
      navigate('/Connexion');
      setLoading(false);
    } catch (err) {
      // Si y'a erreur dans l'authentification
      console.log(err.code);
      if (err.code === 'auth/invalid_email') {
        toast.error("L'email n'est pas valide", {
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
      if (err.code === 'auth/invalid_password') {
        toast.error("Le mot de passe n'est pas valide", {
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
      if (err.code === 'auth/email-already-in-use') {
        toast.error("L'email est déja utilisé, veuillez saisir un autre mail", {
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
    }
  };

  return (
    <div className="tester">
      <div className="p-2">
        <div className="container signUp-form">
          <form action="" onSubmit={handleSubmit} ref={formRef}>
            <div className="formPage p-lg-2 mx-auto text-dark">
              <div className="signup-text mt-3 text-center">
                <h4 className="fw-bold">Créer un compte</h4>
                <p>Remplissez vos informations ci-dessous.</p>
              </div>

              <div className="row this_name g-0 mx-auto">
                <div className="col-md-6 col-12">
                  <div className="mb-3 w-75 mx-auto">
                    <input
                      type="text"
                      className={`form-control text-center p-3 ${
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
                      className={`form-control text-center p-3 ${
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
                  className="form-control text-center p-3"
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
                  className="form-control text-center p-3"
                  id="password"
                  placeholder="Mot de passe"
                  required
                  ref={addInputs}
                />
                {<p className="text-danger">{validation}</p>}
              </div>
              <div className="mb-3 w-75 mx-auto">
                <input
                  type="password"
                  className="form-control text-center p-3"
                  id="passwordConfirmation"
                  placeholder="Confirmation du mot de passe"
                  required
                  ref={addInputs}
                />
              </div>
              {/* Terms and conditions checkbox */}
              <div className="form-check d-flex justify-content-center align-items-center gap-1">
                <input
                  className="form-check-input required text-center p-0 m-0"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  required
                />
                <label
                  className="form-check-label d-flex gap-1"
                  htmlFor="flexCheckDefault"
                >
                  D’accord avec les {''}
                  <Link className="text-decoration-none" onClick={handleShow}>
                    termes et conditions
                  </Link>
                </label>
              </div>
              {/* Bootstrap Modal */}
              <Modal
                show={showModal}
                className="TermsModal bg-light bg-opacity-25 vh-100 d-flex align-items-center  w-100 p-0 m-0"
                onHide={handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Termes et Conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Bienvenue sur notre réseau social, une plateforme conçue
                    pour connecter les individus de manière positive et
                    respectueuse.
                  </p>
                  <p>
                    En créant un compte et en utilisant notre réseau social,
                    vous acceptez explicitement les présentes conditions
                    d'utilisation. Veuillez les lire attentivement avant de
                    continuer.
                  </p>
                  <p>
                    Le processus de création de compte est simple et ouvert à
                    tous ceux qui respectent nos conditions d'admissibilité. Ces
                    conditions visent à garantir un environnement sûr et
                    respectueux pour tous nos utilisateurs
                  </p>
                  <p>
                    Il est strictement interdit de publier du contenu illégal,
                    offensant, discriminatoire ou contraire à nos normes
                    communautaires. Nous nous réservons le droit de supprimer
                    tout contenu en violation de ces règles.
                  </p>
                  <p>
                    Nous attendons de nos utilisateurs qu'ils interagissent de
                    manière respectueuse envers les autres membres de notre
                    communauté. Tout comportement inapproprié, harcèlement ou
                    discours haineux est strictement interdit
                  </p>
                  <p>
                    Nous nous réservons le droit de modifier les termes et
                    conditions à tout moment. Les utilisateurs seront informés
                    des changements, et il est de leur responsabilité de
                    consulter régulièrement les conditions mises à jour.
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Fermer
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* Submit button */}
              <div className="d-grid gap-2 col-6 mx-auto w-75 mt-4">
                <button
                  className="btn text-white rounded-2 fs-5 but d-flex align-items-center justify-content-center gap-3"
                  type="submit"
                >
                  S’inscrire
                  {loading && <ClipLoader color={'#8bcbf9'} size={20} />}
                </button>
              </div>
              <div className="lien-text mt-4 w-75 mx-auto d-flex justify-content-center align-items-center">
                <p>
                  Vous avez déjà un compte ?{'   '}
                  <Link to="/Connexion" className="text-decoration-none">
                    Connexion
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
