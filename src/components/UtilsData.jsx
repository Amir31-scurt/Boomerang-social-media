import { FiEdit3 } from 'react-icons/fi';
import { FaRegUser, FaVideo } from 'react-icons/fa';
import { FaRegImage } from 'react-icons/fa6';
import { RiDeleteBin6Line } from 'react-icons/ri';
// import pic1 from '../assets/images/logo.webp';

export const TableCards = [
  {
    icone: <FiEdit3 className="text-2xl" />,
    text1: 'Create Post',
    container1: (
      <div className="icone-profile">
        <FaRegUser className="text-2xl" />
      </div>
    ),

    // container2: (
    //   <textarea
    //     name=""
    //     id="text-aria"
    //     className="w-full"
    //     placeholder="What's your mind ?"
    //   ></textarea>
    // ),
    bouton1: <FaVideo className="text-3xl text-[#6d3]" />,
    bouton2: <FaRegImage className="text-3xl text-[#6d35e6]" />,
    bouton3: (
      <button className="btn icone-actions p-0">
        <button className="btn text-white publish">Publish</button>
      </button>
    ),
  },
];

export const PublishTable = [
  {
    id: 1,
    likes: 0,
    profile: <FaRegUser />,
    nom: 'Moussa Diop',
    date: '12 / 05 / 2023',
    suppression: <RiDeleteBin6Line className="fs-3 me-5 text-danger" />,
    publication: (
      <p className="font-bold text-gray-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti esse
        facere, provident accusamus, praesentium explicabo, dolorum voluptas
        iste eius nisi tenetur? Totam, expedita ducimus? Ipsam libero adipisci
        earum sapiente dolores! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Deleniti esse facere, provident accusamus, praesentium
        explicabo, dolorum voluptas iste eius nisi tenetur? Totam, expedita
        ducimus? Ipsam libero adipisci earum sapiente dolores! Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Deleniti esse facere, provident
        accusamus, praesentium explicabo, dolorum voluptas iste eius nisi
        tenetur? Totam, expedita ducimus? Ipsam libero adipisci earum sapiente
        dolores! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Deleniti esse facere, provident accusamus, praesentium explicabo,
        dolorum voluptas iste eius nisi tenetur? Totam, expedita ducimus? Ipsam
        libero adipisci earum sapiente dolores!
      </p>
    ),
  },

  // Element numero 2

  {
    id: 2,
    likes: 0,
    profile: <FaRegUser />,
    nom: "Ousmane N'Diaye",
    date: '14 / 06 / 2023',
    suppression: <RiDeleteBin6Line className="fs-3 text-danger me-5" />,
    // publication: <img src={pic1} alt="image" className="w-full" />,
  },

  {
    id: 3,
    likes: 0,
    profile: <FaRegUser />,
    nom: 'Fanta Sy',
    date: '18 / 04 / 2023',
    suppression: <RiDeleteBin6Line className="fs-3 text-danger me-3" />,
    publication: (
      <figure>
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/Dn1jhs-MsXE?si=6MCQmOX1E8Ozo8oT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="w-100"
        ></iframe>
        <figcaption className="fontFamily mt-2">Une vidéo</figcaption>
      </figure>
    ),
  },
];
