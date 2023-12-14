// Search.js
import React, { useState,useEffect } from 'react';
import ProfileCard from './ProfileCard.jsx';
import SearchForm from './SearchForm.jsx'; // Import the SearchForm component
import '../../App.css';
import { profiles } from './profile.jsx';
import { db } from '../../config/firebase-config.js';
import { collection,getDocs } from 'firebase/firestore';
import { PostCard } from '../ComposTimeLine/PostCard.jsx';

export default function Search() {
  const [search, setSearch] = useState('');

  return (
    <form className="form formSearch">
      <SearchForm filter={search} func={(e)=> setSearch(e.target.value)} />{' '}
      {/* Use the reusable SearchForm component */}
      <div className="container flex-column d-flex ">
        <div className="row">
          {profiles
            .filter((index) => {
              return search.toLowerCase() === ''
                ? index
                : index.name.toLowerCase().includes(search);
            })
            .map((profile, index) => (
              <ProfileCard key={index} {...profile} />
            ))}
        </div>
      </div>
    </form>
  );
}
