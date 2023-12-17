import React from "react";

export default function Input() {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <i className="bi bi-paperclip"></i>
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <i className="bi bi-card-image"></i>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

// npm i uuid
// npm i uuid@7
