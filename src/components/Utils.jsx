
import React from 'react'
import { HiOutlineDocument, HiOutlineViewGrid } from "react-icons/hi";
import { AiOutlineBell} from "react-icons/ai";
import { FiMessageSquare, FiUser, FiPieChart, FiSettings } from "react-icons/fi";
import { MdOutlinePayment, MdEdit } from "react-icons/md";
import Menu from './Menu'

// export const Taby = [
//   {
//     classis: "w-4/6 m-auto part3",
//     bouty: "bg-[#343A40] h-14 flex items-center justify-center mb-6 rounded-md	 w-full",
//     contenu: 'Upgrade',
//   }
// ]


const Elements = [
  { icone: <HiOutlineDocument  className="me-6 icono"/>, text: 'Documents' },
  { icone: <MdOutlinePayment className="me-6 icono" />, text: 'Payments' },
  { icone: <FiMessageSquare className="me-6 icono" />, text: 'Messages' },
  { icone: <FiPieChart className="me-6 icono" />, text: 'Report Center' },
]

export default Elements
 
