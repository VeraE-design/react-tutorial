import React, { useState } from "react";
// controlled input - set up state values from all input filled

const SimpleForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="myform">
        <input
          type="text"
          placeholder="First Name"
          className="myinput my-2"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="myinput my-2"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit" className="mybtn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;
