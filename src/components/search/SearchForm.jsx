// SearchForm.js²
import { CiSearch } from 'react-icons/ci';
import '../search/search.css';

const SearchForm = ({ func, filter }) => {
  // const handleFilterChange = (event) => {
  //   setSearch(event.target.value);
  // };

  return (
    <div className="px-lg-5 px-3 mx-0 mx-lg-2 contenu d-flex">
      <div
        className="px-5 mb-5 bg-white border-0 card shadow shadow-2 w-100 d-flex gap-5"
        id="searching"
      >
        <div className="d-flex my-lg-3 my-1">
          <div className="d-flex p-0 card-body justify-content-between align-items-center p-3 gap-4">
            <div className="col-0 col-lg-3">
              <h1 className="m-0 fs-4 search" id="titre">
                Compte
              </h1>
            </div>
            <div className="d-flex col-12 col-lg-9 search-form-2 ms-0 ms-lg-auto">
              <div class="input-group">
                <input
                  value={filter}
                  onChange={func}
                  type="text"
                  name="search"
                  className="mb-0 bg-opacity-25 border-0 bg-secondary input form-control"
                  placeholder="Search"
                  id="input"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <CiSearch className="icon" />
                </span>
              </div>
              {/* <div className="col-9"></div>
              <CiSearch className="w-40 icon mt-3 ml-5" size={20} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
