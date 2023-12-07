// Search.js
import React from 'react';
import ProfileCard from './ProfileCard';
import SearchForm from './SearchForm'; // Import the SearchForm component
import "../../App.css"

export default function Search() {
  const profiles = [
    {
      imageSrc: "https://img.freepik.com/photos-gratuite/vue-appareil-informatique-3d-peripheriques_23-2150714035.jpg?w=360&t=st=1701812003~exp=1701812603~hmac=5ca7f1746f037d85d26d3cdeeb0000ed941080fb9c2242c8512c78ea58e29c10",
      name: "Anna Dior",
      email: "anna@fljj23",
    },
    {
      imageSrc:"https://img.freepik.com/photos-gratuite/complexite-du-sile-controle-ordre-mondial-industrie-communications-genere-par-ia_24640-81722.jpg?w=740&t=st=1701812290~exp=1701812890~hmac=97bc51fa8d398c8bf47402076fe23ac02259b40011a1d814c27863a58bc10881",
      name: "Mohamed Sarr",
      email: "sarr@fljj23",
    },
    {
      imageSrc: "https://img.freepik.com/photos-premium/collage-porte-rue_23-2150385880.jpg?w=360",
      name: "Mariama Ba",
      email: "mariam@fljnh3",
    },
    {
      imageSrc: "https://img.freepik.com/photos-gratuite/graphique-lumineux-montre-croissance-financiere-reussie-generee-par-ia_24640-80670.jpg?w=740&t=st=1701811051~exp=1701811651~hmac=b63a7dbe11c05512d81c27c337a3badc9b65e15972deb8d21c5786d44377f458",
      name: "Sam Laye",
      email: "laye@flç3hlkd",
    },
    // Add more profiles as needed
  ];
  return (
    <form className="form">
      <SearchForm /> {/* Use the reusable SearchForm component */}
    <div className="container gap-3 flex-column d-flex">
      <div className="row">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </div>
    </form>
  );
}



