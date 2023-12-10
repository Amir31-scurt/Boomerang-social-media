import React, { forwardRef } from 'react';
import '../../assets/css/SignUp.css';

const FormInput = forwardRef(
  ({ type, id, placeholder, required, forwardedRef, errorMessage }, ref) => {
    const setInputRef = (el) => {
      if (forwardedRef) {
        forwardedRef.current = el; // Assign the DOM element to the forwardedRef
      }
      if (ref) {
        ref(el); // Call the ref function passed by React.forwardRef
      }
    };

    return (
      <div className="mb-3 w-75 mx-auto">
        <input
          type={type}
          className={`form-control ${errorMessage && 'is-invalid'}`}
          id={id}
          placeholder={placeholder}
          required={required}
          ref={setInputRef}
        />
        {errorMessage && (
          <div className="invalid-feedback text-center">{errorMessage}</div>
        )}
      </div>
    );
  }
);

export default FormInput;
