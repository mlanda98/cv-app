/* eslint-disable react/prop-types */
import React, { useState } from "react";

const ExperienceForm = ({
  experience,
  onSubmit,
  isEditing,
  setIsEditing,
}) => {
  const [jobTitle, setJobTitle] = useState(experience.jobTitle);
  const [company, setCompany] = useState(experience.company);
  const [years, setYears] = useState(experience.years);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ jobTitle, company, years});
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Job Title:</label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Company:</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div>
            <label>Years:</label>
            <input
              type="date"
              value={years}
              onChange={(e) => setYears(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company: {experience.jobTitle}</p>
          <p>Experience: {experience.company}</p>
          <p>Phone: {experience.years}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default ExperienceForm;
