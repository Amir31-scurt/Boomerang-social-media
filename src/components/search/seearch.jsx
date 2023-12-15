import React, { useState, useEffect, useContext } from 'react';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import SearchForm from './SearchForm.jsx';
import '../../App.css';
import { db, DB } from '../../config/firebase-config.js';
import { collection, getDocs } from 'firebase/firestore';
import { AuthContext } from '../../contexte/authContext.js';

export default function Search() {
  const { currentUser } = useContext(AuthContext);
  const [search, setSearch] = useState('');
  return (
    <div className="form formSearch">
      <SearchForm filter={search} func={(e) => setSearch(e.target.value)} />
      <div className="container flex-column d-flex ">
        <div className="row">
          {searchResults &&
            searchResults
              .filter((profile) => {
                return (
                  search.trim() === '' ||
                  (profile.displayName &&
                    profile.displayName
                      .toLowerCase()
                      .includes(search.toLowerCase()))
                );
              })
              .map((profile, index) => {
                return (
                  <div key={index} className="mb-3 col-12">
                    <div className="card w-100  position-relative">
                      <div className="mx-4 my-3 d-flex justify-content-between align-items-center cardConte">
                        <div className="d-flex align-items-center">
                          <div className="rounded rounded-circle ms-2">
                            <input
                              type="image"
                              alt=""
                              className="icone-carte me-3 image rounded rounded-circle ms-2"
                              src={profile.photoURL}
                            />
                          </div>
                          <div className="paraTest ms-3 text-start">
                            <h6 className="fw-bold">{profile.displayName}</h6>
                            <p className="ml-1">{profile.email}</p>
                          </div>
                        </div>
                        <div className="">
                          <button
                            onClick={() => handleFollowUser(profile.userId)}
                            style={{
                              background: isFollowing[profile.userId]
                                ? 'gray'
                                : 'blue',
                              color: 'white',
                            }}
                            className="btn btn-primary btn-md rounded-5 mt-2 border:active-none"
                            id="button"
                          >
                            {isFollowing[profile.userId]
                              ? 'Suivi(e)'
                              : 'Suivre'}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}
