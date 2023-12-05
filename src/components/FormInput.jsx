import React from 'react';

const FormInput = ({ type, id, placeholder, required }) => {
  return (
    <div className="mb-3 w-50 mx-auto">
      <input type={type} className="form-control" id={id} placeholder={placeholder} required={required} />
    </div>
  );
};

export default FormInput
