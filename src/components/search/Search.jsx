// Search.js
import React, {useState} from 'react';
import ProfileCard from './ProfileCard';
import SearchForm from './SearchForm'; // Import the SearchForm component
import "../../App.css";
import {profiles} from "../../components/search/profile.jsx";

export default function Search() {
 const [search, setSearch] = useState('');
  
  return (
    <form className="form">
      <SearchForm  search={search} setSearch={setSearch}/> {/* Use the reusable SearchForm component */}
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



