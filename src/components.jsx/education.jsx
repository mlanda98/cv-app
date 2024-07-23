/* eslint-disable react/prop-types */
import React, { useState } from "react";

const EducationForm = ({ education, onSubmit, isEditing, setIsEditing }) => {
  const [degree, setDegree] = useState(education.degree);
  const [institution, setInstitution] = useState(education.institution);
  const [year, setYear] = useState(education.year);


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({degree, institution, year});
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Degree:</label>
            <input
             type="text"
             value={degree}
             onChange={(e) => setDegree(e.target.value)}
            />
          </div>
          <div>
            <label>Institution:</label>
            <input
             type="text"
             value={institution}
             onChange={(e) => setInstitution(e.target.value)}
            />
          </div>
          <div> 
            <label>Year:</label>
            <input
             type="date"
             value={year}
             onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Degree: {education.degree}</p>
          <p>Institution: {education.institution}</p>
          <p>Phone: {education.year}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EducationForm;
