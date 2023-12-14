

import React from 'react'

import { FiEdit3 } from "react-icons/fi";
import { FaRegUser, FaVideo } from "react-icons/fa";
import { FaRegImage, FaShareFromSquare } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiDotsThreeOutline } from "react-icons/pi";
import MyButton from "../ComposTimeLine/MyButton";
import { DropDown } from "../ComposTimeLine/DropDown";
import { format } from 'date-fns';

export const TableElems = [
  // Element numero 2

  {
    id: 2,
    likes: 0,
    profile: <FaRegUser />,
    nom: "Ousmane N'Diaye",
    date: format(new Date(), "dd / MM / yyyy"),
    suppression: <DropDown />,
    publication: "../imgs/test1.jpg",
    description:
      "Praesentium explicabo, dolorum voluptas iste eius nisi tenetur? Totamdddddddddddddddddddddddddddddddddddddddkjsdskjdskjs",
  },

  {
    id: 3,
    likes: 0,
    profile: <FaRegUser />,
    nom: "Fanta Sy",
    date: format(new Date(), "dd / MM / yyyy"),
    suppression: <DropDown />,

    publication: "../imgs/video1.mp4",
    description:
      "Totamnnnnnnnnnnnnnnnnnnnh,hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhuyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyypppppppppppppppppppppppppppppppppphhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyfffffffffffffffffwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
  },

  {
    id: 1,
    likes: 0,
    profile: <FaRegUser />,
    nom: "Moussa Diop",
    date: format(new Date(), "dd / MM / yyyy"),

    publication:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti ess hbsqjhbfhqsbfjsqbqshhhhhhhhistghidfsghjdfhkjsdhkjee ksiuerussklqezuidshuezybfeqjksdezhfbuyeheholquiqhrhqsjqshie",
  },
];

export const TextTablePost = [
  {
    id: 1,
    likes: 0,
    profile: <FaRegUser />,
    nom: "Moussa Diop",
    date: format(new Date(), "dd / MM / yyyy"),

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

