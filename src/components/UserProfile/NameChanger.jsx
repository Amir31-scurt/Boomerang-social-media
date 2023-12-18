import React, { useState } from 'react';

export default function NameChanger() {
  function EditNameSurnameModal({ isOpen, onClose, onSave }) {
    const [newName, setNewName] = useState('');
    const [newSurname, setNewSurname] = useState('');

    const handleSubmit = () => {
      onSave(newName, newSurname);
      onClose();
    };

    return (
      <div
        style={{
          display: isOpen
            ? 'block'
            : 'none' /* Add more styling for the modal */,
        }}
      >
        <div /* Add styling for modal content */>
          <h2>Edit Name and Surname</h2>
          <input
            type="text"
            placeholder="New Name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="text"
            placeholder="New Surname"
            value={newSurname}
            onChange={(e) => setNewSurname(e.target.value)}
          />
          <button onClick={handleSubmit}>Save</button>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
}
