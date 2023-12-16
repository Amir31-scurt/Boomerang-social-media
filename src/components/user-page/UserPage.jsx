import React, { useContext } from 'react';
import { CgMore } from 'react-icons/cg';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { PostImageProfile } from './PostImageProfile';
import { Banner } from '../user-page/Banner';
import { AuthContext } from '../../contexte/authContext';

export function UserPage() {
  const { user, currentUser } = useContext(AuthContext);
  return (
    <div>
      <div className="d-flex flex-column gap-0 gap-lg-5 align-items-center justify-content-center py-0 py-lg-3">
        <div className="bg-light Sec1 col-11 rounded rounded-2">
          {/* // Header */}
          <div className="text-center my-0 my-lg-5 w-100">
            <Banner />
            <div className="d-flex px-5 z-5 position-absolute position-lg-relative w-50 w-lg-auto max-lg:top-52 max-lg:rounded-xl max-lg:mt-0 max-lg:bg-gray-100 max-lg:flex-col items-center max-lg:justify-center justify-around mt-4">
              <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start gap-4 position-absolute max-lg:-top-16 col-10 col-lg-7">
                <div className="">
                  <input
                    type="image"
                    src={currentUser.photoURL}
                    alt="#"
                    className="cursor-pointer rounded photo_Profile rounded-circle border border-4 border-white"
                  />
                </div>
                <div className="d-flex flex-column text-center text-lg-start w-50 col-lg-9">
                  <h1 className="fs-3 fw-bold text-dark">
                    {currentUser.displayName}
                  </h1>
                  <h2 className="fs-6 text-secondary">{currentUser.email}</h2>
                </div>
              </div>
              <div className="d-flex z-5 align-items-center justify-content-center justify-contet-lg-end gap-4 w-100 position-absolute position-lg-relative max-lg:top-48">
                <button className="btn btn-primary px-5 py-3 text-white fw-bold rounded-pill">
                  Edit Profile
                </button>
                <button className="px-5 py-3 btn btn-outline-primary fw-bold rounded-pill">
                  <CgMore />
                </button>
              </div>
            </div>
          </div>
          {/* // Body */}
        </div>
        <div className="bg-gray-100 Sec2Body p-5 max-lg:mt-0 w-2/3 max-lg:w-full rounded-xl max-lg:rounded-none max-lg:inset-x-0 max-lg:bottom-56">
          <div className="w-full rounded-xl flex flex-col gap-10">
            {/* <div className="max-lg:pt-10">
            <a
              href="#"
              className=" flex gap-3 text-md font-bold text-grey-500 card-body p-0 d-flex items-center ms-4"
            >
              <AiOutlineEdit className="text-4xl bg-blue-200 rounded-full p-1 text-white" />
              Create Post
            </a>
          </div>
          <div className="relative py-10">
            <div class="absolute mt-1 top-5 bg-white rounded-xl pt-2 w-full h-48">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="UserImage"
                class="drop-shadow-sm rounded-full w-9 absolute ms-2 mt-1"
              />
              <textarea
                name="message"
                className="h-full rounded-xl p-2 ps-14 font-2xl text-grey-500 focus:outline-none w-full"
                placeholder="What's on your mind?"
              ></textarea>
            </div>
          </div> */}
            <div className="Publications">
              <ul className="flex justify-around">
                <li>
                  <button className="act">Images</button>
                </li>
                <li>
                  <button>Postes</button>
                </li>
                <li>
                  <button>Videos</button>
                </li>
              </ul>
            </div>
            {/* <PostImageProfile /> */}
          </div>
        </div>
        {/* // Footer */}
        <div className=""></div>
      </div>
    </div>
  );
}
