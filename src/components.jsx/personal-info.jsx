/* eslint-disable react/prop-types */
import React, { useState } from "react";

const PersonalInfoForm = ({ personalInfo, onSubmit, isEditing, setIsEditing }) => {
  const [name, setName] = useState(personalInfo.name);
  const [email, setEmail] = useState(personalInfo.email);
  const [phone, setPhone] = useState(personalInfo.phone);


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({name, email, phone});
    console.log("form submitted");
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
             type="text"
             value={name}
             onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
             type="email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div> 
            <label>Phone:</label>
            <input
             type="tel"
             value={phone}
             onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {personalInfo.name}</p>
          <p>Email: {personalInfo.email}</p>
          <p>Phone: {personalInfo.phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default PersonalInfoForm;
