import React from 'react';
import { IoLinkOutline } from 'react-icons/io5';
import { BiMessageDots} from 'react-icons/bi';



export default function FindProfil({ photoURL, displayName, email ,banner}) {

    
  return (

    <div>
          <div className="position-relative bg-white w-100 justify-content-center align-items-center blanc  rounded-3 mt-5 p-4">
        <div className="">
          <div className="plan bg-white  p-4">
            <img
              src={banner}
              className="w-100 haut rounded-4 img-fluid"
              alt=""
            />
          </div>
          <div>
            <div className="d-flex flex-wrap justify-content-around">
              <div className="bloc d-flex flex wrap">
                <div className="profil ms-5 ">
                  <img 
                    src={photoURL}
                    className="cursor-pointer border-4 border-white"
                    alt=""
                  />
                </div>
                <div className="nom-utilisateur flex-column text-center ms-4">
                  <h5>{displayName}</h5>
                  <p>{email}</p>
                </div>
              </div>
              <div className="d-flex align-items-center gap-3 me-5">
                <div>
                  <button
                    type="button"
                    className="btn d-flex align-items-center message btn-info text-white py-2 rounded-5 "
                  >
                    <div className="pe-3">
                      <IoLinkOutline />
                    </div>
                    Suivre
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    className="btn d-flex align-items-center message btn-outline-info text-info py-2 rounded-5"
                  >
                    <div className="pe-3">
                      <BiMessageDots />
                    </div>
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  )
}
