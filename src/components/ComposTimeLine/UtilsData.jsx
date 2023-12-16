import { FiEdit3 } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa';
import MyButton from '../ComposTimeLine/MyButton';

export const PostText = ({ handleSubmit }) => {
  const TableCards = [
    {
      icone: <FiEdit3 className="fs-2" />,
      text1: 'Ajouter une publication',
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
