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
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const users = collection(db, 'users');
      const querySnapshot = await getDocs(users);

      const profiles = querySnapshot.docs.map((doc) => doc.data());
      setSearchResults(profiles);
      console.log(profiles)
    };
    fetchProfiles();
  }, []);

  // const filtered = () =>{
  //   return setSearchResults.fiter((user) =>{
  //     user.displayName.toLowerCase().includes(search.toLowerCase())
  //   })
  // }

  
  return (
    <form className="form formSearch">
      <SearchForm filter={search} func={(e)=> setSearch(e.target.value)} />{' '}
      {/* Use the reusable SearchForm component */}
      <div className="container flex-column d-flex ">
        <div className="row">
        {console.log('search:', search)}
        {console.log('searchResults:', searchResults)}
          {searchResults
             .filter((profile) => {
              return (
                search.trim() === '' ||
                (profile.displayName && profile.displayName.toLowerCase().includes(search.toLowerCase()))
              );
             })
            .map((profile, index) => (
              <ProfileCard key={index} {...profile} />
            ))}
        </div>
      </div>
    </form>
  );
}
