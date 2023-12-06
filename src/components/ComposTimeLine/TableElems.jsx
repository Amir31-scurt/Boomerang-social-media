
import React from 'react'

import { FiEdit3 } from "react-icons/fi";
import { FaRegUser, FaVideo } from "react-icons/fa";
import { FaRegImage, FaShareFromSquare } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiDotsThreeOutline } from "react-icons/pi";
import MyButton from "../ComposTimeLine/MyButton";
import { DropDown } from "../ComposTimeLine/DropDown";

export const TableElems = [
  {
    id: 1,
    likes: 0,
    profile: <FaRegUser />,
    nom: "Moussa Diop",
    date: "12 / 05 / 2023",
    publication: (
      <p className="fw-bold text-secondary">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti esse
        facere, provident accusamus, praesentium explicabo, dolorum voluptas
        iste eius nisi tenetur? Totam, expedita ducimus? Ipsam libero adipisci
        earum sapiente dolores! Lorem ipsum dolor sit amet consectetur,
        ducimus? Ipsam libero adipisci earum sapiente dolores! Lorem ipsum dolor
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
    date: "14 / 06 / 2023",
    suppression: <DropDown />,
    publication: (
      <img src="../imgs/test1.jpg" alt="images" className="w-100 rounded-3" />
    ),
    description: (
      <p className="">
        Praesentium explicabo, dolorum voluptas iste eius nisi tenetur? Totam,
        expedita ducimus? Ipsam libero adipisci earum sapiente dolores! Lorem
      </p>
    ),
  },

  {
    id: 3,
    likes: 0,
    profile: <FaRegUser />,
    nom: "Fanta Sy",
    date: "18 / 04 / 2023",
    suppression: <DropDown />,
    publication: (
      <figure>
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/Dn1jhs-MsXE?si=6MCQmOX1E8Ozo8oT"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className="w-100 rounded-3"
        ></iframe>
        <figcaption className="fontFamily"></figcaption>
      </figure>
    ),
    description: (
      <p className="">
        Praesentium explicabo, dolorum voluptas iste eius nisi tenetur? Totam,
        expedita ducimus? Ipsam libero adipisci earum sapiente dolores! Lorem
      </p>
    ),
  },
];

