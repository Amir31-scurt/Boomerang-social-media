import { useState } from "react";
import React  from "react";
import { ImUserPlus } from "react-icons/im";


const BoutonSuivre = () => {
   const [estSuivi, setEstSuivi] = useState(false);

   const handleClickSuivre = () => {
     // Mettez à jour l'état de suivi lors du clic sur le bouton
     setEstSuivi(!estSuivi);
   };

//   const afficherContenu = (id) => {
//     setContenuId(id);
//   };

  return (
    <button
      type="button"
      className="btn d-flex align-items-center message btn-info text-white py-2 px-4 rounded-5 "
    >
      <div className="pe-3">
        <ImUserPlus />
      </div>
      {estSuivi ? "suivi(e)" : "Suivre"}
    </button>
  );
};

export default BoutonSuivre;
