import React, {useState} from 'react';
import "./search.css";
import noire from '../../assets/images/noire.png';


const ProfileCard = ({ imageSrc, name, email}) => {
  const [buttonText, setButtonText] = useState('suivre')

  const handleClick = () =>{
    setButtonText('suivi....');
    console.log(setButtonText);

    setTimeout(() => { 
      setButtonText('Suivre'); 
  }, 2000);

  }
  
 
  return (
    
    <div className="mb-3 col-md-6">
      <div className="card">
        <div className="imageProfile">
          <img src={imageSrc} alt="" className='img-fluid w-100' />
        </div>
        <div className="mx-4 mt-3 d-flex justify-content-between cardConte">
          <div className="d-flex">
            <div className="rounded rounded-circle ms-2">
              {/* Assuming noire is a static image, you can replace it with a dynamic prop */}
              <img src={noire} alt="" className='image' />
            </div>
            <div className="paraTest ms-3">
              <h6 className='fw-bold'>{name}</h6>
              <p>{email}</p>
            </div>
          </div>
          <div className="">
            <button onClick={handleClick} className="w-20 btn btn-primary btn-sm rounded-5 mt-2">Suivre</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default ProfileCard;