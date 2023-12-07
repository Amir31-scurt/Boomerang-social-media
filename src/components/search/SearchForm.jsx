// SearchForm.js
import React from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchForm = () => {
  return (
    <div className='px-5 mx-2 contenu'>
      <div className="px-5 mb-3 bg-white border-0 card shadow-xss w-100 d-block d-flex g-10" id="searching">
      <div className="p-3 border-0 d-flex">
        <div className="flex p-0 card-body align-items-center">
          <h1 className="mt-0 mb-0 ml-1 fs-4 font-md search" id="titre">
            Compte
          </h1>
          <div className="flex search-form-2 ms-auto">
            <div className="">
              <input
                type="text"
                className="mb-0 bg-opacity-25 border-0 bg-secondary input form-control text-grey-500 theme-dark-bg "
                placeholder="Search"
                id="input"
              />
            </div>
            <CiSearch className="w-40 icon" size={30} />
          </div>
        </div>
      </div>

     
    </div>
    </div>
  );
};

export default SearchForm;
