import React from 'react';

export const UnModal = ({ modalStyle, handleCloseModal }) => {
  return (
    <div className="">
      <div className="modal-parant" style={modalStyle}>
        <div className="modal-contenu">
          {/* Le contenu du Modal */}

          <div className="">
            <div className="  flex flex-col mb-14">
              <label htmlFor="imageUrl" className="ms-2 text-xl">
                * Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                placeholder="image URL ..."
                className="px-3 mt-3"
                // value={h}
                // onChange={b}
              />
            </div>

            <div className="  flex flex-col mb-14">
              <label htmlFor="aria-modal" className="ms-2 text-xl">
                * Add a description
              </label>
              <textarea
                cols=""
                id="aria-modal"
                rows="5"
                className="area-modal"
              ></textarea>
            </div>

            {/* Les Ations du Modale */}

            <div className=" flex w-full justify-end">
              <button className="close me-2" onClick={handleCloseModal}>
                Cancel
              </button>
              <button className="publish">Publish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
