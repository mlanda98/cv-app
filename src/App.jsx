import React, { useState } from "react";
import CV from "./components.jsx/cv";
import "./styles.css";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isEditingPersonalInfo, setIsEditingPersonalInfo] = useState(true);

  const [education, setEducation] = useState({
    degree: "",
    institution: "",
    year: "",
  });

  const [isEditingEducation, setIsEditingEducation] = useState(true);

  const [experience, setExperience] = useState({
    jobTitle: "",
    company: "",
    years: "",
  });
  const [isEditingExperience, setIsEditingExperience] = useState(true);

  return (
    <div className="cv-container">
      <h1>CV App</h1>
      <CV
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        isEditingPersonalInfo={isEditingPersonalInfo}
        setIsEditingPersonalInfo={setIsEditingPersonalInfo}

        education={education}
        setEducation={setEducation}
        isEditingEducation={isEditingEducation}
        setIsEditingEducation={setIsEditingEducation}

        experience={experience}
        setExperience={setExperience}
        isEditingExperience={isEditingExperience}
        setIsEditingExperience={setIsEditingExperience}
      />
    </div>
  );
};

export default App;
