import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import FormInput from './FormInput';
import { Modal, Button } from 'react-bootstrap';

function SignUp() {

  const nameRegex = /^[A-Za-z]+$/; // Des caractères alphabétiques uniquement

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const validateName = (name) => {
    return nameRegex.test(name);
  };

  const handleSubmit = (event) => {
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;

    setFirstNameError(!validateName(firstName) ? 'Enlever les chiffres.' : '');
    setLastNameError(!validateName(lastName) ? 'Enlever les chiffres.' : '');

    if (!validateName(firstName) || !validateName(lastName)) {
      event.preventDefault();
    }
  };

  // L'affichage du modal des termes et conditions
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Fonction pour l'affichage et la fermeture du modal
  const handleTermsModalClose = () => setShowTermsModal(false);
  const handleTermsModalShow = () => setShowTermsModal(true);

  return (
    <div className="p-2">
      <div className='container signUp-form'>
        <form action="" onSubmit={handleSubmit}>
          <div className="formPage p-lg-2 mx-auto text-white">
            <div className="signup-text mt-3 text-center">
              <h4 className='fw-boold'>Créer un compte</h4>
              <p>Remplissez vos informations ci-dessous ou inscrivez-vous avec votre compte </p>
            </div>

            <div className="row this_name g-0 mx-auto ">
              <div className="col-md-6 col-12">
                <FormInput
                  type="text"
                  id="firstName"
                  placeholder="Prénom"
                  required
                  errorMessage={firstNameError}
                />
              </div>
              <div className="col-md-6 col-12">
                <FormInput
                  type="text"
                  id="lastName"
                  placeholder="Nom"
                  required
                  errorMessage={lastNameError}
                />
              </div>
            </div>
            <FormInput type="email" id="email" placeholder="Email" required />
            <FormInput type="password" id="password" placeholder="Mot de passe" required />
            <FormInput type="password" id="password" placeholder="confirmation du mot de passe" required />
            <style>{`
              @media (max-width: 768px) {
                .w-75  {
                  width: 100% !important;
                }
              }
            `}</style>
            <div className="form-check mx-auto w-75">
              <input className="form-check-input required" type="checkbox" value="" id="flexCheckDefault" required />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                D’accord avec
                <span className='text-decoration-underline text-color'
                onClick={handleTermsModalShow}
                style={{ cursor: 'pointer' }}
                > 
                Termes et conditions
                </span>
              </label>
            </div>
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
              <a href="google" className="d-flex me-4 justify-content-center align-items-center border border-primary rounded-circle p-2">
                <FaGoogle className='text-white' size={29} style={{ color: '#4285F4', }} />
              </a>
              {/* Icône Facebook */}
              <a href="facebook" className="d-flex justify-content-center align-items-center border border-primary rounded-circle p-2">
                <FaFacebook className='text-white' size={30} style={{ color: '#1877F2' }} />
              </a>
            </div>
            <div className="lien-text mt-4 w-75 mx-auto d-flex justify-content-center align-items-center">
              <p>Vous avez déjà un compte ?<a className='text-color' href="sign-in"> Connexion</a></p>
            </div>
          </div>
        </form>

         {/* Modal pour les Termes et conditions */}
        <Modal className="me-4" show={showTermsModal} onHide={handleTermsModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Termes et conditions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Bienvenue sur notre réseau social, une plateforme conçue pour connecter les individus de manière positive et respectueuse.</p>
            <p>En créant un compte et en utilisant notre réseau social, vous acceptez explicitement les présentes conditions d'utilisation. Veuillez les lire attentivement avant de continuer.</p>
            <p>Le processus de création de compte est simple et ouvert à tous ceux qui respectent nos conditions d'admissibilité. Ces conditions visent à garantir un environnement sûr et respectueux pour tous nos utilisateurs</p>
            <p>Il est strictement interdit de publier du contenu illégal, offensant, discriminatoire ou contraire à nos normes communautaires. Nous nous réservons le droit de supprimer tout contenu en violation de ces règles.</p>
            <p>Nous attendons de nos utilisateurs qu'ils interagissent de manière respectueuse envers les autres membres de notre communauté. Tout comportement inapproprié, harcèlement ou discours haineux est strictement interdit</p>
            <p>Nous nous réservons le droit de modifier les termes et conditions à tout moment. Les utilisateurs seront informés des changements, et il est de leur responsabilité de consulter régulièrement les conditions mises à jour.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleTermsModalClose}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>     

      </div>
    </div>
  );
}

export default SignUp;
