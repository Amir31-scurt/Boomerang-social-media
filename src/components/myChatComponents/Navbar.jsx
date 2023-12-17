import React from "react";
import { AuthContext } from "../../contexte/authContext";
import { useContext } from "react";

export default function Navbar() {
  const { user } = useContext(AuthContext);

  const prenom = user ? user.displayName.split(" ")[0] : null;
  const nom = user ? user.displayName.split(" ")[1] : null;
  const photoURL = user ? user.photoURL : null;

  return (
    <div className="navbar">
      <div className="user">
        <img src={photoURL} alt="profil" />
        <span>{prenom}</span>
        <button onClick={() => console.log(nom)}>logout</button>
      </div>
    </div>
  );
}
