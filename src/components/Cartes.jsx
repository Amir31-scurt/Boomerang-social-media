// Exportation ----------------------///
import { IoIosArrowForward } from 'react-icons/io';
export default function Body() {
  // states
  const cartes = [
    {
      title: '7/24 LIVE HELP',
      para: 'Enterprise Solutions',
      imge: <img src="Images/img1.png" alt="" className="w-full" />,
      miniP: `Canned responses are used to answer the questions quickly,
        but not necessarily the lead to closing a sale.`,
      miniP2: <p>Faster response <br /> Right tone of language <br />Consistency in brand experience</p>,
      footText: `READ MORE`,
      icon: <IoIosArrowForward className="font-bold" />,
    },
    {
      title: 'CLOUD DATABASE',
      para: 'Enterprise Solutions',
      imge: <img src="Images/img2.png" alt="" className="w-full" />,
      miniP: `A cloud database is a basically a scalable content database running on a cloud computing platform that can be private, public, or hybrid.`,
      footText: `READ MORE`,
      icon: <IoIosArrowForward className="font-bold" />,
    },
    {
      title: 'ENTERPRISE ACCOUNT',
      para: 'Pricing',
      imge: <img src="Images/img3.png" alt="" className="w-full" />,
      miniP: `Enterprise solutions are designed to integrate multiple facets of a company's business through the interchange of information from various business process ...`,
      miniP3: <p className="text-sm mb-0.5">starting from</p>,
      miniP4 : <p className="text-xl">50.000 USD</p>,
      footText: `UPGRADE ENTERPRISE`,
      icon: <IoIosArrowForward className="font-bold" />,
    },
  ];

  const CarteInside = ({
    title,
    para,
    imge,
    miniP,
    miniP2,
    miniP3,
    miniP4,
    footText,
    icon
  }) => {
    return (
      <div className="w-3/3 mb-4 lg:w-1/3 shadow-xl rounded-lg bg-gray-100">
        <div className="title px-6 py-3">
          <h1 className="font-medium">{title}</h1>
          <p className="text-md text-gray-500">{para}</p>
        </div>
        <div className="cbody">
          <div className="">{imge}</div>
          <div className="mx-5 my-3">
            <p className="text-sm">{miniP}</p>
            <p className="text-sm mt-2">{miniP2}</p>
            <div className='flex items-end gap-2 justify-end'>
            {miniP3}{miniP4}
            </div>
          </div>
        </div>
        <div className="foot flex items-center justify-end bg-white gap-3 pe-3 py-4 rounded-b-lg">
          <h2 className="font-bold">{footText}</h2>
          {icon}
        </div>
      </div>
    );
  };

  const CartesListe = () => {
    return (
      <div className='flex-cols lg:flex gap-4'>
        {cartes.map((carte, index) => (
          <CarteInside {... carte} key={index}/>
        ))}
      </div>
    );
  };
  return (
    <div className="mx-8">
      <div className="py-5">
        <div className="flex">
          <CartesListe/>
        </div>
      </div>
    </div>
  );
};