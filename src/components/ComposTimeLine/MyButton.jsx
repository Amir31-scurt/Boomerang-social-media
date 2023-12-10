import React from "react";

function MyButton({ arg1, handleClick, btnName }) {
  return (
    <button className={arg1} onClick={handleClick}>
      {btnName}
    </button>
  );
}
export default MyButton;
