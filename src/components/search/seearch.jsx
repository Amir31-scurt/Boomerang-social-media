// Search.js
import React, { useState } from 'react';
import ProfileCard from './ProfileCard.jsx';
import SearchForm from './SearchForm.jsx'; // Import the SearchForm component
import '../../App.css';
import { profiles } from './profile.jsx';

export default function Search() {
  const [search, setSearch] = useState("");

  return (
    <form className="form formSearch">
      <SearchForm search={search} setSearch={setSearch} />{' '}
      {/* Use the reusable SearchForm component */}
      <div className="container flex-column d-flex ">
        <div className="row">
          {/* {profiles
            .filter((index) => {
              return search.toLowerCase() === ''
                ? index
                : index.name.toLowerCase().includes(search);
            })
            .map((profile, index) => ( */}
              <ProfileCard />
            {/* ))} */}
        </div>
      </div>
    </form>
  );
}
