import React from "react";
import { ImUserPlus } from "react-icons/im";


const BoutonSuivre = ({ estSuivi, onClick }) => {
  return (
    <button
      type="button"
      className="btn d-flex align-items-center message btn-info text-white py-2 px-4 rounded-5 "
      onClick={onClick}
    >
      <div className="pe-3">
        <ImUserPlus />
      </div>
      {estSuivi ? "suivi(e)" : "Suivre"}
    </button>
  );
};

export default BoutonSuivre;
