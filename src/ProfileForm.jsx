import React, { useState } from 'react';

function ProfileForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}, Age: ${age}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProfileForm;
