import React from 'react';

const FormInput = ({ type, id, placeholder, required, errorMessage }) => {
  return (
    <div className="mb-3 w-75 mx-auto">
      <input
        type={type}
        className={`form-control ${errorMessage && 'is-invalid'}`}
        id={id}
        placeholder={placeholder}
        required={required}
      />
      {errorMessage && <div className="invalid-feedback text-center">{errorMessage}</div>}
    </div>
  );
};

export default FormInput;
