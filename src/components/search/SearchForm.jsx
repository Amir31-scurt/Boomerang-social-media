// SearchForm.js²
import { CiSearch } from 'react-icons/ci';

const SearchForm = ({search, setSearch}) => {
  const handleFilterChange = (event) => {
    setSearch(event.target.value);
  };
 
  
  return (
    <div className='px-5 mx-2 contenu d-flex'>
      <div className="px-5 mb-5 bg-white border-0 card shadow-xss w-100 d-block d-flex g-10" id="searching">
      <div className="p-3 border-0 d-flex">
        <div className="d-flex p-0 card-body align-items-center">
          <h1 className="mt-0 mb-0 ml-0 fs-4 font-md search" id="titre">
            Compte
          </h1>
          <div className="d-flex search-form-2 ms-auto mb-2 ml-5">
            <div className="">
              <input onChange={handleFilterChange}
                type="text" name="search"
                className="mb-0 bg-opacity-25 border-0 bg-secondary input form-control text-grey-500 "
                placeholder="Search"
                id="input"
              />
            </div>
            <CiSearch className="w-40 icon mt-3 ml-5" size={20} />
          </div>
        </div>
      </div>

     
    </div>
    </div>
  );
};

export default SearchForm;
