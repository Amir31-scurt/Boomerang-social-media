

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
  // Element numero 2

  {
    id: 2,
    likes: 0,
    profile: <FaRegUser />,
    nom: "Ousmane N'Diaye",
    date: "14 / 06 / 2023",
    suppression: <DropDown />,
    publication: "../imgs/test1.jpg",
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

    publication: "../imgs/video1.mp4",
    description: (
      <p className="">
        Praesentium explicabo, dolorum voluptas iste eius nisi tenetur? Totam,
        expedita ducimus? Ipsam libero adipisci earum sapiente dolores! Lorem
      </p>
    ),
  },

  {
    id: 1,
    likes: 0,
    profile: <FaRegUser />,
    nom: "Moussa Diop",
    date: "12 / 05 / 2023",

    publication:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ess hbsqjhbfhqsbfjsqbqshhhhhhhhistghidfsghjdfhkjsdhkjee ksiuerussklqezuidshuezybfeqjksdezhfbuyeheholquiqhrhqsjqshie",
  },
];

export const TextTablePost = [
  {
    id: 1,
    likes: 0,
    profile: <FaRegUser />,
    nom: "Moussa Diop",
    date: "12 / 05 / 2023",

    publication: (
      <p className="fw-bold text-secondary">
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti esse
        facere, provident accusamus, praesentium explicabo, dolorum voluptas
        iste eius nisi tenetur? Totam, expedita ducimus? Ipsam libero adipisci
        earum sapiente dolores! Lorem ipsum dolor sit amet consectetur, ducimus?
        Ipsam libero adipisci earum sapiente dolores! Lorem ipsum dolor dolores!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti esse
        facere, provident accusamus, praesentium explicabo, dolorum voluptas
        iste eius nisi tenetur? Totam, expedita ducimus? Ipsam libero adipisci
        earum sapiente dolores!"
      </p>
    ),
  },
];

