import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
export default function modalTermeEtCondition() {
  // Fonction pour l'affichage et la fermeture du modald
  const [showTermsModal, setShowTermsModal] = useState(false);
  const handleTermsModalClose = () => setShowTermsModal(false);

  return (
    <div>
      {/* Modal pour les Termes et conditions */}
      <Modal className="me-4">
        <Modal.Header closeButton>
          <Modal.Title>Termes et conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Bienvenue sur notre réseau social, une plateforme conçue pour
            connecter les individus de manière positive et respectueuse.
          </p>
          <p>
            En créant un compte et en utilisant notre réseau social, vous
            acceptez explicitement les présentes conditions d'utilisation.
            Veuillez les lire attentivement avant de continuer.
          </p>
          <p>
            Le processus de création de compte est simple et ouvert à tous ceux
            qui respectent nos conditions d'admissibilité. Ces conditions visent
            à garantir un environnement sûr et respectueux pour tous nos
            utilisateurs
          </p>
          <p>
            Il est strictement interdit de publier du contenu illégal,
            offensant, discriminatoire ou contraire à nos normes communautaires.
            Nous nous réservons le droit de supprimer tout contenu en violation
            de ces règles.
          </p>
          <p>
            Nous attendons de nos utilisateurs qu'ils interagissent de manière
            respectueuse envers les autres membres de notre communauté. Tout
            comportement inapproprié, harcèlement ou discours haineux est
            strictement interdit
          </p>
          <p>
            Nous nous réservons le droit de modifier les termes et conditions à
            tout moment. Les utilisateurs seront informés des changements, et il
            est de leur responsabilité de consulter régulièrement les conditions
            mises à jour.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleTermsModalClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
