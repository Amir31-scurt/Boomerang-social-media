
import React, { useState } from "react";
import MyButton from "../ComposTimeLine/MyButton";

export const UnModal = ({ modalStyle, handleCloseModal, handleAddPost, }) => {
  //States



  return (
    <div className="">
      <div className="modal-parant" style={modalStyle}>
        <div className="modal-contenu">
          {/* Le contenu du Modal */}

          <form action="submit" onSubmit={handleAddPost}>
            <div className=" d-flex flex-column mb-5">
              <label htmlFor="imageUrl" className="ms-2 fs-4 text-start">
                * Image URL
              </label>
              <input
                type="text"
                id="imageUrl"
                placeholder="image URL ..."
                className="px-3 mt-3"
                name="nom"
                // value={h}
                // onChange={b}
              />
            </div>

            <div className="  d-flex flex-column mb-5">
              <label htmlFor="aria-modal" className="ms-2 fs-4 text-start">
                * Add a description
              </label>
              <textarea
                cols=""
                id="aria-modal"
                rows="5"
                className="area-modal"
                name="description"
              ></textarea>
            </div>

            {/* Les Ations du Modale */}

            <div className=" d-flex w-100 justify-content-end">
              <button className="close me-2" onClick={handleCloseModal}>
                Anuler
              </button>
              {/* <button className="publish">Publish</button> */}
              <input type="submit" value={"Publie"} className="publish" />
              {/* <MyButton
                arg1="publish"
                handleClick={handleAddPost}
                btnName="Publier"
              /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
