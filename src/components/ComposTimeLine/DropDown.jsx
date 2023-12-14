import { React } from "react";
import { FiEdit3 } from "react-icons/fi";
import { PiDotsThreeOutline } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";

export const DropDown = ({ handleDelete, handleEditDesc, }) => {
  return (
    <div className="">
      <div class="dropdown border border-0">
        <button
          className=" border border-0 fs-2 bouton1"
          data-bs-toggle="dropdown"
        >
          <div>
            <PiDotsThreeOutline />
          </div>
        </button>
        <ul class="dropdown-menu dropDownMenu">
          <li>
            <button
              className="dropdown-item d-flex align-items-center"
              onClick={handleEditDesc}
            >
              <FiEdit3 className="fs-5 text-primary me-2" />
              Modifier
            </button>
          </li>
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
