
import React, { useRef, useState } from "react";
import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { FiEdit3 } from "react-icons/fi";
import { FaRegUser, FaVideo } from "react-icons/fa";
import { Cards } from "../components/ComposTimeLine/Cards";
import { TextPublication } from "../components/ComposTimeLine/TextPublication";
import { PostCard } from "../components/ComposTimeLine/PostCard";
import { TableElems } from "../components/ComposTimeLine/TableElems";
import { UnModal } from "../components/ComposTimeLine/UnModal";


const Home = () => {
  // const [postCard, setPostCard] = useState(TableElems);

  // const DeletePost = (cardId) => {
  //   setPostCard((carte) => carte.filter((card) => card.id !== cardId));
  // };

  // const handleAddPost = (e) => {
  //   e.preventDefault();
  //   const image = e.target.nom.value;
  //   const descipt = e.target.description.value;
  //   console.log(image);

  //   const newPost = {
  //     id: postCard[postCard.length - 1]?.id + 1 ?? 0,
  //     likes: 0,
  //     profile: <FaRegUser />,
  //     nom: "Recuperer Le nom",
  //     date: "Recuperer la Date",
  //     publication: image,
  //     description: descipt,
  //   };
    
  //   setPostCard([...postCard , newPost])
  // };

  return (
    <div className="pt-5">

      {/* carte numero 1 */}


      <div className="CarteContainer">
        <Cards />
      </div>

      {/* carte numero 2 */}
      <div className="">{/* <TextPublication /> */}</div>

      {/* <div className="">
        {postCard.map((card) => {
          return (
            <PostCard
              id={card.id}
              likes={card.likes}
              profile={card.profile}
              nom={card.nom}
              date={card.date}
              suppression={card.suppression}
              publication={card.publication}
              description={card.description}
              addLikes={() => alert(card.id)}
              hadleDelete={(id) => {
                DeletePost(card.id);
              }}
            />
          );
        })}
      </div> */}
    </div>
  );
};
export default Home;
