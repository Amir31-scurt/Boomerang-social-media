import { React } from "react";
import { FiEdit3 } from "react-icons/fi";
import { PiDotsThreeOutline } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiBarsArrowDown } from "react-icons/hi2";

export const DropDown = ({ handleDelete, ModiferDescriptBouton, ModiferTextBouton }) => {
  return (
    <div className="">
      <div class="dropdown border border-0">
        <button
          className=" border border-0 fs-2 bouton1"
          data-bs-toggle="dropdown"
        >
          <div>
            <HiBarsArrowDown className="text-secondary" />
          </div>
        </button>
        <ul class="dropdown-menu dropDownMenu">
          <li>{ModiferDescriptBouton}</li>
          <li>{ModiferTextBouton}</li>
          <li className="mt-2">
            <button
              class="dropdown-item d-flex align-items-center"
              onClick={handleDelete}
            >
              <RiDeleteBin6Line className=" fs-5 text-danger me-2" />
              Supprimer
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
