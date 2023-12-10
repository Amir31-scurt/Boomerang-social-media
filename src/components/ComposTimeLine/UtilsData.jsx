import { FiEdit3 } from "react-icons/fi";
import { FaRegUser, FaVideo } from "react-icons/fa";
import { FaRegImage, FaShareFromSquare } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiDotsThreeOutline } from "react-icons/pi";
import MyButton from "../ComposTimeLine/MyButton";
import { DropDown } from "../ComposTimeLine/DropDown";

export const PostText = ({ handleSubmit }) => {
  const TableCards = [
    {
      icone: <FiEdit3 className="fs-2" />,
      text1: "Create Post",
      container1: (
        <div className="icone-profile">
          <FaRegUser className="text-2xl" />
        </div>
      ),
      bouton3: (
        <MyButton arg1="publish" handleClick={handleSubmit} btnName="Publier" />
      ),
    },
  ];
  return TableCards;
};

